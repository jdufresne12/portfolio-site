'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMicrochip, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Navbar() {
    const [screenWidth, setScreenWidth] = useState(551);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="bg-zinc-800 shadow-md overflow-hidden">
            <div className="container px-4 py-3 flex items-center ">
                <div className="flex space-x-2 pl-1">
                    <div>
                        <FaMicrochip size={35} color="#FFBD2F" />
                    </div>
                    <div>
                        <h1
                            style={{ fontFamily: "var(--font-vt323)", color: '#FFBD2F' }}
                            className="text-4xl text-white hover:text-black"
                        >
                            JD
                        </h1>
                    </div>
                </div>
                <ul className="flex space-x-10 mx-auto my-auto text-xl md:text-2xl">
                    <li>
                        <Link
                            href="/home"
                            style={{ fontFamily: "var(--font-vt323)" }}
                            className="font-serif text-white hover:text-black"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            style={{ fontFamily: "var(--font-vt323)" }}
                            className="font-serif text-white hover:text-black"
                        >
                            Projects
                        </Link>
                    </li>
                    {screenWidth > 550
                        ? (
                            <>
                                <li>
                                    <Link
                                        href="https://www.linkedin.com/in/john-dufresne-abb631264/"
                                        passHref
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontFamily: "var(--font-vt323)" }}
                                        className="font-serif text-white hover:text-black"
                                    >
                                        <FaLinkedin size={35} />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/jdufresne12"
                                        passHref
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontFamily: "var(--font-vt323)" }}
                                        className="font-serif text-white hover:text-black"
                                    >
                                        <FaGithub size={35} />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/home"
                                        style={{ fontFamily: "var(--font-vt323)" }}
                                        className="font-serif text-white hover:text-black"
                                    >
                                        Resume
                                    </Link>
                                </li>
                            </>
                        )
                        : (
                            <>
                                <li>
                                    <Link
                                        href="/home"
                                        style={{ fontFamily: "var(--font-vt323)" }}
                                        className="font-serif text-white hover:text-black"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </>
                        )
                    }

                </ul>

            </div>
        </nav>
    )
}