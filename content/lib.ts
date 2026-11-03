import { experience } from "./experience";
import { projects } from "./projects";
import { skills } from "./skills";
import type { Experience, Project, Skill, YearMonth } from "./types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatYearMonth(value: YearMonth): string {
  const [y, m] = value.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

export function formatRange(start: YearMonth, end?: YearMonth): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "Present"}`;
}

const byNewest = (a: string, b: string) => (a < b ? 1 : a > b ? -1 : 0);

export function getExperience(): Experience[] {
  // Current roles first, then by most recent end/start date.
  return [...experience].sort((a, b) => byNewest(a.end ?? "9999-12", b.end ?? "9999-12") || byNewest(a.start, b.start));
}

export function getProjects(): Project[] {
  return [...projects].sort((a, b) => byNewest(a.date, b.date));
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9+#]/g, "");

/** True when a technology string (e.g. "AWS S3") refers to a skill (e.g. "AWS"). */
export function matchesSkill(tech: string, skill: Pick<Skill, "name" | "aliases">): boolean {
  const names = [skill.name, ...(skill.aliases ?? [])];
  if (names.some((n) => norm(n) === norm(tech))) return true;
  // If another skill is an exact match ("React Native"), don't also credit the prefix ("React").
  if (skills.some((s) => s.name !== skill.name && [s.name, ...(s.aliases ?? [])].some((n) => norm(n) === norm(tech)))) return false;
  // "AWS S3" -> "AWS", "Firebase Auth" -> "Firebase", "Swift Vapor" -> "Swift"
  return names.some((n) => tech.toLowerCase().startsWith(n.toLowerCase() + " "));
}

export interface SkillUsage {
  name: string;
  projects: { slug: string; name: string }[];
  roles: { id: string; label: string }[];
}

/** Plain, serializable map of where each skill was used — computed at build time. */
export function getSkillUsage(): Record<string, SkillUsage> {
  const out: Record<string, SkillUsage> = {};
  for (const skill of skills) {
    out[skill.name] = {
      name: skill.name,
      projects: getProjects()
        .filter((p) => p.technologies.some((t) => matchesSkill(t, skill)))
        .map((p) => ({ slug: p.slug, name: p.name })),
      roles: getExperience()
        .filter((e) => e.stack.some((t) => matchesSkill(t, skill)))
        .map((e) => ({ id: e.id, label: `${e.role.split(",")[0]} at ${e.company}` })),
    };
  }
  return out;
}
