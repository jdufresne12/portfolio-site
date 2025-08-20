
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { ProjectInfo } from "../data/projectData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    project: ProjectInfo;
}

export default function ProjectCard({ project }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            {/* Image Carousel */}
            <div className="w-full aspect-[3/2] relative overflow-hidden group">
                <Image
                    src={project.images[currentIndex]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    quality={100}
                    priority
                />

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                    <>
                        {/* Left Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
                        >
                            <FaChevronLeft size={18} />
                        </button>

                        {/* Right Button */}
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
                        >
                            <FaChevronRight size={18} />
                        </button>
                    </>
                )}

                {/* Dots Indicator */}
                {project.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2.5 h-2.5 rounded-full ${idx === currentIndex ? "bg-white" : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="flex flex-col p-6 flex-grow">
                {/* Project Name + Links */}
                <h3 className="flex flex-row font-bold text-black transition-colors duration-300 justify-between items-center">
                    <span className="text-xl">{project.name} </span>
                    <div className="flex flex-row gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:scale-[1.25] cursor-pointer"
                            >
                                <FaGithub
                                    size={25}
                                    className="text-black hover:text-gray-400 transition"
                                />
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:scale-[1.25] cursor-pointer"
                            >
                                <FaLink
                                    size={25}
                                    className="text-black hover:text-gray-400 transition"
                                />
                            </a>
                        )}
                    </div>
                </h3>

                {/* Description */}
                <p className="text-gray-700 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs whitespace-nowrap transition-all duration-300 hover:bg-blue-200 hover:scale-105"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
