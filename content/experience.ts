import type { Experience } from "./types";

/**
 * Add a new role by copying one of these objects. Order doesn't matter —
 * the site sorts by start date, newest first. Leave `end` out for a current role.
 */
export const experience: Experience[] = [
  {
    id: "letheia",
    role: "Software Engineer",
    company: "Letheia",
    type: "Part-time",
    start: "2025-12",
    summary: "Building the customizable companion character at the heart of Letheia's iOS wellness app.",
    highlights: [
      "Architected a data-driven, component-based character system in SpriteKit and JSON that supports multiple characters, stages and visual variations.",
      "Designed a modular Companion Rig that assembles bodies, eyes, pupils and overlays from attachment points instead of hard-coded positions.",
      "Refactored an early MVP into separate models, stores, nodes and scene logic, making it far easier to extend and debug.",
      "Implemented runtime config resolution, stage-based visual progression and a rendering pipeline with layering, z-ordering, runtime asset loading and animation hooks.",
    ],
    stack: ["Swift", "SpriteKit", "SwiftUI", "Swift Vapor", "PostgreSQL"],
    link: "https://letheia.app/",
  },
  {
    id: "axis",
    role: "Full Stack Developer",
    company: "Axis LLC",
    type: "Contract",
    start: "2025-05",
    end: "2025-08",
    summary: "Built the admin web portal Axis uses to manage sponsor and advertiser content in its mobile app.",
    highlights: [
      "Architected a Next.js app for managing sponsor content across the Axis mobile platform.",
      "Implemented React Context state management for sponsor creation, media processing, caching and real-time database sync.",
      "Designed secure authentication with Firebase Google OAuth, HTTP-only cookies and Next.js middleware.",
      "Built a media pipeline with client-side validation, AWS S3 uploads and automatic database sync.",
      "Developed a proxy API layer in front of the Swift Vapor backend services.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase Auth", "AWS S3", "PostgreSQL", "Swift Vapor"],
  },
  {
    id: "army-reserve-mercury",
    role: "Full Stack Developer, Team Lead for DevOps & QA",
    company: "Army Reserve Mercury",
    type: "UCF Senior Design Capstone",
    start: "2024-02",
    end: "2025-01",
    summary: "Led a five-person team building a cross-platform web and mobile app for the U.S. Army Reserve.",
    highlights: [
      "Led DevOps automation, bug fixing and system reliability for a 5-person team.",
      "Ran Agile Scrum: sprint planning, daily standups and milestone delivery.",
      "Acted as technical liaison with stakeholders, turning requirements into specs and delivery roadmaps.",
      "Built automated testing and CI/CD pipelines with Jest and Appium, reducing post-release defects by 40%.",
      "Wrote release documentation, versioning strategy and deployment processes.",
    ],
    stack: ["React", "React Native", "JavaScript", "Python", "Jenkins", "Jest", "Appium", "AWS", "PostgreSQL"],
  },
];
