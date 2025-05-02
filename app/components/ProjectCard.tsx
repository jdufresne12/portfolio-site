import { ProjectInfo } from "../home/Projects"
import Image from "next/image";

interface props {
    project: ProjectInfo;
}

export default function ProjectCard({ project }: props) {
    return (
        <>
            <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="flex h-48 w-auto relative">
                    <Image
                        src={'/MercuryCover.png'}
                        alt="Mercury Cover"
                        fill
                        className="object-cover object-[center_1%]"
                        priority
                    />
                </div>
                <div className="flex flex-col p-6">
                    <h3 className="text-xl font-bold text-black">{project.name}</h3>
                    <p className="text-gray-700">{project.description}</p>
                    <div className="grid grid-cols-3 md:grid-cols-4 justify-center items-center mr-5 mt-3 space-x-10">
                        {project.technologies.map(tech => (
                            <span key={tech} className="p-2 bg-blue-100 text-blue-800 rounded-full text-xs text-center min-w-14">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}