import Image from 'next/image';

export default function AboutMe() {
    return (
        <section
            id="about"
            className="h-screen w-full flex snap-start items-center justify-center transition-opacity duration-1000"
        >
            <div className="flex max-w-5xl bg-gray-800 items-center justify-center">
                {/* Small Screens */}
                <div className='md:hidden'>

                </div>

                {/* Other Screens */}
                <div className='mr-15 w-auto bg-white sm:hidden md:block'>
                    <Image
                        src="/heroImage.jpg"
                        alt="John Dufresne - Hero Image"
                        width={200}
                        height={200}
                        className='object-contain'
                        priority
                    />
                </div>
                <div className="md:w-1/2 lg:w-3/5">
                    <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-yellow-400">About Me</h2>
                    <div className="text-white font-serif space-y-4">
                        <p>
                            Hey I'm John Dufresne! Growing up in Poughkeepsie, New York, I was always fascinated by building and learning, from disassembling and reassembling things around the house, to fixing cars in my dad's garage.
                            This hands-on curiosity eventually led me to a programming class in high school, where I discovered a new way to build and problem-solve.
                        </p>
                        <p>
                            I went on to study Computer Science at UCF, diving mainly into full-stack development while also exploring cybersecurity and AI. While at UCF, I led a team developing a cross-platform application for U.S.
                            Army Reservists—managing both frontend and backend systems and implementing CI/CD pipelines to streamline our workflow. This experience reinforced my approach to software: balancing development, automation, and teamwork to build scalable solutions.
                        </p>
                        <p>
                            At my core, I love solving problems, learning new things, and building systems that just work. Whether it's fixing a car, debugging a tricky issue, or architecting a complex application, I'm always up for the challenge.
                            Currently, I'm seeking a full-stack developer position where I can leverage my technical skills and collaborative approach to create impactful solutions.
                        </p>
                    </div>
                </div>
            </div>
            <section
                id="skills"
                className="h-screen w-full flex items-center justify-center transition-opacity duration-1000"
            >
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Skill items */}
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git', 'Figma'].map((skill) => (
                            <div key={skill} className="p-4 bg-gray-100 rounded-lg flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    {/* Skill icon can go here */}
                                </div>
                                <h3 className="font-medium">{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    )
}