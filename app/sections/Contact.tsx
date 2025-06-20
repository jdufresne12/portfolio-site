import { FaHome, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="h-auto w-full text-white flex items-center justify-center my-20"
        >
            <div className='mt-5' />
            <div className="w-fit mx-auto px-4 z-50">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold inline-block relative border-b-yellow-400 border-b-2">
                        Get
                        <span className="text-yellow-400"> In Touch</span>
                    </h2>
                </div>
                <div className="min-w-100 bg-gray-800 p-8 rounded-4xl">
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center text-center">
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mr-3">
                                        <FaHome size={15} />
                                    </span>
                                    <span>Hopewell Junction, New York</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mr-3">
                                        <FaEnvelope size={15} />
                                    </span>
                                    <span>Jdufresne135@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mr-3">
                                        <FaPhone size={15} />
                                    </span>
                                    <span>1 (845) 797-5694</span>
                                </li>
                            </ul>
                            <div className="mt-8 flex gap-4">
                                <a href="https://github.com/jdufresne12" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-115 cursor-pointer">
                                    <FaGithub size={30} className="text-white hover:text-gray-400 transition" />
                                </a>
                                <a href="https://www.linkedin.com/in/john-dufresne-abb631264/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-115 cursor-pointer">
                                    <FaLinkedin size={30} className="text-[#0077B5] hover:text-blue-400 transition" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}