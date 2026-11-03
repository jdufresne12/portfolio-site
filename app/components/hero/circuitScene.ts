import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * A procedurally routed circuit board with the JD chip at its centre.
 * Gold signals travel along the copper traces into the chip; the pointer
 * acts like a flashlight that brightens nearby copper.
 */

const COLORS = {
  board: new THREE.Color("#0E1A3D"),
  copper: new THREE.Color("#2A418F"),
  copperLit: new THREE.Color("#5B78D6"),
  gold: new THREE.Color("#FFBD2F"),
};

const CHIP = 2.6; // chip side length in world units
const BOUNDS = { x: 17, z: 11 };
const CELL = 0.22;

type Vec = { x: number; z: number };

interface Options {
  reducedMotion: boolean;
  logoUrl: string;
  onReady?: () => void;
}

// 8 compass directions; routing turns in 45° steps like real PCB traces.
const DIRS: Vec[] = [
  { x: 1, z: 0 }, { x: 1, z: 1 }, { x: 0, z: 1 }, { x: -1, z: 1 },
  { x: -1, z: 0 }, { x: -1, z: -1 }, { x: 0, z: -1 }, { x: 1, z: -1 },
].map((d) => {
  const l = Math.hypot(d.x, d.z);
  return { x: d.x / l, z: d.z / l };
});

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class Occupancy {
  private cells = new Set<string>();
  key(x: number, z: number) {
    return `${Math.round(x / CELL)},${Math.round(z / CELL)}`;
  }
  segmentFree(a: Vec, b: Vec, skipStart = 0) {
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    const steps = Math.ceil(len / (CELL * 0.5));
    for (let i = skipStart; i <= steps; i++) {
      const t = i / steps;
      const x = a.x + (b.x - a.x) * t;
      const z = a.z + (b.z - a.z) * t;
      if (this.cells.has(this.key(x, z))) return false;
    }
    return true;
  }
  markSegment(a: Vec, b: Vec, pad = 1) {
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    const steps = Math.ceil(len / (CELL * 0.5));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      this.markPoint({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t }, pad);
    }
  }
  markPoint(p: Vec, pad = 1) {
    const cx = Math.round(p.x / CELL);
    const cz = Math.round(p.z / CELL);
    for (let dx = -pad; dx <= pad; dx++) for (let dz = -pad; dz <= pad; dz++) this.cells.add(`${cx + dx},${cz + dz}`);
  }
  rectFree(cx: number, cz: number, hw: number, hd: number) {
    for (let x = cx - hw; x <= cx + hw; x += CELL) for (let z = cz - hd; z <= cz + hd; z += CELL) if (this.cells.has(this.key(x, z))) return false;
    return true;
  }
  markRect(cx: number, cz: number, hw: number, hd: number) {
    for (let x = cx - hw; x <= cx + hw + 1e-6; x += CELL) for (let z = cz - hd; z <= cz + hd + 1e-6; z += CELL) this.cells.add(this.key(x, z));
  }
}

interface Trace {
  points: Vec[];
  toChip: boolean;
}

function route(start: Vec, dirIndex: number, occ: Occupancy, rand: () => number, maxSegments: number): Vec[] {
  const pts: Vec[] = [start];
  let p = start;
  let di = dirIndex;
  for (let s = 0; s < maxSegments; s++) {
    const candidates = s === 0 ? [di] : rand() < 0.55 ? [di, (di + 1) % 8, (di + 7) % 8] : [(di + (rand() < 0.5 ? 1 : 7)) % 8, di];
    let moved = false;
    for (const c of candidates) {
      const d = DIRS[c];
      // Never route back toward the chip.
      const out = { x: p.x, z: p.z };
      const outward = d.x * out.x + d.z * out.z;
      if (s > 0 && outward < -0.05) continue;
      const len = (c % 2 === 1 ? 0.5 : 0.8) + rand() * 2.4;
      const q = { x: p.x + d.x * len, z: p.z + d.z * len };
      if (!occ.segmentFree(p, q, 2)) continue;
      occ.markSegment(p, q);
      pts.push(q);
      p = q;
      di = c;
      moved = true;
      break;
    }
    if (!moved) break;
    if (Math.abs(p.x) > BOUNDS.x || Math.abs(p.z) > BOUNDS.z) break;
  }
  return pts;
}

function buildTraces(seed: number, density: number, clearLeftOf: number | null) {
  const rand = mulberry32(seed);
  const occ = new Occupancy();
  const h = CHIP / 2;
  occ.markRect(0, 0, h + 0.3, h + 0.3);
  // Keep the area behind the hero text quiet on wide layouts.
  if (clearLeftOf !== null) {
    const w = (BOUNDS.x + 2 - clearLeftOf) / 2;
    occ.markRect(-BOUNDS.x - 2 + w, 0, w, BOUNDS.z + 2);
  }

  const traces: Trace[] = [];
  // Chip pins: matches the two-pins-per-side layout of the JD logo, plus extra pins
  // for a busier, more chip-like look.
  const pinOffsets = [-0.78, -0.48, -0.16, 0.16, 0.48, 0.78].map((f) => f * h);
  const pins: { p: Vec; dir: number; side: number; offset: number }[] = [];
  const sides = [
    { dir: 0, n: { x: 1, z: 0 } },
    { dir: 2, n: { x: 0, z: 1 } },
    { dir: 4, n: { x: -1, z: 0 } },
    { dir: 6, n: { x: 0, z: -1 } },
  ];
  sides.forEach((side, si) => {
    for (const o of pinOffsets) {
      const p =
        side.n.x !== 0 ? { x: side.n.x * (h + 0.32), z: o } : { x: o, z: side.n.z * (h + 0.32) };
      pins.push({ p, dir: side.dir, side: si, offset: o });
    }
  });

  for (const pin of pins) {
    const pts = route(pin.p, pin.dir, occ, rand, 14);
    if (pts.length > 1) traces.push({ points: pts, toChip: true });
  }

  // Background traces between vias scattered over the board.
  const extra = Math.round(170 * density);
  for (let i = 0; i < extra; i++) {
    const start = { x: (rand() * 2 - 1) * BOUNDS.x, z: (rand() * 2 - 1) * BOUNDS.z };
    if (Math.hypot(start.x, start.z) < CHIP * 1.1) continue;
    if (!occ.segmentFree(start, start)) continue;
    // Bias direction outward from the chip.
    const angle = Math.atan2(start.z, start.x);
    const di = (Math.round((angle / (Math.PI * 2)) * 8) + 8 + (rand() < 0.3 ? (rand() < 0.5 ? 1 : 7) : 0)) % 8;
    const pts = route(start, di, occ, rand, 2 + Math.floor(rand() * 5));
    if (pts.length > 1) traces.push({ points: pts, toChip: false });
  }

  // Small SMD components in free spots.
  const parts: { x: number; z: number; rot: boolean }[] = [];
  for (let i = 0; i < 400 && parts.length < Math.round(34 * density); i++) {
    const x = (rand() * 2 - 1) * (BOUNDS.x - 1);
    const z = (rand() * 2 - 1) * (BOUNDS.z - 1);
    const rot = rand() < 0.5;
    const hw = rot ? 0.2 : 0.4;
    const hd = rot ? 0.4 : 0.2;
    if (Math.hypot(x, z) < CHIP * 1.2) continue;
    if (!occ.rectFree(x, z, hw + 0.15, hd + 0.15)) continue;
    occ.markRect(x, z, hw + 0.1, hd + 0.1);
    parts.push({ x, z, rot });
  }

  return { traces, pins, parts, rand };
}

function traceGeometry(traces: Trace[], rand: () => number) {
  const positions: number[] = [];
  const dist: number[] = [];
  const meta: number[] = []; // len, seed, active, across
  const indices: number[] = [];
  let v = 0;

  for (const t of traces) {
    const width = t.toChip ? 0.075 : 0.05 + rand() * 0.04;
    const total = t.points.reduce((acc, p, i) => (i === 0 ? 0 : acc + Math.hypot(p.x - t.points[i - 1].x, p.z - t.points[i - 1].z)), 0);
    const seed = rand();
    // Chip traces carry signals; about a third of the others do too.
    const active = t.toChip ? 1 : rand() < 0.35 ? 0.6 : 0;
    let walked = 0;
    for (let i = 1; i < t.points.length; i++) {
      const a = t.points[i - 1];
      const b = t.points[i];
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      const dx = (b.x - a.x) / len;
      const dz = (b.z - a.z) / len;
      const nx = -dz * (width / 2);
      const nz = dx * (width / 2);
      const ext = width / 2; // square caps hide joints
      const ax = a.x - dx * ext, az = a.z - dz * ext;
      const bx = b.x + dx * ext, bz = b.z + dz * ext;
      const d0 = walked - ext;
      const d1 = walked + len + ext;
      positions.push(ax + nx, 0, az + nz, ax - nx, 0, az - nz, bx + nx, 0, bz + nz, bx - nx, 0, bz - nz);
      dist.push(d0, d0, d1, d1);
      meta.push(total, seed, active, 1, total, seed, active, -1, total, seed, active, 1, total, seed, active, -1);
      indices.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
      v += 4;
      walked += len;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("aDist", new THREE.Float32BufferAttribute(dist, 1));
  geo.setAttribute("aMeta", new THREE.Float32BufferAttribute(meta, 4));
  geo.setIndex(indices);
  return geo;
}

const traceVertex = /* glsl */ `
  attribute float aDist;
  attribute vec4 aMeta;
  varying float vDist;
  varying vec4 vMeta;
  varying vec2 vWorld;
  void main() {
    vDist = aDist;
    vMeta = aMeta;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const traceFragment = /* glsl */ `
  uniform float uTime;
  uniform float uReveal;
  uniform float uMotion;
  uniform vec2 uPointer;
  uniform vec2 uChip;
  uniform vec3 uCopper;
  uniform vec3 uCopperLit;
  uniform vec3 uGold;
  varying float vDist;
  varying vec4 vMeta;
  varying vec2 vWorld;

  void main() {
    float len = vMeta.x;
    float seed = vMeta.y;
    float signal = vMeta.z;
    float across = abs(vMeta.w);

    // Power-up reveal: copper appears outward from the chip on load.
    float r = length(vWorld - uChip);
    float reveal = 1.0 - smoothstep(uReveal - 1.5, uReveal, r);
    if (reveal <= 0.001) discard;

    float edge = 1.0 - smoothstep(0.55, 1.0, across);

    // Pointer flashlight.
    float lit = 1.0 - smoothstep(0.0, 3.2, length(vWorld - uPointer));
    vec3 col = mix(uCopper, uCopperLit, lit * 0.85);

    // Signal pulses travel toward distance 0 (the chip end for chip traces).
    float speed = 1.6 + seed * 1.8;
    float period = len + 5.0 + seed * 10.0;
    float head = len - mod(uTime * speed * uMotion + seed * 97.0, period);
    float d = vDist - head;
    float pulse = d >= 0.0 ? exp(-d * 1.6) : 0.0;
    pulse *= signal * step(-0.2, head);
    // Faint gold front where the reveal is happening.
    float front = (1.0 - smoothstep(0.0, 1.5, abs(r - uReveal + 0.6))) * (1.0 - step(30.0, uReveal));

    col = mix(col, uGold, clamp(pulse + front * 0.6, 0.0, 1.0));
    float alpha = (0.92 + pulse * 0.08) * edge * reveal;
    gl_FragColor = vec4(col * (1.0 + pulse * 0.6), alpha);
  }
`;

function makeLogoTexture(url: string): Promise<THREE.CanvasTexture> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const size = 1024;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d")!;
      ctx.drawImage(img, 0, 0, size, size);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      resolve(tex);
    };
    img.onerror = reject;
    img.src = url;
  });
}

function makeShadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 10, 64, 64, 64);
  g.addColorStop(0, "rgba(2,6,20,0.85)");
  g.addColorStop(1, "rgba(2,6,20,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export class CircuitScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);
  private board = new THREE.Group();
  private chip = new THREE.Group();
  private traceMat: THREE.ShaderMaterial;
  private clock = new THREE.Clock();
  private raf = 0;
  private running = false;
  private pointerNdc = new THREE.Vector2(0, 0);
  private pointerTarget = new THREE.Vector2(0, 0);
  private pointerWorld = new THREE.Vector2(99, 99);
  private pointerWorldTarget = new THREE.Vector2(99, 99);
  private raycaster = new THREE.Raycaster();
  private plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private revealStart = -1;
  private layout = { offsetX: 0, offsetZ: 0, distance: 15 };
  private disposed = false;
  private disposables: { dispose(): void }[] = [];

  constructor(private container: HTMLElement, private opts: Options) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.domElement.style.display = "block";
    container.appendChild(this.renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const room = new RoomEnvironment();
    this.scene.environment = pmrem.fromScene(room, 0.04).texture;
    room.dispose?.();
    pmrem.dispose();

    const small = Math.min(container.clientWidth, window.innerWidth) < 700;
    const wide = container.clientWidth / Math.max(container.clientHeight, 1) > 1.15;
    const { traces, pins, parts, rand } = buildTraces(1207, small ? 0.6 : 1, wide ? 3.6 : null);

    // Traces
    const traceGeo = traceGeometry(traces, rand);
    this.traceMat = new THREE.ShaderMaterial({
      vertexShader: traceVertex,
      fragmentShader: traceFragment,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uReveal: { value: opts.reducedMotion ? 60 : 0 },
        uMotion: { value: opts.reducedMotion ? 0 : 1 },
        uPointer: { value: this.pointerWorld },
        uChip: { value: new THREE.Vector2(0, 0) },
        uCopper: { value: COLORS.copper },
        uCopperLit: { value: COLORS.copperLit },
        uGold: { value: COLORS.gold },
      },
    });
    const traceMesh = new THREE.Mesh(traceGeo, this.traceMat);
    traceMesh.position.y = 0.002;
    this.board.add(traceMesh);
    this.disposables.push(traceGeo, this.traceMat);

    // Vias at trace ends
    const viaGeo = new THREE.RingGeometry(0.055, 0.12, 20);
    viaGeo.rotateX(-Math.PI / 2);
    const viaMat = new THREE.MeshStandardMaterial({ color: "#9C7526", metalness: 0.85, roughness: 0.5 });
    const ends = traces.flatMap((t) => (t.toChip ? [t.points[t.points.length - 1]] : [t.points[0], t.points[t.points.length - 1]]));
    const vias = new THREE.InstancedMesh(viaGeo, viaMat, ends.length);
    const m = new THREE.Matrix4();
    ends.forEach((p, i) => vias.setMatrixAt(i, m.makeTranslation(p.x, 0.004, p.z)));
    this.board.add(vias);
    this.disposables.push(viaGeo, viaMat);

    // SMD parts: dark body with gold end caps
    const bodyGeo = new THREE.BoxGeometry(0.5, 0.1, 0.24);
    const capGeo = new THREE.BoxGeometry(0.12, 0.11, 0.26);
    const bodyMat = new THREE.MeshStandardMaterial({ color: "#0A1128", roughness: 0.6, metalness: 0.1 });
    const capMat = new THREE.MeshStandardMaterial({ color: "#D9A53A", metalness: 1, roughness: 0.35 });
    const bodies = new THREE.InstancedMesh(bodyGeo, bodyMat, parts.length);
    const caps = new THREE.InstancedMesh(capGeo, capMat, parts.length * 2);
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3(1, 1, 1);
    parts.forEach((p, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), p.rot ? Math.PI / 2 : 0);
      bodies.setMatrixAt(i, m.compose(new THREE.Vector3(p.x, 0.05, p.z), q, s));
      const off = 0.25;
      const ox = p.rot ? 0 : off;
      const oz = p.rot ? off : 0;
      caps.setMatrixAt(i * 2, m.compose(new THREE.Vector3(p.x - ox, 0.055, p.z - oz), q, s));
      caps.setMatrixAt(i * 2 + 1, m.compose(new THREE.Vector3(p.x + ox, 0.055, p.z + oz), q, s));
    });
    this.board.add(bodies, caps);
    this.disposables.push(bodyGeo, capGeo, bodyMat, capMat);

    // Chip
    const shadowTex = makeShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(CHIP * 1.9, CHIP * 1.9);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.position.y = 0.006;
    this.board.add(shadow);
    this.disposables.push(shadowTex, shadowGeo, shadowMat);

    const bodyH = 0.38;
    const chipBodyGeo = new RoundedBoxGeometry(CHIP, bodyH, CHIP, 4, 0.12);
    const chipBodyMat = new THREE.MeshStandardMaterial({ color: "#0B1230", roughness: 0.42, metalness: 0.25 });
    const chipBody = new THREE.Mesh(chipBodyGeo, chipBodyMat);
    chipBody.position.y = bodyH / 2 + 0.06;
    this.chip.add(chipBody);
    this.disposables.push(chipBodyGeo, chipBodyMat);

    const pinGeo = new THREE.BoxGeometry(0.42, 0.06, 0.12);
    const pinMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 1, roughness: 0.28 });
    const pinMesh = new THREE.InstancedMesh(pinGeo, pinMat, pins.length);
    pins.forEach((pin, i) => {
      const horizontal = pin.side % 2 === 0;
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), horizontal ? 0 : Math.PI / 2);
      const sx = pin.side === 0 ? 1 : pin.side === 2 ? -1 : 0;
      const sz = pin.side === 1 ? 1 : pin.side === 3 ? -1 : 0;
      const reach = CHIP / 2 + 0.12;
      const pos = horizontal ? new THREE.Vector3(sx * reach, 0.05, pin.offset) : new THREE.Vector3(pin.offset, 0.05, sz * reach);
      pinMesh.setMatrixAt(i, m.compose(pos, q, s));
    });
    this.chip.add(pinMesh);
    this.disposables.push(pinGeo, pinMat);

    makeLogoTexture(opts.logoUrl)
      .then((tex) => {
        if (this.disposed) return tex.dispose();
        const g = new THREE.PlaneGeometry(CHIP * 0.86, CHIP * 0.86);
        g.rotateX(-Math.PI / 2);
        const mat = new THREE.MeshStandardMaterial({
          map: tex,
          transparent: true,
          metalness: 0.85,
          roughness: 0.3,
          emissive: COLORS.gold,
          emissiveMap: tex,
          emissiveIntensity: 0.18,
        });
        const logo = new THREE.Mesh(g, mat);
        logo.position.y = bodyH + 0.062;
        this.chip.add(logo);
        this.disposables.push(g, mat, tex);
        this.renderOnce();
      })
      .catch(() => {});

    this.board.add(this.chip);
    this.scene.add(this.board);

    const key = new THREE.DirectionalLight("#ffffff", 1.4);
    key.position.set(-6, 10, 6);
    const rim = new THREE.DirectionalLight("#7f9cff", 0.8);
    rim.position.set(8, 4, -6);
    this.scene.add(key, rim, new THREE.AmbientLight("#3a4a8a", 0.6));

    this.resize();
    this.renderOnce();
    opts.onReady?.();
  }

  /** Call with the container's size whenever it changes. */
  resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = "100%";
    this.renderer.domElement.style.height = "100%";
    const aspect = w / h;
    this.camera.aspect = aspect;
    // Keep the chip a sensible size: wide screens put it right of the text,
    // tall screens drop it below the headline.
    if (aspect > 1.15) {
      this.layout = { distance: 15.5, offsetX: Math.min(4.6, 2.2 * aspect), offsetZ: 0.4 };
    } else {
      this.layout = { distance: 21 / Math.max(aspect, 0.45) ** 0.3, offsetX: 0, offsetZ: 5.3 };
    }
    this.board.position.set(this.layout.offsetX, 0, this.layout.offsetZ);
    (this.traceMat.uniforms.uChip.value as THREE.Vector2).set(this.layout.offsetX, this.layout.offsetZ);
    this.camera.updateProjectionMatrix();
    this.placeCamera(0, 0);
    this.renderOnce();
  }

  private placeCamera(px: number, py: number) {
    const d = this.layout.distance;
    const tilt = 0.86; // radians from horizontal
    this.camera.position.set(px * 0.9, Math.sin(tilt) * d + py * 0.5, Math.cos(tilt) * d - py * 0.4);
    this.camera.lookAt(px * 0.25, 0, 0);
  }

  setPointer(clientX: number, clientY: number) {
    const r = this.container.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 2 - 1;
    const y = -(((clientY - r.top) / r.height) * 2 - 1);
    this.pointerTarget.set(x, y);
    this.raycaster.setFromCamera(new THREE.Vector2(x, y), this.camera);
    const hit = new THREE.Vector3();
    if (this.raycaster.ray.intersectPlane(this.plane, hit)) this.pointerWorldTarget.set(hit.x, hit.z);
  }

  clearPointer() {
    this.pointerTarget.set(0, 0);
    this.pointerWorldTarget.set(99, 99);
  }

  start() {
    if (this.running || this.opts.reducedMotion) {
      if (this.opts.reducedMotion) this.renderOnce();
      return;
    }
    this.running = true;
    this.clock.start();
    const tick = () => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(tick);
      this.frame();
    };
    this.raf = requestAnimationFrame(tick);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.clock.stop();
  }

  private elapsed = 0;

  private frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this.elapsed += dt;
    const u = this.traceMat.uniforms;
    u.uTime.value = this.elapsed;

    if (this.revealStart < 0) this.revealStart = this.elapsed;
    const t = (this.elapsed - this.revealStart) / 2.2;
    const eased = t >= 1 ? 1 : 1 - Math.pow(1 - t, 3);
    u.uReveal.value = t >= 1 ? 60 : eased * 30;

    this.pointerNdc.lerp(this.pointerTarget, 1 - Math.pow(0.001, dt));
    if (this.pointerWorldTarget.x > 90) this.pointerWorld.set(99, 99);
    else if (this.pointerWorld.x > 90) this.pointerWorld.copy(this.pointerWorldTarget);
    else this.pointerWorld.lerp(this.pointerWorldTarget, 1 - Math.pow(0.0005, dt));

    this.placeCamera(this.pointerNdc.x, this.pointerNdc.y);

    // Chip settles onto the board during the reveal, then breathes gently.
    const drop = t >= 1 ? 0 : (1 - eased) * 1.2;
    this.chip.position.y = drop + Math.sin(this.elapsed * 1.2) * 0.03;
    this.chip.rotation.y = this.pointerNdc.x * 0.08;
    this.chip.rotation.x = -this.pointerNdc.y * 0.05;

    this.renderer.render(this.scene, this.camera);
  }

  renderOnce() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.disposed = true;
    this.stop();
    this.disposables.forEach((d) => d.dispose());
    this.scene.environment?.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
