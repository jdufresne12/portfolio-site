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
        name: "Dirt's Garage",
        description: "A comprehensive automotive shop management system designed for Dirt's Garage, featuring customer and vehicle management, job tracking with detailed work orders, and automated invoice generation with PDF export capabilities. The application includes user authentication, real-time job status updates, parts inventory tracking, labor hour calculations, and secure file storage. Built with a responsive design supporting both desktop and mobile interfaces, the system streamlines garage operations from initial customer intake through job completion and billing.",
        technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS RDS", "AWS S3", "bcrypt", "jsPDF"],
        images: ["/DirtsGarage/DirtsGarageLogin.png", "/DirtsGarage/DirtsGarageHome.png", "/DirtsGarage/DirtsGarageJob1.png", "/DirtsGarage/DirtsGarageJob2.png", "/DirtsGarage/DirtsGarageInvoice.png", "/DirtsGarage/DirtsGarageCustomer1.png", "/DirtsGarage/DirtsGarageCustomer2.png"],
        github: "https://github.com/jdufresne12/dirts-garage",
        link: "https://dirts-garage.vercel.app/"
    },
    {
        id: 2,
        name: "Axis Sponsor Hub",
        description: "A comprehensive web application for managing sponsor and advertiser content in the Axis mobile application. Built for internal use by Axis employees and administrators to create, edit, and manage four types of sponsor/advertiser information with associated media assets. Features include Google OAuth authentication, real-time media upload with S3 storage, form validation, responsive design, and automatic synchronization with the mobile application backend.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase Auth", "AWS S3", "PostgreSQL", "Swift Vapor", "Google OAuth"],
        images: ["/Axis/SponsorPortalLogin.png", "/Axis/SponsorPortalEdit.png", "/Axis/SponsorPortalHome.png"],
    },
    {
        id: 3,
        name: "Army Reserve Mercury",
        description: "A Web and Mobile application dedicated to making the daily lives of Army Reservists easier, by handling tedious administrative tasks digitally and providing a dashboard for these administrative tasks and upcoming events.",
        technologies: ["React", "React Native", "Javascript", "Python", "Jenkins", "AWS", "Jest", "PostgreSQL"],
        images: ["/Mercury/MercuryLogin.png", "/Mercury/MercuryHome.png"],
    },
    {
        id: 4,
        name: "Budget Buddy",
        description: "A mobile personal finance application. Features customizable budget sections and items that track individual transactions, enabling users to gain meaningful insights into their spending habits.",
        technologies: ["React Native", "Typescript", "Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
        images: ["/BudgetBuddy/BudgetBuddy.png"],
        github: "https://github.com/jdufresne12/BudgetBuddy",
    },
    {
        id: 5,
        name: "Parallel Sudoku Solver",
        description: "A Java-based application that leverages parallel processing to solve Sudoku puzzles more efficiently using the ForkJoinPool framework and concurrent programming principles ",
        technologies: ["Java", "ForkJoinPool", "Concurrent Programming"],
        images: ["/Parallel/ParallelSudoku.png"],
        github: "https://github.com/abzium/parallel-sudoku"
    },
];