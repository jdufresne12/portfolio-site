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
    summary:
      "Building the character animation platform and AI safety systems behind Letheia's wellness app, from the backend and tooling to the client.",
    highlights: [
      "Designing and building an evidence-gated de-escalation engine for a safety-focused AI platform, with a statistically governed path for severity to decrease based on reviewer agreement and calibration thresholds. Co-inventor on a pending patent.",
      "Built a Rive-style browser editor with a live canvas and keyframe timeline, so static artwork can be rigged and animated without code changes.",
      "Built a cross-platform keyframe animation engine with layering, blending and easing, verified against a JavaScript port with 132 shared test fixtures for Android parity.",
      "Extended the Swift Vapor and PostgreSQL backend with schema migrations, a publish/revert workflow, and admin APIs that validate rig hierarchies and animation clips.",
      "Architected a data-driven SpriteKit character system with a hierarchical rig (parent/child joints, pivot anchors), so characters can evolve across stages and wear accessories without hard-coded positions.",
    ],
    stack: ["Swift", "SpriteKit", "JavaScript", "Swift Vapor", "PostgreSQL"],
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