'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Terminal, Database, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
    const mainRef = useRef(null);
    const mainControls = useAnimation();
    const mainInView = useInView(mainRef, { once: false, amount: 0.3 });
    useEffect(() => {
        if (mainInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [mainControls, mainInView]);

    return (
        <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center w">
            <div className="max-w-6xl w-full px-4 z-10">
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
                            <p className="border-l-4 border-r-4 border-yellow-400 px-4 py-2">
                                I&apos;m John Dufresne, a Frontend-focused Full Stack Developer with a Computer Science degree from
                                <span className="text-yellow-400 font-bold"> The University of Central Florida</span>.
                                I specialize in crafting engaging, responsive user interfaces and seamless user experiences
                                using modern technologies like React, Next.js, and React Native.
                            </p>

                            <p className="border-l-4 border-r-4 border-yellow-400 px-4 py-2">
                                My passion lies in transforming complex ideas into intuitive, visually compelling applications
                                that users love to interact with. While I&apos;m comfortable working across the full stack—from
                                database design and API development to deployment automation—my expertise shines brightest in frontend development,
                                where I focus on creating pixel-perfect interfaces, smooth animations, and optimized performance.
                            </p>

                            <p className="border-l-4 border-r-4 border-yellow-400 px-4 py-2">
                                Through my experience building cross-platform applications and leading development teams,
                                I&apos;ve mastered the art of translating user needs into clean, maintainable code. My background
                                in backend systems and DevOps practices gives me a unique perspective on how frontend choices
                                impact overall system performance and user satisfaction.
                            </p>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-8 flex flex-row flex-wrap gap-4"
                        >
                            <button
                                className="flex items-center gap-2 px-4 py-3 bg-yellow-400 text-xs hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-yellow-400/20 md:text-lg md:px-6"
                                onClick={() => {
                                    const section = document.getElementById("projects");
                                    section?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <Database size={18} />
                                View Projects
                            </button>
                            <Link
                                className="flex items-center gap-2 px-4 py-3 bg-transparent text-xs hover:bg-gray-700 text-yellow-400 font-bold rounded-lg transition-all border-2 border-yellow-400 md:text-lg md:px-6"
                                href="/JohnDufresneResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Terminal size={18} />
                                Download Resume
                            </Link>
                            <Link
                                href="https://github.com/jdufresne12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-200 transition-all md:text-lg md:px-6"
                            >
                                <Github size={18} />
                                GitHub
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/john-dufresne-abb631264/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-all md:text-lg md:px-6"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;