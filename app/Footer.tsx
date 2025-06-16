'use client'
import Image from 'next/image';

export default function Footer() {
    const navOptions = ["Home", "About", "Skills", "Projects", "Contact"];
    const sectionIds = ["hero", "about", "skills", "projects", "contact"];

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient from-gray-800 to-gray-900 text-white py-8 relative ">
            <div className="border-t border-gray-700 mx-3"></div>
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <ul style={{ fontFamily: "var(--font-vt323)" }} className="flex mt-2 space-x-10 text-sm md:text-2xl">
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
                </div>
            </div>
            <div className="mt-8 flex flex-row items-center justify-center gap-20 md:gap-40">
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="text-gray-400 text-sm md:text-xl">John Dufresne | 2025</h2>
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="flex justify-center items-center text-gray-400 text-sm md:text-xl">
                    Built with
                    <Image
                        className="size-12 md:size-18 pl-2 pt-0.5"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={0}
                        height={0}
                        priority
                    />
                </h2>
            </div>
        </footer>
    );
}