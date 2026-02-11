export interface ProjectInfo {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    images: string[];
    github?: string;
    link?: string;
}

export const projects: ProjectInfo[] = [
    {
        id: 1,
        name: "Parallel Sudoku Solver",
        description: "A Java-based application that leverages parallel processing to solve Sudoku puzzles more efficiently using the ForkJoinPool framework and concurrent programming principles ",
        technologies: ["Java", "ForkJoinPool", "Concurrent Programming"],
        images: ["/Parallel/ParallelSudoku.png"],
        github: "https://github.com/abzium/parallel-sudoku"
    },

    {
        id: 2,
        name: "Budget Buddy",
        description: "Budget Buddy is a mobile personal finance application designed to give users granular control over their spending through a hierarchical budgeting system. Users can create custom budget sections (such as Housing, Food, or Entertainment) and break them down into specific budget items (like Rent, Groceries, or Streaming Services). Each item tracks individual transactions, allowing for detailed monitoring of spending patterns. This multi-level organization enables users to see both the big picture of their financial health and the specific details of where every dollar goes, making it easier to identify problem areas, adjust spending habits, and achieve financial goals.",
        technologies: ["React Native", "Typescript", "Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
        images: ["/BudgetBuddy/BudgetBuddy.png"],
        github: "https://github.com/jdufresne12/BudgetBuddy",
    },
    {
        id: 3,
        name: "Army Reserve Mercury",
        description: "Army Reserve Mercury is a cross-platform web and mobile application designed to modernize administrative workflows within the United States Army Reserve. The platform centralizes soldier administrative tasks, duty tracking, pay-related documentation, and event visibility into a single, secure dashboard, improving situational awareness for both soldiers and frontline leadership. By streamlining traditionally manual and fragmented processes, Project Mercury reduces administrative overhead, minimizes errors, and enables leaders to more effectively supervise and support their units.",
        technologies: ["React", "React Native", "Javascript", "Python", "Jenkins", "AWS", "Jest", "PostgreSQL"],
        images: ["/Mercury/MercuryLogin.png", "/Mercury/MercuryHome.png"],
    },
    {
        id: 4,
        name: "Axis Sponsor Hub",
        description: "A full-stack content management system that empowers Axis administrators to manage sponsor and advertiser content displayed within the Axis mobile app. The platform streamlines the creation and editing of four distinct content types—each with custom fields and media requirements—replacing manual processes with an intuitive web interface. Built with secure Google OAuth authentication, the system handles media uploads to AWS S3, enforces validation rules, and syncs changes in real-time with the mobile backend. Designed with a responsive UI to support both desktop workflows and on-the-go updates, ensuring content teams can efficiently maintain accurate, up-to-date sponsor information across the mobile experience.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase Auth", "AWS S3", "PostgreSQL", "Swift Vapor", "Google OAuth"],
        images: ["/Axis/SponsorPortalLogin.png", "/Axis/SponsorPortalEdit.png", "/Axis/SponsorPortalHome.png"],
    },
    {
        id: 5,
        name: "Dirt's Garage",
        description: "A comprehensive automotive shop management system designed for Dirt's Garage, featuring customer and vehicle management, job tracking with detailed work orders, and automated invoice generation with PDF export capabilities. The application includes user authentication, real-time job status updates, parts inventory tracking, labor hour calculations, and secure file storage. Built with a responsive design supporting both desktop and mobile interfaces, the system streamlines garage operations from initial customer intake through job completion and billing.",
        technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS RDS", "AWS S3", "bcrypt", "jsPDF"],
        images: ["/DirtsGarage/DirtsGarageLogin.png", "/DirtsGarage/DirtsGarageHome.png", "/DirtsGarage/DirtsGarageJob1.png", "/DirtsGarage/DirtsGarageJob2.png", "/DirtsGarage/DirtsGarageInvoice.png", "/DirtsGarage/DirtsGarageCustomer1.png", "/DirtsGarage/DirtsGarageCustomer2.png"],
        github: "https://github.com/jdufresne12/dirts-garage",
        link: "https://dirts-garage.vercel.app/"
    },
    {
        id: 6,
        name: "Letheia",
        description: "Letheia is a next-generation emotional wellness platform that helps Gen Z users track moods, journal, and receive AI-powered mood reflections, breathwork guidance, and affirmations — all in a private, pressure-free space. Inspired by the Greek spirit of truth and disclosure, Letheia is built for a generation seeking emotional understanding and real self-support, not social validation",
        technologies: ["Swift", "Swift Vapor", "SwiftUI", "SpriteKit", "PostgreSQL"],
        images: ["/Letheia/LetheiaCover.png"],
        link: "https://letheia.app/"
    },
];