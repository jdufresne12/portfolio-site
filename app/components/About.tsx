import Image from "next/image";
import { capabilities, site } from "@/content/site";
import { getProject } from "@/content/lib";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading id="about" title="About" />

        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line">
              <Image
                src={site.photo}
                alt={`${site.name} at his UCF graduation`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            {/* Gold corner pads echo the JD chip */}
            <span aria-hidden="true" className="absolute -left-1.5 -top-1.5 size-3 rounded-[2px] bg-gold" />
            <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 size-3 rounded-[2px] bg-gold" />
          </figure>

          <div>
            <div className="prose-measure space-y-5 text-lg leading-relaxed text-silk/90">
              {site.about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-dim">Based in</dt>
                <dd className="mt-1 font-medium">{site.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-dim">Education</dt>
                <dd className="mt-1 font-medium">
                  {site.education.degree}, {site.education.school.replace("University of Central Florida", "UCF")}
                </dd>
              </div>
              {site.now && (
                <div>
                  <dt className="text-sm text-dim">Currently</dt>
                  <dd className="mt-1 font-medium">{site.now.label}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <h3 className="wide mt-24 text-2xl font-bold md:text-3xl">What I can build for you</h3>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <li key={c.title} className="flex flex-col bg-board p-6">
              <h4 className="text-lg font-bold">{c.title}</h4>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-dim">{c.body}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools">
                {c.tools.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-[0.95rem]">
                <span className="text-dim">See it in </span>
                {c.proof
                  .map((slug) => getProject(slug))
                  .filter(Boolean)
                  .map((p, i, arr) => (
                    <span key={p!.slug}>
                      <a href={`#project/${p!.slug}`} className="link">
                        {p!.name}
                      </a>
                      {i < arr.length - 1 ? (i === arr.length - 2 ? " and " : ", ") : ""}
                    </span>
                  ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
