'use client'
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { useEffect, useState } from 'react';

interface Particle {
    size: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
}

export default function HomePage() {
    // Pre-calculate random values once on component mount
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = [...Array(100)].map(() => ({
            size: Math.random() * 10 + 5,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="relative">
            {/* Fixed position background container */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900">
                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                    {particles.map((particle, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-yellow-500"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                top: `${particle.top}%`,
                                left: `${particle.left}%`,
                                animation: `float ${particle.duration}s infinite linear ${particle.delay}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content container with proper z-index layering */}
            <div className="relative z-10">
                <HeroSection />
                <div className="relative z-10">
                    <AboutMe />
                    <Projects />
                    <Contact />
                </div>
            </div>

            {/* Define your animation */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-30px) translateX(15px); }
                    50% { transform: translateY(-15px) translateX(30px); }
                    75% { transform: translateY(15px) translateX(15px); }
                    100% { transform: translateY(0) translateX(0); }
                }
            `}</style>
        </div>
    );
}