'use client'
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { useEffect, useState } from 'react';
import MySkills from './Skills';

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
        <main className="relative min-h-screen">
            {/* Base background */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900" />

            {/* Particles layer */}
            <div
                className="fixed inset-0 overflow-hidden pointer-events-none"
                style={{ zIndex: 1 }}
            >
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-yellow-500 opacity-20"
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

            {/* Page content - higher z-index than particles */}
            <div className="relative" style={{ zIndex: 10 }}>
                <HeroSection />
                <AboutMe />
                <MySkills />
                <Projects />
                <Contact />
            </div>

            {/* Add the animation keyframes via style tag */}
            <style jsx global>{`
                @keyframes float {
                    0% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(10px, 10px);
                    }
                    50% {
                        transform: translate(0, 20px);
                    }
                    75% {
                        transform: translate(-10px, 10px);
                    }
                    100% {
                        transform: translate(0, 0);
                    }
                }
            `}</style>
        </main>
    );
}