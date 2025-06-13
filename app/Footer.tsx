import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gradient from-gray-800 to-gray-900 text-white py-8 relative ">
            <div className="border-t border-gray-700 mx-3"></div>
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <ul style={{ fontFamily: "var(--font-vt323)" }} className="flex mt-2 space-x-10 text-md md:text-2xl">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex flex-row items-center justify-center gap-20 md:gap-40">
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="text-gray-400 xs:text-lg md:text-2xl">John Dufresne | 2025</h2>
                <h2 style={{ fontFamily: "var(--font-vt323)" }} className="flex text-md justify-center items-center md:text-2xl">
                    Built with
                    <Image
                        className="dark:invert pl-2 md:pt-1"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={60}
                        height={20}
                        priority
                    />
                </h2>
            </div>
        </footer>
    );
}