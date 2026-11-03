import type { Skill, SkillGroup } from "./types";
import {
  SiTypescript, SiJavascript, SiPython, SiSwift, SiC, SiCplusplus, SiHtml5, SiCss3, SiHaskell,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiFastapi, SiTailwindcss, SiJest, SiAppium,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiDocker, SiJenkins, SiGithub, SiPostman, SiFigma, SiJira,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

/** Display order of the groups in the Stack section. */
export const skillGroups: SkillGroup[] = ["Languages", "Frameworks & libraries", "Data", "Cloud, DevOps & tools"];

/**
 * Add a tool by adding a line. Icons come from react-icons (https://react-icons.github.io/react-icons/).
 * A tool automatically shows which projects and roles used it, matched by name or alias.
 */
export const skills: Skill[] = [
  { name: "TypeScript", group: "Languages", icon: SiTypescript },
  { name: "JavaScript", group: "Languages", icon: SiJavascript },
  { name: "Python", group: "Languages", icon: SiPython },
  { name: "Swift", group: "Languages", icon: SiSwift },
  { name: "Java", group: "Languages", icon: FaJava },
  { name: "SQL", group: "Languages", icon: TbSql },
  { name: "C", group: "Languages", icon: SiC },
  { name: "C++", group: "Languages", icon: SiCplusplus },
  { name: "HTML", group: "Languages", icon: SiHtml5 },
  { name: "CSS", group: "Languages", icon: SiCss3 },
  { name: "Haskell", group: "Languages", icon: SiHaskell },

  { name: "React", group: "Frameworks & libraries", icon: SiReact },
  { name: "Next.js", group: "Frameworks & libraries", icon: SiNextdotjs },
  { name: "React Native", group: "Frameworks & libraries", icon: SiReact },
  { name: "Node.js", group: "Frameworks & libraries", icon: SiNodedotjs },
  { name: "Express", group: "Frameworks & libraries", icon: SiExpress, aliases: ["Express.js"] },
  { name: "FastAPI", group: "Frameworks & libraries", icon: SiFastapi },
  { name: "Tailwind CSS", group: "Frameworks & libraries", icon: SiTailwindcss },
  { name: "SwiftUI", group: "Frameworks & libraries", icon: SiSwift },
  { name: "SpriteKit", group: "Frameworks & libraries", icon: SiSwift },
  { name: "Jest", group: "Frameworks & libraries", icon: SiJest },
  { name: "Appium", group: "Frameworks & libraries", icon: SiAppium },

  { name: "PostgreSQL", group: "Data", icon: SiPostgresql, aliases: ["Postgres"] },
  { name: "MySQL", group: "Data", icon: SiMysql },
  { name: "MongoDB", group: "Data", icon: SiMongodb },
  { name: "Firebase", group: "Data", icon: SiFirebase },

  { name: "AWS", group: "Cloud, DevOps & tools", icon: FaAws },
  { name: "Docker", group: "Cloud, DevOps & tools", icon: SiDocker },
  { name: "Jenkins", group: "Cloud, DevOps & tools", icon: SiJenkins },
  { name: "GitHub", group: "Cloud, DevOps & tools", icon: SiGithub },
  { name: "Postman", group: "Cloud, DevOps & tools", icon: SiPostman },
  { name: "Figma", group: "Cloud, DevOps & tools", icon: SiFigma },
  { name: "Jira & Scrum", group: "Cloud, DevOps & tools", icon: SiJira },
  { name: "VS Code", group: "Cloud, DevOps & tools", icon: VscVscode },
];
