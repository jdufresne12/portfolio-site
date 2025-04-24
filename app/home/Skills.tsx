'use client'
import { motion, useAnimation, useInView } from "framer-motion"
import React, { useEffect, useRef } from 'react';
import { Code, Terminal, Server, Database, Layout, Github, Figma } from 'lucide-react';
import SkillsCarousel from "../components/SkillsComponent";
import { FaJava } from "react-icons/fa";

// Interface for the skill object
export interface SkillObject {
    name: string;
    icon: React.ReactNode;
    color: string;
    isOpen: boolean;
}

export default function MySkills() {
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

    const languages: SkillObject[] = [
        { name: 'Java', icon: <FaJava size={35} color="oklch(50% 0.134 242.749)" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'JavaScript', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'TypeScript', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Python', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'HTML', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'CSS', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'C', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'C++', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'SQL', icon: <Code size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
    ];

    const frameworks_libraries: SkillObject[] = [
        { name: 'React', icon: <Layout size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'React-Native', icon: <Layout size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Tailwind CSS', icon: <Layout size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Next.js', icon: <Layout size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Node.js', icon: <Server size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Express.js', icon: <Server size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'FastAPI', icon: <Server size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Jest', icon: <Figma size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Appium', icon: <Figma size={24} color="black" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
    ];

    const devops_tools: SkillObject[] = [
        { name: 'GitHub', icon: <Github size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Figma', icon: <Figma size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Docker', icon: <Server size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Jenkins', icon: <Server size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'Agile-Scrum', icon: <Server size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false },
        { name: 'AWS', icon: <Figma size={24} color="yellow" />, color: "oklch(50% 0.134 242.749)", isOpen: false }
    ];

    return (
        <section id="skills" className="w-full flex flex-col items-center justify-center ">
            <div className="max-w-6xl w-full px-4 py-16 z-10">
                < motion.div
                    ref={skillsRef}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={skillsControls}
                    transition={{ duration: 0.8 }}
                    className="mt-16"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white inline-block relative border-b-4 border-yellow-400">
                            My <span className="text-yellow-400">Skills</span>
                        </h3>
                    </div>
                    <SkillsCarousel skillSet={languages} title="Languages" />
                    <SkillsCarousel skillSet={frameworks_libraries} title="Frameworks and Libraries" />
                    <SkillsCarousel skillSet={devops_tools} title="Dev Ops and tools" />
                </motion.div >
            </div>
        </section >
    )
}