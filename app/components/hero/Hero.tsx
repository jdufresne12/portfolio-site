import HeroCanvas from "./HeroCanvas";
import { site } from "@/content/site";

export default function Hero() {
  const [first, ...rest] = site.name.split(" ");
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[640px] h-[100svh] overflow-hidden"
      style={{
        background: "radial-gradient(120% 90% at 70% 45%, #13245a 0%, #0e1a3d 55%, #0a1430 100%)",
      }}
    >
      <HeroCanvas />

      {/* Legibility wash behind the text: left on wide screens, top on narrow ones. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,61,0.96)_0%,rgba(14,26,61,0.85)_45%,rgba(14,26,61,0)_68%)] md:bg-[linear-gradient(90deg,rgba(14,26,61,0.97)_0%,rgba(14,26,61,0.88)_34%,rgba(14,26,61,0.4)_50%,rgba(14,26,61,0)_62%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-board via-board/70 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-board" />

      <div className="shell relative flex flex-col pt-28 md:justify-center md:pt-16">
        <div className="max-w-[40rem]">
          <h1 className="display hero-in text-[clamp(3.25rem,10vw,8rem)]">
            {first}
            <br />
            {rest.join(" ")}
          </h1>
          <p className="hero-in mt-6 max-w-[34rem] text-lg text-silk/90 md:text-xl" style={{ animationDelay: "120ms" }}>
            <span className="font-semibold text-gold">{site.title}.</span> {site.tagline}
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
            <a href="#projects" className="btn btn-gold">
              See my projects
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-line bg-board/40">
              Download resume
            </a>
          </div>
          {site.now && (
            <p className="hero-in mt-8 flex items-center gap-3 text-[0.95rem] text-dim" style={{ animationDelay: "320ms" }}>
              <span aria-hidden="true" className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
              </span>
              <span>
                Now: <span className="text-silk">{site.now.label}</span>, {site.now.detail}
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
