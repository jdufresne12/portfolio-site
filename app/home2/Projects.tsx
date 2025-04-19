
export default function Projects() {
    return (
        <section
            id="projects"
            className="h-screen w-full flex items-center justify-center transition-opacity duration-1000"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project cards here... */}
                    {/* Project Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="h-48 bg-gray-300"></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Project One</h3>
                            <p className="text-gray-700">Brief description of project one goes here.</p>
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">React</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Node.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="h-48 bg-gray-300"></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Project Two</h3>
                            <p className="text-gray-700">Brief description of project two goes here.</p>
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Next.js</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">TypeScript</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="h-48 bg-gray-300"></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Project Three</h3>
                            <p className="text-gray-700">Brief description of project three goes here.</p>
                            <div className="mt-4 flex gap-2">
                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">JavaScript</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}