import { formatRange, getExperience } from "@/content/lib";
import { site } from "@/content/site";
import SectionHeading from "./SectionHeading";

/**
 * A vertical copper trace with a pad per role. The current role's pad is solid gold.
 */
export default function Experience() {
  const roles = getExperience();
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading id="experience" title="Experience" />

        <ol className="relative">
          {/* the trace */}
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-trace md:left-[calc(14rem+7px)]" />

          {roles.map((r) => {
            const current = !r.end;
            return (
              <li key={r.id} className="relative grid gap-2 pb-16 pl-10 last:pb-6 md:grid-cols-[14rem_1fr] md:gap-0 md:pl-0">
                <div className="text-[0.95rem] text-dim md:pr-10 md:pt-1 md:text-right">
                  <p className={current ? "font-semibold text-gold" : ""}>{formatRange(r.start, r.end)}</p>
                  {r.type && <p className="mt-0.5">{r.type}</p>}
                </div>

                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 size-4 rounded-full border-2 md:left-56 ${
                    current ? "border-gold bg-gold shadow-[0_0_0_6px_rgb(255_189_47/0.15)]" : "border-gold-dim bg-board"
                  }`}
                />

                <div className="md:pl-12">
                  <h3 className="wide text-xl font-bold md:text-2xl">
                    {r.role}
                    <span className="font-normal text-dim"> at </span>
                    {r.link ? (
                      <a href={r.link} target="_blank" rel="noopener noreferrer" className="link">
                        {r.company}
                      </a>
                    ) : (
                      r.company
                    )}
                  </h3>
                  <p className="prose-measure mt-3 text-silk/90">{r.summary}</p>
                  <ul className="prose-measure mt-4 space-y-2 text-[0.975rem] text-dim">
                    {r.highlights.map((h) => (
                      <li key={h} className="relative pl-5">
                        <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-[2px] w-2.5 bg-gold-dim" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
                    {r.stack.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}

          <li className="relative grid gap-2 pl-10 md:grid-cols-[14rem_1fr] md:gap-0 md:pl-0">
            <div className="text-[0.95rem] text-dim md:pr-10 md:pt-1 md:text-right">Graduated {site.education.graduated}</div>
            <span aria-hidden="true" className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-gold-dim bg-board md:left-56" />
            <div className="md:pl-12">
              <h3 className="wide text-xl font-bold md:text-2xl">
                {site.education.degree}
                <span className="font-normal text-dim"> at </span>
                {site.education.school}
              </h3>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
