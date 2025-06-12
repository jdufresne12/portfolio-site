'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ProjectCard from "../components/ProjectCard";

export interface ProjectInfo {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    images: string;
}

export default function Projects() {
    const skillsRef = useRef(null);
    const skillsControls = useAnimation();
    const skillsInView = useInView(skillsRef, { once: false, amount: 0.1 });
    useEffect(() => {
        if (skillsInView) {
            skillsControls.start("visible");
        } else {
            skillsControls.start("hidden");
        }
    }, [skillsControls, skillsInView]);

    const projects: ProjectInfo[] = [
        {
            id: 1,
            name: "Army Reserve Mercury",
            description: "A Web and Mobile application dedicated to making the daily lives of Army Reservists easier, by handling tedious administrative tasks digitally and providing a dashboard for these administrative tasks and upcoming events.",
            technologies: ["React", "React Native", "Javascript", "Python", "Jenkins", "AWS", "Jest", "PostgreSQL"],
            images: "/MercuryLogin.png"
        },
        {
            id: 2,
            name: "Budget Buddy",
            description: "A mobile personal finance application. Features customizable budget sections and items that track individual transactions, enabling users to gain meaningful insights into their spending habits.",
            technologies: ["React Native", "Typescript", "Python", "FastAPI", "PostgreSQL", "JWT"],
            images: "/BudgetBuddy.png"
        },
        {
            id: 3,
            name: "Parallel Sudoku Solver",
            description: "A Java-based application that leverages parallel processing to solve Sudoku puzzles more efficiently using the ForkJoinPool framework and concurrent programming principles ",
            technologies: ["Java"],
            images: "/ParallelSudoku.png"
        },
    ]

    return (
        <section id="projects" className="w-full flex flex-col items-center justify-center mt-30">
            <div className='mt-5' />
            < motion.div
                ref={skillsRef}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={skillsControls}
                transition={{ duration: 1.2 }}
                className="max-w-6xl w-full px-4 py-16 z-10"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold inline-block relative border-b-yellow-400 border-b-2">
                        <span className="text-yellow-400">My </span>
                        Projects
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                    {projects.map((project: ProjectInfo) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </motion.div>
        </section>

    )
}