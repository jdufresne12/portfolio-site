'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, Terminal, Server, Database, Layout, Github, Figma } from 'lucide-react';
import SkillsCarousel from './SkillsComponent';

// Interface for the skill object
interface SkillObject {
    name: string;
    icon: React.ReactNode;
}

const AboutSection = () => {
    // Refs for intersection observer
    const mainRef = useRef(null);
    const skillsRef = useRef(null);

    // Controls for the animations
    const mainControls = useAnimation();
    const skillsControls = useAnimation();

    // Check if elements are in view
    const mainInView = useInView(mainRef, { once: false, amount: 0.3 });
    const skillsInView = useInView(skillsRef, { once: false, amount: 0.1 });

    useEffect(() => {
        if (mainInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [mainControls, mainInView]);

    useEffect(() => {
        if (skillsInView) {
            skillsControls.start("visible");
        } else {
            skillsControls.start("hidden");
        }
    }, [skillsControls, skillsInView]);

    const languages: SkillObject[] = [
        { name: 'Java', icon: <Code size={24} /> },
        { name: 'JavaScript', icon: <Code size={24} /> },
        { name: 'TypeScript', icon: <Code size={24} /> },
        { name: 'Python', icon: <Code size={24} /> },
        { name: 'HTML', icon: <Code size={24} /> },
        { name: 'CSS', icon: <Code size={24} /> },
        { name: 'C', icon: <Code size={24} /> },
        { name: 'C++', icon: <Code size={24} /> },
        { name: 'SQL', icon: <Code size={24} /> },
    ];

    const tools_and_frameworks: SkillObject[] = [
        { name: 'GitHub', icon: <Github size={24} /> },
        { name: 'Figma', icon: <Figma size={24} /> },
        { name: 'React', icon: <Layout size={24} /> },
        { name: 'React-Native', icon: <Layout size={24} /> },
        { name: 'Tailwind CSS', icon: <Layout size={24} /> },
        { name: 'Next.js', icon: <Layout size={24} /> },
        { name: 'Node.js', icon: <Server size={24} /> },
        { name: 'Express.js', icon: <Server size={24} /> },
        { name: 'FastAPI', icon: <Server size={24} /> },
        { name: 'Docker', icon: <Server size={24} /> },
        { name: 'Jenkins', icon: <Server size={24} /> },
        { name: 'Agile-Scrum', icon: <Server size={24} /> },
        { name: 'Jest', icon: <Figma size={24} /> },
        { name: 'Appium', icon: <Figma size={24} /> },
        { name: 'AWS', icon: <Figma size={24} /> }
    ];

    return (
        <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center mt-15">
            <div className="max-w-6xl w-full px-4 py-16 z-10">
                {/* About Me */}
                <motion.div
                    ref={mainRef}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-8 items-center bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-2xl md:flex-row"
                >
                    {/* Image */}
                    <motion.div
                        variants={{
                            hidden: { x: -30, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div>
                            <img
                                src="./ProfileImage.jpg"
                                alt="John Dufresne - Hero Image"
                                className="w-300 h-48 object-cover rounded-2xl sm:h-80 md:w-64 md:h-110"
                            />
                        </div>
                    </motion.div>

                    {/* About Me - Text */}
                    <motion.div
                        variants={{
                            hidden: { x: 30, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex-1"
                    >
                        <div className="flex items-center mb-6">
                            <Terminal className="text-yellow-400 mr-3" size={32} />
                            <h2 className="text-2xl md:text-4xl font-bold text-white">
                                About <span className="text-yellow-400">Me</span>
                            </h2>
                        </div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-gray-200 space-y-4 text-sm md:text-base lg:text-lg"
                        >
                            <p className="border-l-4 border-r-4 border-yellow-400 px-4">
                                I'm John Dufresne, a Full Stack Developer with a Computer Science degree from
                                <span className="text-yellow-400 font-bold"> The University of Central Florida</span>.
                                I blend technical expertise with creative problem-solving to build digital solutions
                                that are both functional and visually compelling.
                            </p>
                            <p className='border-l-4 border-r-4 border-yellow-400 px-4'>
                                My approach to development spans the entire software lifecycle—from intuitive frontend
                                interfaces to robust backend systems and streamlined deployment processes. Through team leadership experiences,
                                I've learned to transform complex requirements into technical roadmaps that deliver exceptional results.
                            </p>
                            <p className="border-l-4 border-r-4 border-yellow-400 px-4">
                                I pride myself on creating applications that stand out through their performance, reliability, and user experience.
                                My background in automation and testing ensures that the systems I build are not only innovative but also dependable at scale.
                            </p>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <button className="flex items-center gap-2 px-4 py-3 bg-yellow-400 text-xs hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-yellow-400/20 md:text-lg md:px-6">
                                <Database size={18} />
                                View Projects
                            </button>
                            <button className="flex items-center gap-2 px-4 py-3 bg-transparent text-xs hover:bg-gray-700 text-yellow-400 font-bold rounded-lg transition-all border-2 border-yellow-400 md:text-lg md:px-6">
                                <Terminal size={18} />
                                Download Resume
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Skills section */}
                <motion.div
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

                    {/* Carousel components replace the grid layouts */}
                    <SkillsCarousel skillSet={languages} title="Languages" />

                    <SkillsCarousel skillSet={tools_and_frameworks} title="Tools and Frameworks" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;