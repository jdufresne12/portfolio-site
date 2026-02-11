'use client'
import React from 'react';
import { motion } from "framer-motion"
import { languages, frameworks_libraries, devops_tools } from "../data/skillsData";
import SkillsCarousel from "../components/SkillsComponent";

export default function MySkills() {

    return (
        <section id="skills" className="w-full flex flex-col items-center mt-30">
            <div className='mt-8' />
            <div className="max-w-6xl w-full px-4 z-10">
                < motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 50 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white inline-block relative border-b-4 border-yellow-400">
                            My <span className="text-yellow-400">Skills</span>
                        </h3>
                    </div>
                    <SkillsCarousel skillSet={languages} title="Languages" />
                    <SkillsCarousel skillSet={frameworks_libraries} title="Frameworks and Libraries" />
                    <SkillsCarousel skillSet={devops_tools} title="Dev Ops and Tools" />
                </motion.div >
            </div>
        </section >
    )
}