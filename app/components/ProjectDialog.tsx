"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Project } from "@/content/types";

const PREFIX = "#project/";

/**
 * Opens when the URL hash is #project/<slug>, so any link on the page
 * (or a shared URL) can open a project. Uses native <dialog> for focus
 * trapping and Escape-to-close.
 */
export default function ProjectDialog({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  const sync = useCallback(() => {
    const hash = window.location.hash;
    const slug = hash.startsWith(PREFIX) ? decodeURIComponent(hash.slice(PREFIX.length)) : null;
    const next = slug ? projects.find((p) => p.slug === slug) ?? null : null;
    setProject(next);
    setIndex(0);
  }, [projects]);

  useEffect(() => {
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [sync]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  const close = () => {
    ref.current?.close();
  };

  const onClose = () => {
    if (window.location.hash.startsWith(PREFIX)) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setProject(null);
  };

  const count = project?.images.length ?? 0;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
      onKeyDown={(e) => {
        if (count > 1 && e.key === "ArrowRight") go(1);
        if (count > 1 && e.key === "ArrowLeft") go(-1);
      }}
    >
      {project && (
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-7">
            <div>
              <p className="text-sm text-dim">{project.kind}</p>
              <h2 id="project-dialog-title" className="display mt-1 text-2xl md:text-3xl">
                {project.name}
              </h2>
            </div>
            <button type="button" onClick={close} className="btn btn-line !min-h-10 shrink-0" autoFocus>
              Close
            </button>
          </div>

          <div className="overflow-y-auto">
            <div className="relative bg-board">
              <div className="relative aspect-[3/2] max-h-[60dvh] w-full">
                <Image
                  key={project.images[index]}
                  src={project.images[index]}
                  alt={`${project.name} screenshot ${index + 1} of ${count}`}
                  fill
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-board/85 text-silk backdrop-blur hover:text-gold"
                    aria-label="Previous screenshot"
                  >
                    <FaChevronLeft aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-board/85 text-silk backdrop-blur hover:text-gold"
                    aria-label="Next screenshot"
                  >
                    <FaChevronRight aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {count > 1 && (
              <div className="scrollbar-none flex gap-2 overflow-x-auto border-b border-line px-5 py-3 md:px-7" role="group" aria-label="Screenshots">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === index}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden rounded border-2 transition-colors ${
                      i === index ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="80px" className="object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

            <div className="grid gap-8 px-5 py-6 md:grid-cols-[1fr_16rem] md:px-7 md:py-8">
              <div className="space-y-4 text-silk/90">
                {project.description.split(/\n\s*\n/).map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-dim">Built with</h3>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                {(project.link || project.github) && (
                  <div className="flex flex-col gap-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-gold justify-center">
                        Visit live site
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-line justify-center">
                        <FaGithub aria-hidden="true" /> View code on GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
