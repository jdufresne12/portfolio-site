'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';

export default function HomePage() {
    return (
        <main className="h-screen overflow-y-scroll">
            {/* Container for Hero and About with snap scrolling */}
            <div className="snap-y snap-mandatory h-[200vh]">
                {/* Hero Section */}
                <section
                    id="hero"
                    className="relative h-screen w-full snap-start transition-opacity duration-1000"
                >
                    <div className="absolute inset-0">
                        <Image
                            src="/heroImage.jpg"
                            alt="John Dufresne - Hero Image"
                            fill
                            className="object-cover object-[center_35%] opacity-25"
                            priority
                        />
                    </div>
                    <div className="flex flex-col relative h-full z-10 px-4 items-center justify-between text-white shadow-2xl py-20">
                        <div></div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">John Dufresne</h1>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    1000,
                                    'Dev Ops Architect',
                                    1000,
                                    'Software Developer',
                                    1000,
                                    'Test Engineer',
                                    1000,
                                    'Car Enthusiast',
                                    1000
                                ]}
                                wrapper="span"
                                speed={20}
                                style={{ display: 'inline-block' }}
                                className='text-yellow-400 text-xl md:text-3xl'
                                repeat={Infinity}
                            />
                        </div>
                        <div
                            className="flex flex-col items-center mb-8 cursor-pointer hover:text-yellow-400"
                            onClick={() => {
                                const aboutSection = document.getElementById('about');
                                aboutSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <h3 className="text-md mb-2">learn more about me</h3>
                            <FaArrowDown size={15} />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section
                    id="about"
                    className="h-screen w-full flex snap-start items-center justify-center transition-opacity duration-1000"
                >
                    <div className="flex max-w-5xl bg-gray-800 items-center justify-center">
                        {/* Small Screens */}
                        <div className='md:hidden'>

                        </div>

                        {/* Other Screens */}
                        <div className='mr-15 w-auto bg-white sm:hidden md:block'>
                            <Image
                                src="/heroImage.jpg"
                                alt="John Dufresne - Hero Image"
                                width={200}
                                height={200}
                                className='object-contain'
                                priority
                            />
                        </div>
                        <div className="md:w-1/2 lg:w-3/5">
                            <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-yellow-400">About Me</h2>
                            <div className="text-white font-serif space-y-4">
                                <p>
                                    Hey I'm John Dufresne! Growing up in Poughkeepsie, New York, I was always fascinated by building and learning, from disassembling and reassembling things around the house, to fixing cars in my dad's garage.
                                    This hands-on curiosity eventually led me to a programming class in high school, where I discovered a new way to build and problem-solve.
                                </p>
                                <p>
                                    I went on to study Computer Science at UCF, diving mainly into full-stack development while also exploring cybersecurity and AI. While at UCF, I led a team developing a cross-platform application for U.S.
                                    Army Reservists—managing both frontend and backend systems and implementing CI/CD pipelines to streamline our workflow. This experience reinforced my approach to software: balancing development, automation, and teamwork to build scalable solutions.
                                </p>
                                <p>
                                    At my core, I love solving problems, learning new things, and building systems that just work. Whether it's fixing a car, debugging a tricky issue, or architecting a complex application, I'm always up for the challenge.
                                    Currently, I'm seeking a full-stack developer position where I can leverage my technical skills and collaborative approach to create impactful solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Rest of sections without snap scrolling */}
            {/* Projects Section */}
            <section
                id="projects"
                className="h-screen w-full flex items-center justify-center transition-opacity duration-1000"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project cards here... */}
                        {/* Project Card 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gray-300"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Project One</h3>
                                <p className="text-gray-700">Brief description of project one goes here.</p>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">React</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Node.js</span>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gray-300"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Project Two</h3>
                                <p className="text-gray-700">Brief description of project two goes here.</p>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Next.js</span>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">TypeScript</span>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gray-300"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Project Three</h3>
                                <p className="text-gray-700">Brief description of project three goes here.</p>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">JavaScript</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">Tailwind</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="h-screen w-full flex items-center justify-center transition-opacity duration-1000"
            >
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Skill items */}
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git', 'Figma'].map((skill) => (
                            <div key={skill} className="p-4 bg-gray-100 rounded-lg flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    {/* Skill icon can go here */}
                                </div>
                                <h3 className="font-medium">{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="h-screen w-full text-white flex items-center justify-center transition-opacity duration-1000"
            >
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-gray-700 mr-3"></span>
                                        <span>your.email@example.com</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-gray-700 mr-3"></span>
                                        <span>Location: City, Country</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-gray-700 mr-3"></span>
                                        <span>@yourusername</span>
                                    </li>
                                </ul>
                                <div className="mt-8 flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 bg-gray-700 rounded-lg"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 bg-gray-700 rounded-lg"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full p-3 bg-gray-700 rounded-lg"
                                    ></textarea>
                                    <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}