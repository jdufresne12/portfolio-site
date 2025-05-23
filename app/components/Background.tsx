'use client'
import React, { useEffect, useState } from 'react';

interface Particle {
    size: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
}

export default function Background() {
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
        <>
            <div className="fixed inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900" />
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
            </div>
        </>

    )
}