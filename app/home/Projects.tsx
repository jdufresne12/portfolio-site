import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export interface ProjectInfo {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    images: string;
}

export default function Projects() {
    const mercury: ProjectInfo = {
        id: "One",
        name: "Army Reserve Mercury",
        description: "Web and Mobile app dedicated to making the daily lives of Army Reservists easier",
        technologies: ["React", "React-Native", "Python", "Jenkins", "AWS", "Jest"],
        images: "ProfileImage.jpg"
    }

    return (
        <section id="projects" className="w-full flex flex-col items-center justify-center mt-40">
            <div className="max-w-6xl w-full px-4 py-16 z-10">
                {/* My Projects */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold inline-block relative border-b-yellow-400 border-b-2">
                        <span className="text-yellow-400">My</span>
                        Projects
                    </h2>
                </div>

                <ProjectCard project={mercury} />
            </div>
        </section>

    )
}