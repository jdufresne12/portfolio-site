'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const navOptions = ["About", "Skills", "Projects", "Contact Me"];
    const sectionIds = ["about", "skills", "projects", "contact"];

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node))
                setMenuOpen(false);
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [menuOpen])

    return (
        <nav className="fixed top-5 left-13 z-50 w-full ">
            <div className="flex items-center justify-between ">
                <div >
                    <Image
                        src="/JD.svg"
                        alt="John Dufresne logo"
                        width={0}
                        height={0}
                        className="size-12 md:size-15"
                        priority
                        onClick={() => scrollToSection("hero")}
                    />
                </div>
                <ul className="hidden bg-zinc-800 rounded-full shadow-sm shadow-stone-700 h-fit lg:ml-30 -ml-8 px-10 py-3 space-x-10 items-center lg:text-xl md:text-xl md:flex">
                    {navOptions.map((option, index) => (
                        <li key={option}>
                            <button
                                onClick={() => scrollToSection(sectionIds[index])}
                                style={{ fontFamily: "var(--font-vt323)" }}
                                className="font-serif text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
                <Menu as="div" ref={menuRef} className="md:hidden inline text-left mr-20">
                    <Menu.Button className="inline-flex justify-center items-center text-lg text-white hover:text-yellow-400" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="bg-zinc-800 rounded-full shadow-md shadow-stone-700 w-fit flex items-center resize">
                            <h3 style={{ fontFamily: "var(--font-vt323)" }} className="px-4 py-2 transition-colors duration-300 cursor-pointer ">Menu</h3>
                            {
                                menuOpen
                                    ? <FaChevronUp size={10} className="mr-3" aria-hidden="true" />
                                    : <FaChevronDown size={10} className="mr-3" aria-hidden="true" />
                            }
                        </div>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-25 mt-2 w-56 origin-top-right rounded-md bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {navOptions.map((option, index) => (
                                    <Menu.Item key={option}>
                                        {({ active }) => (
                                            <button
                                                onClick={() => scrollToSection(sectionIds[index])}
                                                style={{ fontFamily: "var(--font-vt323)" }}
                                                className={`${active ? 'bg-zinc-600 text-yellow-400' : 'text-white'
                                                    } block w-full text-left px-4 py-2 text-xl transition-colors duration-300`}
                                            >
                                                {option}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <div className="hidden md:flex w-1/7"><p></p></div>
            </div>
        </nav>
    );
}