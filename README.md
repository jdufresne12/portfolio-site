# John Dufresne · Portfolio (v2)

Next.js 15 + React 19 + Tailwind CSS 4 + three.js.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All content lives in `content/`. You should never need to touch a component to add something.

| File | What's in it |
| --- | --- |
| `content/site.ts` | Name, tagline, "Now" line, contact info, about paragraphs, the "What I can build for you" capabilities |
| `content/experience.ts` | Jobs/roles (timeline) |
| `content/projects.ts` | Projects (featured panels + tiles + detail dialog) |
| `content/skills.ts` | Tools shown in the Stack section |

Lists are sorted automatically (newest first), so order in the file doesn't matter.

### Add a job

Copy an entry in `content/experience.ts`:

```ts
{
  id: "acme",                       // unique
  role: "Software Engineer",
  company: "Acme",
  type: "Full-time",                // optional
  start: "2026-11",                 // YYYY-MM
  // end: "2027-06",                // leave out while it's your current role → shows "Present" + gold pad
  summary: "One sentence a recruiter can skim.",
  highlights: ["What you did, with numbers if you have them."],
  stack: ["Next.js", "PostgreSQL"], // names that match skills.ts get linked in the Stack section
  link: "https://acme.com",         // optional
},
```

When a job changes, also update `site.now` in `content/site.ts` (or set it to `null`).

### Add a project

1. Put screenshots in `public/YourProject/` (3:2 images look best, ~1080×720).
2. Copy an entry in `content/projects.ts`. The first image is the cover.
3. Set `featured: true` for a big alternating panel; leave it off for a tile under "More projects".
4. Use `imageFit: "contain"` for images that shouldn't be cropped (e.g. phone mockups).

Every project gets a shareable deep link: `https://your-site/#project/<slug>`.

### Add a tool

Add one line to `content/skills.ts`. Icons come from [react-icons](https://react-icons.github.io/react-icons/), e.g. `SiRust` from `react-icons/si`.
The Stack section automatically counts and lists every project and role whose `technologies`/`stack` mention that tool. `"AWS S3"` counts toward `AWS`, and you can add `aliases` for other spellings.

### Resume

Replace `public/JohnDufresneResume.pdf` (keep the name, or update `resume` in `site.ts`).

## How the hero works

`app/components/hero/circuitScene.ts` procedurally routes a circuit board (45° traces, vias, SMD parts) around the JD chip and animates gold signals along the traces with a small shader. Moving the cursor lights up nearby copper.

- Loaded client-side only, in its own chunk, so it doesn't block first paint.
- Pauses when scrolled off-screen or when the tab is hidden.
- `prefers-reduced-motion` gets a single still frame.
- No WebGL support falls back to the plain board-colored background.

Tweak the look in the `COLORS` object at the top of that file. Change the seed in `buildTraces(1207, …)` to get a different board layout.

## Design tokens

Defined in `app/globals.css` (`@theme`): `board`, `raised`, `trace`, `gold`, `gold-dim`, `silk`, `dim`, `line`. Use them as Tailwind classes (`bg-board`, `text-gold`, …).
The font is Archivo (variable width + weight), self-hosted in `app/fonts/` under the SIL Open Font License.
