'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Server, Database, Layout, Github, Figma } from 'lucide-react';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: 'JavaScript', icon: <Code size={24} /> },
        { name: 'TypeScript', icon: <Code size={24} /> },
        { name: 'React', icon: <Layout size={24} /> },
        { name: 'Next.js', icon: <Layout size={24} /> },
        { name: 'Tailwind CSS', icon: <Layout size={24} /> },
        { name: 'Node.js', icon: <Server size={24} /> },
        { name: 'Git', icon: <Github size={24} /> },
        { name: 'Figma', icon: <Figma size={24} /> }
    ];

    return (
        <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center ">
            {/* Main content container */}
            <div className="max-w-6xl w-full px-4 py-16 z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-8 items-center bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-2xl"
                >
                    {/* Left side - Image with animated border */}
                    <motion.div
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-xl animate-pulse" style={{ animationDuration: '3s' }} />
                        <div className="relative p-1 bg-gray-800 rounded-xl overflow-hidden">
                            <img
                                src="./heroImage.jpg"
                                alt="John Dufresne - Hero Image"
                                className="w-64 h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40" />
                        </div>
                    </motion.div>

                    {/* Right side - Text content */}
                    <motion.div
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1"
                    >
                        <div className="flex items-center mb-6">
                            <Terminal className="text-yellow-400 mr-3" size={32} />
                            <h2 className="text-4xl font-bold text-white">
                                About <span className="text-yellow-400">Me</span>
                            </h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-gray-200 space-y-4 text-lg"
                        >
                            <p className="border-l-4 border-yellow-400 pl-4">
                                I'm John Dufresne, a Full Stack Developer with a Computer Science degree from
                                <span className="text-yellow-400 font-bold"> The University of Central Florida</span>.
                                I blend technical expertise with creative problem-solving to build digital solutions
                                that are both functional and visually compelling.
                            </p>
                            <p>
                                My approach to development spans the entire software lifecycle—from intuitive frontend
                                interfaces to robust backend systems and streamlined deployment processes. Through team leadership experiences,
                                I've learned to transform complex requirements into technical roadmaps that deliver exceptional results.
                            </p>
                            <p>
                                I pride myself on creating applications that stand out through their performance, reliability, and user experience.
                                My background in automation and testing ensures that the systems I build are not only innovative but also dependable at scale.
                            </p>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-yellow-400/20 flex items-center gap-2">
                                <Database size={18} />
                                View Projects
                            </button>
                            <button className="px-6 py-3 bg-transparent hover:bg-gray-700 text-yellow-400 font-bold rounded-lg transition-all border-2 border-yellow-400 flex items-center gap-2">
                                <Terminal size={18} />
                                Download Resume
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Skills section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white inline-block relative">
                            My <span className="text-yellow-400">Skills</span>
                            <div className="h-1 w-24 bg-yellow-400 mx-auto mt-2"></div>
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                                className="p-6 bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-yellow-400 group transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gray-700 group-hover:bg-yellow-400 transition-all duration-300">
                                        <div className="text-yellow-400 group-hover:text-gray-900 transition-all duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-white group-hover:text-yellow-400 transition-all duration-300">{skill.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CSS for floating animation */}
            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(-15px) translateX(30px); }
          75% { transform: translateY(15px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
        </section>
    );
};

export default AboutSection;