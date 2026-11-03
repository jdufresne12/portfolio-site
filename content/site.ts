import type { Capability } from "./types";

export const site = {
  name: "John Dufresne",
  title: "Full stack developer",
  tagline:
    "I build web and mobile apps end to end, from the database schema to the last pixel.",
  /** Shown under the hero buttons. Set to null to hide. */
  now: { label: "Software engineer at Letheia", detail: "building its character animation platform and AI safety systems" } as
    | { label: string; detail: string }
    | null,
  location: "Hopewell Junction, New York",
  email: "jdufresne135@gmail.com",
  /** Set to null to hide your phone number from the site. */
  phone: "1 (845) 797-5694" as string | null,
  resume: "/JohnDufresneResume.pdf",
  photo: "/ProfileImage.jpg",
  links: {
    github: "https://github.com/jdufresne12",
    linkedin: "https://www.linkedin.com/in/john-dufresne-abb631264/",
  },
  education: {
    school: "University of Central Florida",
    degree: "B.S. Computer Science",
    graduated: "December 2024",
  },
  about: [
    "I'm a frontend-focused full stack developer with a Computer Science degree from the University of Central Florida. Most of my work lives in React, Next.js and React Native, but I'm just as comfortable designing the Postgres schema, writing the API and wiring up the deploy pipeline behind it.",
    "I like turning messy, manual workflows into tools people actually want to open, like the shop management system I built for an automotive garage, or the admin portal that replaced hand-edited sponsor content for Axis.",
    "Outside of work, I'm usually tinkering around with cars, playing golf, or finding any excuse to be outdoors.",
  ],
} as const;

/** "What I do" — each item links to the projects that prove it. */
export const capabilities: Capability[] = [
  {
    title: "Frontend & mobile",
    body: "Responsive React and Next.js apps and cross-platform React Native clients, built from reusable components with state that stays predictable.",
    tools: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    proof: ["dirts-garage", "axis-sponsor-hub", "budget-buddy"],
  },
  {
    title: "Backend & data",
    body: "REST APIs in Node and FastAPI, relational schemas in PostgreSQL, and auth that's done properly: JWT, OAuth, HTTP-only cookies.",
    tools: ["Node.js", "FastAPI", "PostgreSQL", "AWS"],
    proof: ["dirts-garage", "budget-buddy", "axis-sponsor-hub"],
  },
  {
    title: "DevOps & testing",
    body: "CI/CD with Jenkins and Docker and automated test suites with Jest and Appium. On the Army Reserve capstone, those cut post-release defects by 40%.",
    tools: ["Jenkins", "Docker", "Jest", "Appium", "AWS"],
    proof: ["army-reserve-mercury"],
  },
  {
    title: "Whatever the project needs",
    body: "New language, unfamiliar codebase, a problem I've never seen before: I ramp up fast. At Letheia I started in Swift and went on to build a browser-based editor and backend APIs, and to co-invent a patent-pending AI safety engine.",
    tools: ["Swift", "Swift Vapor", "JavaScript"],
    proof: ["letheia"],
  },
];