import type { Project } from "./types";

/**
 * Add a project by copying one of these objects and dropping its screenshots
 * into /public/<FolderName>/. Order doesn't matter — the site sorts by date,
 * newest first. Set `featured: true` to give it a large panel.
 */
export const projects: Project[] = [
  {
    slug: "dirts-garage",
    name: "Dirt's Garage",
    kind: "Web app",
    date: "2025-08",
    featured: true,
    summary:
      "A shop management system for a real automotive garage, covering customer intake, work orders, parts, labor and PDF invoices.",
    description:
      "A comprehensive shop management system built for Dirt's Garage. It covers customer and vehicle management, job tracking with detailed work orders, and automated invoice generation with PDF export.\n\nThe app includes user authentication, real-time job status updates, parts inventory tracking, labor hour calculations and secure file storage. It's responsive on desktop and mobile, so technicians can use it from the shop floor, and it takes a job from initial customer intake through completion and billing.",
    highlights: [
      "Relational schema deployed on AWS RDS with S3 for photo and video media",
      "Automated PDF invoices with labor and parts calculations",
      "Deployed with a live demo on Vercel",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "AWS RDS", "AWS S3", "bcrypt", "jsPDF"],
    images: [
      "/DirtsGarage/DirtsGarageHome.png",
      "/DirtsGarage/DirtsGarageJob1.png",
      "/DirtsGarage/DirtsGarageJob2.png",
      "/DirtsGarage/DirtsGarageInvoice.png",
      "/DirtsGarage/DirtsGarageCustomer1.png",
      "/DirtsGarage/DirtsGarageCustomer2.png",
      "/DirtsGarage/DirtsGarageLogin.png",
    ],
    github: "https://github.com/jdufresne12/dirts-garage",
    link: "https://dirts-garage.vercel.app/",
  },
  {
    slug: "axis-sponsor-hub",
    name: "Axis Sponsor Hub",
    kind: "Web app",
    date: "2025-08",
    featured: true,
    summary:
      "A content management portal that lets Axis admins create and edit the sponsor content shown in their mobile app.",
    description:
      "A full-stack content management system that lets Axis administrators manage the sponsor and advertiser content displayed in the Axis mobile app. It handles four distinct content types, each with its own fields and media requirements, and replaces a manual process with a web interface.\n\nIt's built with Google OAuth authentication, handles media uploads to AWS S3, enforces validation rules and syncs changes in real time with the mobile backend. The responsive UI works for both desktop workflows and quick updates on the go.",
    highlights: [
      "Firebase Google OAuth with HTTP-only cookies and Next.js middleware",
      "Media pipeline with client-side validation and S3 uploads",
      "Proxy API in front of a Swift Vapor backend",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase Auth", "AWS S3", "PostgreSQL", "Swift Vapor", "Google OAuth"],
    images: ["/Axis/SponsorPortalHome.png", "/Axis/SponsorPortalEdit.png", "/Axis/SponsorPortalLogin.png"],
  },
  {
    slug: "army-reserve-mercury",
    name: "Army Reserve Mercury",
    kind: "Web & mobile app",
    date: "2025-01",
    featured: true,
    summary:
      "A cross-platform app that centralizes admin tasks, duty tracking and pay documentation for U.S. Army Reserve soldiers and their leaders.",
    description:
      "Army Reserve Mercury is a cross-platform web and mobile application designed to modernize administrative workflows in the United States Army Reserve. It brings soldier admin tasks, duty tracking, pay-related documentation and event visibility into a single secure dashboard for both soldiers and frontline leadership.\n\nBy streamlining traditionally manual, fragmented processes, it reduces administrative overhead, minimizes errors and helps leaders supervise and support their units. I led DevOps and QA on the five-person team.",
    highlights: [
      "Led DevOps and QA for a 5-person team",
      "Jest and Appium suites in Jenkins CI cut post-release defects by 40%",
    ],
    technologies: ["React", "React Native", "JavaScript", "Python", "Jenkins", "AWS", "Jest", "Appium", "PostgreSQL"],
    images: ["/Mercury/MercuryHome.png", "/Mercury/MercuryLogin.png"],
  },
  {
    slug: "letheia",
    name: "Letheia",
    kind: "iOS app",
    date: "2025-12",
    summary:
      "An emotional wellness app for Gen Z covering mood tracking, journaling, and AI mood reflections in a private, pressure-free space.",
    description:
      "Letheia is an emotional wellness platform that helps Gen Z users track moods, journal, and receive AI-powered mood reflections, breathwork guidance and affirmations in a private, pressure-free space.\n\nInspired by the Greek spirit of truth and disclosure, it's built for a generation looking for emotional understanding and real self-support, not social validation. I work on the in-app companion character system and the safety layer in front of the AI chat.",
    technologies: ["Swift", "SwiftUI", "SpriteKit", "Swift Vapor", "PostgreSQL"],
    images: ["/Letheia/LetheiaCover.png"],
    imageFit: "contain",
    link: "https://letheia.app/",
  },
  {
    slug: "budget-buddy",
    name: "Budget Buddy",
    kind: "Mobile app",
    date: "2025-03",
    summary:
      "A personal finance app with nested budgets (sections, items and transactions) so you can see both the big picture and every dollar.",
    description:
      "Budget Buddy is a mobile personal finance app that gives users granular control over their spending through a hierarchical budgeting system. Users create budget sections (like Housing, Food or Entertainment) and break them into specific items (like Rent, Groceries or Streaming). Each item tracks individual transactions.\n\nThat multi-level structure shows both the big picture of your finances and exactly where every dollar goes, making it easier to spot problem areas and adjust. The backend is FastAPI and PostgreSQL with JWT authentication and hashed storage for sensitive data, all running in Docker.",
    technologies: ["React Native", "TypeScript", "Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
    images: ["/BudgetBuddy/BudgetBuddy.png"],
    github: "https://github.com/jdufresne12/BudgetBuddy",
  },
  {
    slug: "parallel-sudoku",
    name: "Parallel Sudoku Solver",
    kind: "Java program",
    date: "2024-04",
    summary:
      "Parallel and sequential Sudoku solvers in Java's ForkJoinPool, with adaptive threading that balances work across puzzle difficulty.",
    description:
      "A Java application that uses parallel processing to solve Sudoku puzzles more efficiently, built on the ForkJoinPool framework and concurrent programming principles.\n\nIt implements both parallel and sequential solvers. Multithreaded backtracking gave a 7% speedup on complex puzzles, and an adaptive threading strategy with dynamic depth control balances computational resources across puzzle difficulty.",
    technologies: ["Java", "ForkJoinPool", "Concurrent Programming"],
    images: ["/Parallel/ParallelSudoku.png"],
    github: "https://github.com/abzium/parallel-sudoku",
  },
];
