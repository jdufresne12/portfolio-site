"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SkillObject } from "../home/Skills";
import CircleProgress from "./CircleProgress";

interface SkillsCarouselProps {
    skillSet: SkillObject[];
    title: string;
}

export default function SkillsCarousel({
    skillSet,
    title,
}: SkillsCarouselProps) {
    const [skills, setSkills] = useState<SkillObject[]>(skillSet);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);


    const totalSlides = Math.ceil(skillSet.length / itemsToShow);
    const maxIndex = totalSlides - 1;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(3);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(4);
            } else {
                setItemsToShow(5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Scroll to position when currentIndex changes
    useEffect(() => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.scrollWidth / skillSet.length;
            carouselRef.current.scrollTo({
                left: currentIndex * itemsToShow * itemWidth,
                behavior: "smooth",
            });
        }
    }, [currentIndex, itemsToShow, skillSet.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    // Mouse drag functionality
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll speed multiplier
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Calculate new current index based on scroll position
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.scrollWidth / skillSet.length;
            const newIndex = Math.round(
                carouselRef.current.scrollLeft / (itemWidth * itemsToShow)
            );
            setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
        }
    };

    // Touch functionality for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        // Calculate new current index based on scroll position
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.scrollWidth / skillSet.length;
            const newIndex = Math.round(
                carouselRef.current.scrollLeft / (itemWidth * itemsToShow)
            );
            setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
        }
    };

    // Skill Click functionality
    const handleSkillClick = (index: number) => {
        setSkills(prevSkills =>
            prevSkills.map((skill, i) =>
                i === index
                    ? { ...skill, isOpen: !skill.isOpen }
                    : skill
            )
        );
    };

    return (
        <div className="w-full mt-8">
            {/* Section header with title */}
            <h3 className="text-xl font-bold text-white mb-4 pl-2">{title}</h3>

            {/* Navigation and carousel container */}
            <div className="relative group">
                {/* Left arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 xl:-left-5 top-1/2 -translate-y-1/2 -translate-x-4 z-10
                               bg-gray-800/80 text-yellow-400 rounded-full p-2
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               hover:bg-gray-700 hover:text-yellow-300 focus:outline-none"
                    aria-label="Previous skills"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Skills carousel */}
                <div
                    className=""
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        ref={carouselRef}
                        className="flex gap-4 transition-transform scrollbar-hide overflow-x-scroll"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${index}`}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate="visible"
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                onClick={() => handleSkillClick(index)}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * (index % itemsToShow),
                                }}
                                className={`flex-shrink-0 bg-gray-800/70 backdrop-blur-lg rounded-xl border border-gray-700 
                                    hover:shadow-lg hover:animate-pulse
                                    p-3 md:p-6 group transition-all duration-300 
                                    cursor-grab active:cursor-grabbing focus:animate-spin`}
                                style={{
                                    width: `calc(100% / ${itemsToShow})`,
                                    borderColor: hoverIndex === index ? skill.color : 'rgb(75, 85, 99)',
                                    boxShadow: hoverIndex === index ? `0 0 15px 1px ${skill.color}40` : 'none'
                                }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    {skill.isOpen === true ? (
                                        <>
                                            <motion.div
                                                className="w-auto h-auto pt-1 mb-6 flex items-center justify-center transition-all duration-300"
                                                variants={{
                                                    hidden: { opacity: 0, y: 100 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{
                                                    duration: 0.1,
                                                }}
                                            >
                                                <h3
                                                    className="font-medium text-xs md:text-sm transition-all duration-300 line-clamp-1"
                                                    style={{ color: skill.color }}
                                                >
                                                    {skill.name}
                                                </h3>
                                            </motion.div>

                                            <motion.div
                                                className="w-auto h-auto p-7 md:p-6 -mb-10 -mt-8 flex items-center justify-center transition-all duration-300"
                                                variants={{
                                                    hidden: { opacity: 0, y: 100 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                initial="hidden"
                                                animate="visible"

                                                transition={{
                                                    duration: 0.1,
                                                }}
                                            >
                                                <CircleProgress
                                                    ratio={skill.rating}
                                                    size={window.innerWidth < 768 ? 50 : 78}
                                                    activeColor={skill.color}
                                                />
                                            </motion.div>
                                        </>
                                    ) : (
                                        <>
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, y: 0 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{
                                                    duration: 0.1,
                                                }}
                                                className="size-15 rounded-full p-2 md:p-6 mb-4 flex items-center justify-center transition-all duration-300"
                                                style={{
                                                    backgroundColor: "oklch(44.6% 0.03 256.802 / .7)"
                                                }}
                                            >
                                                <div className="transition-all duration-300">
                                                    {skill.icon}
                                                </div>
                                            </motion.div>

                                            <div
                                                className="w-auto h-auto pt-3 md:-p-6 flex items-center justify-center transition-all duration-300"
                                            >
                                                <h3
                                                    className="font-medium text-xs md:text-sm transition-all duration-300 line-clamp-1"
                                                    style={{
                                                        color: hoverIndex === index ? skill.color : "white"
                                                    }}
                                                >
                                                    {skill.name}
                                                </h3>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 xl:-right-8 top-1/2 -translate-y-1/2 translate-x-4 z-10
                               bg-gray-800/80 text-yellow-400 rounded-full p-2
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               hover:bg-gray-700 hover:text-yellow-300 focus:outline-none"
                    aria-label="Next skills"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-yellow-400 w-4" : "bg-gray-600"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
