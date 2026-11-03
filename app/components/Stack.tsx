"use client";

import { useMemo, useRef, useState } from "react";
import { skillGroups, skills } from "@/content/skills";
import { getSkillUsage } from "@/content/lib";
import SectionHeading from "./SectionHeading";

/**
 * Every tool is cross-referenced with the projects and roles that used it,
 * so clicking one shows the evidence rather than a self-rating.
 */
export default function Stack() {
  const usage = useMemo(() => getSkillUsage(), []);
  const ranked = useMemo(
    () =>
      [...skills].sort(
        (a, b) =>
          usage[b.name].projects.length + usage[b.name].roles.length - (usage[a.name].projects.length + usage[a.name].roles.length),
      ),
    [usage],
  );
  const [selected, setSelected] = useState<string>(ranked[0]?.name ?? "");
  const panelRef = useRef<HTMLDivElement>(null);

  const current = usage[selected];
  const skill = skills.find((s) => s.name === selected);
  const Icon = skill?.icon;

  const choose = (name: string) => {
    setSelected(name);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }
  };

  return (
    <section id="stack" aria-labelledby="stack-title" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          id="stack"
          title="Stack"
          intro="The languages, frameworks and tools I work with. Select one to see where I've used it."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group}>
                <h3 className="text-[0.95rem] text-dim">{group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.group === group)
                    .map((s) => {
                      const u = usage[s.name];
                      const n = u.projects.length + u.roles.length;
                      const SIcon = s.icon;
                      if (n === 0) {
                        return (
                          <li key={s.name} className="flex items-center gap-2 rounded-md border border-line px-3 py-2 text-[0.95rem] text-silk/75">
                            <SIcon aria-hidden="true" className="size-4 opacity-70" />
                            {s.name}
                          </li>
                        );
                      }
                      const active = s.name === selected;
                      return (
                        <li key={s.name}>
                          <button
                            type="button"
                            aria-pressed={active}
                            onClick={() => choose(s.name)}
                            className={`flex items-center gap-2 rounded-md border px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                              active
                                ? "border-gold bg-gold text-board"
                                : "border-silk/25 bg-raised/60 text-silk hover:border-gold hover:text-gold"
                            }`}
                          >
                            <SIcon aria-hidden="true" className="size-4" />
                            {s.name}
                            <span
                              className={`ml-0.5 rounded-sm px-1.5 text-xs leading-5 ${active ? "bg-board/15" : "bg-silk/10 text-dim"}`}
                              aria-label={`used in ${n}`}
                            >
                              {n}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>

          <div ref={panelRef} className="lg:sticky lg:top-24 lg:self-start" aria-live="polite">
            {current && (
              <div className="rounded-lg border border-line bg-raised p-6">
                <div className="flex items-center gap-3">
                  {Icon && <Icon aria-hidden="true" className="size-7 text-gold" />}
                  <h3 className="display text-2xl">{current.name}</h3>
                </div>

                {current.projects.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm text-dim">Projects</h4>
                    <ul className="mt-2 space-y-1.5">
                      {current.projects.map((p) => (
                        <li key={p.slug}>
                          <a href={`#project/${p.slug}`} className="link">
                            {p.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {current.roles.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm text-dim">Roles</h4>
                    <ul className="mt-2 space-y-1.5">
                      {current.roles.map((r) => (
                        <li key={r.id}>
                          <a href="#experience" className="link">
                            {r.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
