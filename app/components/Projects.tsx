import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { formatYearMonth, getProjects } from "@/content/lib";
import type { Project } from "@/content/types";
import SectionHeading from "./SectionHeading";

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={`#project/${project.slug}`} className="btn btn-gold">
        View details
      </a>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-line">
          Visit live site
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-line">
          <FaGithub aria-hidden="true" /> Code
        </a>
      )}
    </div>
  );
}

function Featured({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <a
        href={`#project/${project.slug}`}
        className={`group relative block overflow-hidden rounded-lg border border-line bg-raised ${flip ? "md:order-2" : ""}`}
        aria-label={`Open ${project.name} details`}
      >
        <div className="relative aspect-[3/2]">
          <Image
            src={project.images[0]}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`transition-transform duration-500 group-hover:scale-[1.03] ${
              project.imageFit === "contain" ? "object-contain p-6" : "object-cover object-top"
            }`}
          />
        </div>
        {project.images.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded bg-board/85 px-2 py-1 text-sm text-silk backdrop-blur">
            {project.images.length} screenshots
          </span>
        )}
      </a>
      <div>
        <p className="text-[0.95rem] text-dim">
          {project.kind}, {formatYearMonth(project.date)}
        </p>
        <h3 className="display mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)]">{project.name}</h3>
        <p className="mt-4 text-lg text-silk/90">{project.summary}</p>
        {project.highlights && (
          <ul className="mt-5 space-y-2 text-[0.975rem] text-dim">
            {project.highlights.map((h) => (
              <li key={h} className="relative pl-5">
                <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-[2px] w-2.5 bg-gold-dim" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

function Tile({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-raised/60 transition-colors hover:border-gold/60">
      <div className="relative aspect-[3/2] overflow-hidden bg-raised">
        <Image
          src={project.images[0]}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`transition-transform duration-500 group-hover:scale-[1.03] ${
            project.imageFit === "contain" ? "object-contain p-4" : "object-cover object-top"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-dim">
          {project.kind}, {formatYearMonth(project.date)}
        </p>
        <h3 className="wide mt-1 text-xl font-bold">
          {/* Stretched link makes the whole tile clickable */}
          <a href={`#project/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.name}
          </a>
        </h3>
        <p className="mt-2 text-[0.975rem] text-dim">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
          {project.technologies.length > 4 && <li className="tag">+{project.technologies.length - 4}</li>}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  const all = getProjects();
  const featured = all.filter((p) => p.featured);
  const rest = all.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          id="projects"
          title="Projects"
          intro="Things I've shipped for clients, for my capstone team and for myself. Open any project for screenshots and the full write-up."
        />

        <div className="space-y-24 md:space-y-32">
          {featured.map((p, i) => (
            <Featured key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <h3 className="wide mt-28 text-2xl font-bold md:text-3xl">More projects</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Tile key={p.slug} project={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
