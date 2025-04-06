'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react';

export default function Navbar() {
    const [screenWidth, setScreenWidth] = useState<number>(770);
    const [selectedNavOption, setSelectedNavOption] = useState<string>("");

    const navOptions = ["About", "Projects", "Skills", "Contact Me"];
    const sectionIds = ["about", "projects", "skills", "contact"];

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        console.log(selectedNavOption)
    }, [selectedNavOption]);

    const scrollToSection = (sectionId: string) => {
        setSelectedNavOption(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-zinc-800 shadow-md overflow-visible relative z-50">
            <div className="container px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-2 pl-10">
                    <Image
                        src="/JD.svg"
                        alt="John Dufresne logo"
                        width={screenWidth > 350 ? 150 : 100}
                        height={0}
                        priority
                    />
                </div>
                <ul className="flex space-x-6 pr-4 md:text-2xl">
                    {screenWidth > 769
                        ? (
                            <>
                                {navOptions.map((option, index) => (
                                    <li key={option}>
                                        <button
                                            onClick={() => setSelectedNavOption(sectionIds[index])}
                                            style={{ fontFamily: "var(--font-vt323)" }}
                                            className="font-serif text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                                        >
                                            {option}
                                        </button>
                                    </li>
                                ))}
                            </>
                        )
                        : (
                            <>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex justify-center">
                                            <FaBars
                                                size={30}
                                                className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                {navOptions.map((option, index) => (
                                                    <Menu.Item key={option}>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => setSelectedNavOption(sectionIds[index])}
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
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}