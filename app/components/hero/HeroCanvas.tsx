"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mounts the three.js circuit board. three is loaded on the client only,
 * rendering pauses while the hero is off-screen, and reduced-motion users
 * get a single still frame.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("./circuitScene")
      .then(({ CircuitScene }) => {
        if (disposed) return;
        let scene: InstanceType<typeof CircuitScene>;
        try {
          scene = new CircuitScene(el, { reducedMotion, logoUrl: "/JD.svg", onReady: () => setReady(true) });
        } catch {
          return; // No WebGL: the CSS board background still shows.
        }

        const ro = new ResizeObserver(() => scene.resize());
        ro.observe(el);

        let visible = true;
        const io = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !document.hidden) scene.start();
          else scene.stop();
        });
        io.observe(el);

        const onVisibility = () => (document.hidden || !visible ? scene.stop() : scene.start());
        document.addEventListener("visibilitychange", onVisibility);

        const hero = el.closest("section") ?? el;
        const onMove = (e: PointerEvent) => scene.setPointer(e.clientX, e.clientY);
        const onLeave = () => scene.clearPointer();
        hero.addEventListener("pointermove", onMove as EventListener);
        hero.addEventListener("pointerleave", onLeave);

        scene.start();

        cleanup = () => {
          ro.disconnect();
          io.disconnect();
          document.removeEventListener("visibilitychange", onVisibility);
          hero.removeEventListener("pointermove", onMove as EventListener);
          hero.removeEventListener("pointerleave", onLeave);
          scene.dispose();
        };
      })
      .catch(() => {});

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
    />
  );
}
