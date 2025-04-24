'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Terminal, Database } from 'lucide-react';

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
            </div>
        </section>
    );
};

export default AboutSection;