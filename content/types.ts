import type { IconType } from "react-icons";

/** Dates are written as "YYYY-MM" (e.g. "2025-08"). Lists are sorted newest-first automatically. */
export type YearMonth = `${number}-${string}`;

export interface Experience {
  /** Unique, URL-safe id. */
  id: string;
  role: string;
  company: string;
  /** e.g. "Part-time", "Contract", "Full-time", "Capstone" */
  type?: string;
  location?: string;
  start: YearMonth;
  /** Leave out for a role you're still in; it will show as "Present". */
  end?: YearMonth;
  /** One sentence that explains the job to someone skimming. */
  summary: string;
  highlights: string[];
  /** Tool names. Matching names in skills.ts get linked in the Stack section. */
  stack: string[];
  link?: string;
}

export interface Project {
  /** Unique, URL-safe id. Used for deep links like /#project/dirts-garage */
  slug: string;
  name: string;
  /** Short descriptor shown next to the name, e.g. "Web app", "iOS app". */
  kind: string;
  date: YearMonth;
  /** One or two sentences shown on the card. */
  summary: string;
  /** Full write-up shown when the project is opened. Separate paragraphs with a blank line. */
  description: string;
  highlights?: string[];
  technologies: string[];
  /** Paths inside /public. The first image is the cover. */
  images: string[];
  /** "contain" for images that shouldn't be cropped (e.g. phone mockups on a background). Default "cover". */
  imageFit?: "cover" | "contain";
  github?: string;
  link?: string;
  /** Featured projects get a large panel; everything else is a tile. */
  featured?: boolean;
}

export interface Skill {
  name: string;
  group: SkillGroup;
  icon: IconType;
  /** Other spellings used in project/experience stacks, e.g. ["Postgres"]. */
  aliases?: string[];
}

export type SkillGroup = "Languages" | "Frameworks & libraries" | "Data" | "Cloud, DevOps & tools";

export interface Capability {
  title: string;
  body: string;
  tools: string[];
  /** Project slugs that prove it. */
  proof: string[];
}
