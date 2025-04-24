import React from 'react';

interface CircleProgressProps {
    ratio?: number;
    size?: number;
    activeColor?: string;
    inactiveColor?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
    ratio = 0.7,
    size = 300,
    activeColor = "#FCD34D",
    inactiveColor = "#4B5563"
}) => {
    // Calculate how many dots should be highlighted
    const total = 10;
    const active = Math.round(ratio * total);

    // Generate array of circle positions
    const circles = Array.from({ length: total }, (_, index) => {
        const angle = (index / total) * 2 * Math.PI;
        const radius = size * 0.4;

        const x = radius * Math.sin(angle) + size / 2;
        const y = -radius * Math.cos(angle) + size / 2;

        const isActive = index < active;
        return { x, y, isActive };
    });

    // Size of each individual circle
    const circleSize = size * 0.1;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Progress label in the center */}
            <div
                className="absolute inset-0 flex items-center justify-center font-bold text-xs md:text-lg"
                style={{ color: activeColor }}
            >
                {active}/{total}
            </div>

            {/* Draw circles */}
            {circles.map((circle, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full transition-colors duration-300 
                     ${circle.isActive ? 'animate-pulse' : ''}`}
                    style={{
                        left: circle.x - circleSize / 2,
                        top: circle.y - circleSize / 2,
                        width: circleSize,
                        height: circleSize,
                        backgroundColor: circle.isActive ? activeColor : inactiveColor,
                        boxShadow: circle.isActive ? `0 0 12px 2px ${activeColor}40` : 'none',
                        transform: circle.isActive ? 'scale(1.1)' : 'scale(1)',
                    }}
                />
            ))}

            <div
                className="absolute rounded-full border-2 opacity-20"
                style={{
                    left: size * 0.1,
                    top: size * 0.1,
                    width: size * 0.8,
                    height: size * 0.8,
                    borderColor: activeColor,
                }}
            />
        </div>
    );
};

export default CircleProgress;