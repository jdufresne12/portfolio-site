import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gradient from-gray-800 to-gray-900 text-white py-8 relative ">
            <div className="border-t border-gray-700 mx-3"></div>
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <ul style={{ fontFamily: "var(--font-vt323)" }} className="flex mt-2 space-x-10 text-sm md:text-xl">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:gap-40">
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="text-gray-400  mb-4 xs:text-lg sm:text-2xl md:mb-0">John Dufresne | 2025</h2>
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="flex text-lg justify-center items-center">
                    Built with
                    <Image
                        className="dark:invert pl-2"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={65}
                        height={24}
                        priority
                    />
                </h2>
            </div>
        </footer>
    );
}