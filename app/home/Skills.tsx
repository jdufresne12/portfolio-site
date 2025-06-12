'use client'
import { motion, useAnimation, useInView } from "framer-motion"
import React, { useEffect, useRef } from 'react';
import { Github, Figma } from 'lucide-react';
import { FaJava, FaJs, FaPython, FaHtml5, FaCss3, FaReact, FaNodeJs, FaJenkins, FaDocker, FaJira, FaAws } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiC, SiExpress, SiFastapi, SiJest, SiAppium, SiMysql, SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";

import SkillsCarousel from "../components/SkillsComponent";

// Interface for the skill object
export interface SkillObject {
    name: string;
    icon: React.ReactNode;
    color: string;
    isOpen: boolean;
    rating: number;
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
        { name: 'Java', icon: <FaJava size={28} color="oklch(58.8% 0.158 241.966)" />, color: "oklch(58.8% 0.158 241.966)", isOpen: false, rating: 8 / 10 },
        { name: 'JavaScript', icon: <FaJs size={28} color="oklch(90.5% 0.182 98.111)" />, color: "oklch(90.5% 0.182 98.111)", isOpen: false, rating: 8 / 10 },
        { name: 'TypeScript', icon: <SiTypescript size={24} color="oklch(58.8% 0.158 241.966)" />, color: "oklch(58.8% 0.158 241.966)", isOpen: false, rating: 8 / 10 },
        { name: 'Python', icon: <FaPython size={24} color="oklch(50% 0.134 242.749)" />, color: "oklch(50% 0.134 242.749)", isOpen: false, rating: 7 / 10 },
        { name: 'HTML', icon: <FaHtml5 size={28} color="oklch(63.7% 0.237 25.331)" />, color: "oklch(63.7% 0.237 25.331)", isOpen: false, rating: 6 / 10 },
        { name: 'CSS', icon: <FaCss3 size={28} color="oklch(58.5% 0.233 277.117)" />, color: "oklch(58.5% 0.233 277.117)", isOpen: false, rating: 8 / 10 },
        { name: 'C', icon: <SiC size={28} color="oklch(58.8% 0.158 241.966)" />, color: "oklch(58.8% 0.158 241.966)", isOpen: false, rating: 8 / 10 },
        { name: 'C++', icon: <SiCplusplus size={28} color="oklch(58.8% 0.158 241.966)" />, color: "oklch(58.8% 0.158 241.966)", isOpen: false, rating: 6 / 10 },
        { name: 'SQL', icon: <TbSql size={28} color="oklch(75% 0.183 55.934)" />, color: "oklch(75% 0.183 55.934)", isOpen: false, rating: 8 / 10 },
    ];

    const frameworks_libraries: SkillObject[] = [
        { name: 'React', icon: <FaReact size={28} color="oklch(78.9% 0.154 211.53)" />, color: "oklch(78.9% 0.154 211.53)", isOpen: false, rating: 9 / 10 },
        { name: 'React-Native', icon: <FaReact size={28} color="oklch(78.9% 0.154 211.53)" />, color: "oklch(78.9% 0.154 211.53)", isOpen: false, rating: 9 / 10 },
        { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={28} color="oklch(68.5% 0.169 237.323)" />, color: "oklch(68.5% 0.169 237.323)", isOpen: false, rating: 6 / 10 },
        { name: 'Next.js', icon: <RiNextjsLine size={28} color="black" />, color: "white", isOpen: false, rating: 6 / 10 },
        { name: 'Node.js', icon: <FaNodeJs size={28} color="oklch(62.7% 0.194 149.214)" />, color: "oklch(62.7% 0.194 149.214)", isOpen: false, rating: 9 / 10 },
        { name: 'Express.js', icon: <SiExpress size={28} color="black" />, color: "white", isOpen: false, rating: 6 / 10 },
        { name: 'FastAPI', icon: <SiFastapi size={28} color="oklch(60% 0.118 184.704)" />, color: "oklch(60% 0.118 184.704)", isOpen: false, rating: 7 / 10 },
        { name: 'Jest', icon: <SiJest size={28} color="oklch(51.4% 0.222 16.935)" />, color: "oklch(51.4% 0.222 16.935)", isOpen: false, rating: 6 / 10 },
        { name: 'Appium', icon: <SiAppium size={28} color="oklch(65.6% 0.241 354.308)" />, color: "oklch(65.6% 0.241 354.308)", isOpen: false, rating: 6 / 10 },
        { name: 'PostgresSQL', icon: <BiLogoPostgresql size={28} color="oklch(50% 0.134 242.749)" />, color: "oklch(50% 0.134 242.749)", isOpen: false, rating: 7 / 10 },
        { name: 'MySQL', icon: <SiMysql size={28} color="oklch(75% 0.183 55.934)" />, color: "oklch(75% 0.183 55.934)", isOpen: false, rating: 5 / 10 },
        { name: 'Mongo DB', icon: <SiMongodb size={28} color="oklch(62.7% 0.194 149.214)" />, color: "oklch(62.7% 0.194 149.214)", isOpen: false, rating: 5 / 10 },
    ];

    const devops_tools: SkillObject[] = [
        { name: 'GitHub', icon: <Github size={28} color="black" />, color: "white", isOpen: false, rating: 10 / 10 },
        { name: 'Figma', icon: <Figma size={28} color="white" />, color: "white", isOpen: false, rating: 7 / 10 },
        { name: 'Docker', icon: <FaDocker size={28} color="oklch(68.5% 0.169 237.323)" />, color: "oklch(68.5% 0.169 237.323)", isOpen: false, rating: 6 / 10 },
        { name: 'Jenkins', icon: <FaJenkins size={28} color="white" />, color: "oklch(51.4% 0.222 16.935)", isOpen: false, rating: 8 / 10 },
        { name: 'vsCode', icon: <VscVscode size={28} color="oklch(68.5% 0.169 237.323)" />, color: "oklch(68.5% 0.169 237.323)", isOpen: false, rating: 10 / 10 },
        { name: 'Agile-Scrum', icon: <FaJira size={28} color="oklch(68.5% 0.169 237.323)" />, color: "oklch(68.5% 0.169 237.323)", isOpen: false, rating: 7 / 10 },
        { name: 'AWS', icon: <FaAws size={28} color="oklch(76.9% 0.188 70.08)" />, color: "oklch(76.9% 0.188 70.08)", isOpen: false, rating: 7 / 10 }
    ];

    return (
        <section id="skills" className="w-full flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full px-4 z-10">
                < motion.div
                    ref={skillsRef}
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
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