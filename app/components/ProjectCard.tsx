import { ProjectInfo } from "../sections/Projects"
import Image from "next/image";

interface props {
    project: ProjectInfo;
}

export default function ProjectCard({ project }: props) {
    return (
        <>
            <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="w-full aspect-[3/2] relative overflow-hidden">
                    <Image
                        src={project.images}
                        alt={project.images}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        quality={100}
                        priority
                    />
                </div>
                <div className="flex flex-col p-6 flex-grow">
                    <h3 className="text-xl font-bold text-black transition-colors duration-300 hover:text-blue-600">{project.name}</h3>
                    <p className="text-gray-700 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs whitespace-nowrap transition-all duration-300 hover:bg-blue-200 hover:scale-105">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}