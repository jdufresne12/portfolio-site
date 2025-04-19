'use client'
import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {

    return (
        <footer className="bg-zinc-800 shadow-top text-white py-8">
            <div className="border-t border-gray-700 my-6 mx-3"></div>
            <div className="container mx-auto pr-3 md:pr-0">
                <div className="grid grid-cols-3 justify-items-center md:gap-8 text-center md:text-left">
                    <div>
                        <h3 style={{ fontFamily: "var(--font-vt323)", color: '#FFBD2F' }} className="font-bold font-serif text-md md:text-2xl underline">NAVIGATE</h3>
                        <ul style={{ fontFamily: "var(--font-vt323)" }} className="mt-2 space-y-2 text-sm md:text-xl">
                            <li><a href="#" className="hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400">About me</a></li>
                            <li><a href="#" className="hover:text-gray-400">Work</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: "var(--font-vt323)", color: '#FFBD2F' }} className="font-bold font-serif text-md md:text-2xl underline">PROJECTS</h3>
                        <ul style={{ fontFamily: "var(--font-vt323)" }} className="mt-2 space-y-2 text-sm md:text-xl">
                            <li><a href="#" className="hover:text-gray-400">Budget Buddy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Reserve Mercury</a></li>
                            <li><a href="#" className="hover:text-gray-400">Parallel Sudoku</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contact Manager</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: "var(--font-vt323)", color: '#FFBD2F' }} className="font-bold font-serif text-md md:text-2xl underline">CONTACT</h3>
                        <ul style={{ fontFamily: "var(--font-vt323)" }} className="mt-2 sm: sm:ml-2 space-y-2 text-sm md:text-xl">
                            <li><a href="mailto:Jdufresne135@gmail.com" className="hover:text-gray-400">Jdufresne135@gmail.com</a></li>
                            <li><a href="tel:+18457975694" className="hover:text-gray-400">(845) 797 - 5694</a></li>
                            <li><a href="#" className="hover:text-gray-400">Resume</a></li>
                        </ul>
                        <div className="flex space-x-6 pl-1.5 pt-3">
                            <a href="https://www.linkedin.com/in/john-dufresne-abb631264/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-white hover:text-gray-400" size={27} />
                            </a>
                            <a href="https://github.com/jdufresne12" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white hover:text-gray-400" size={27} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 flex items-center justify-center gap-40">
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="text-gray-400 text-xl">John Dufresne|2025</h2>
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="flex text-xl justify-center items-center">
                    Built with
                    <Image
                        className="dark:invert pl-2"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={70}
                        height={0}
                        priority
                    />
                </h2>
            </div>
        </footer >
    );
}