"use client"
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative h-screen w-full snap-start transition-opacity duration-1000"
        >
            <div className="absolute inset-0">
                <Image
                    src="/heroImage.jpg"
                    alt="John Dufresne - Hero Image"
                    fill
                    className="object-cover object-[center_35%] opacity-25 "
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
    )

}