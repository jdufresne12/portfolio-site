import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-36">
      <div className="shell">
        <h2 id="contact-title" className="section-title">
          Let&apos;s work together
        </h2>
        <p className="prose-measure mt-4 text-lg text-dim text-pretty">
          I&apos;m open to full-time roles and contract work. Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="display mt-5 md:mt-10 inline-block break-all text-[clamp(1.3rem,5.2vw,4.5rem)] md:text-[clamp(1.6rem,5.2vw,4rem)] text-gold underline decoration-gold/40 decoration-2 underline-offset-[0.19em] transition-colors hover:decoration-gold"
        >
          {site.email}
        </a>

        <div className="mt-5 md:mt-12 flex flex-col gap-8 border-t border-line pt-4 md:pt-8 sm:flex-row sm:items-center sm:justify-between">
          <dl className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <div>
              <dt className="text-sm text-dim">Based in</dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
            {site.phone && (
              <div>
                <dt className="text-sm text-dim">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="link">
                    {site.phone}
                  </a>
                </dd>
              </div>
            )}
          </dl>
          <div className="flex flex-wrap gap-3">
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
