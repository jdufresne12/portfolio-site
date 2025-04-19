export default function Contact() {
    return (
        <section
            id="contact"
            className="h-screen w-full text-white flex items-center justify-center transition-opacity duration-1000"
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
                <div className="bg-gray-800 p-8 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-gray-700 mr-3"></span>
                                    <span>your.email@example.com</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-gray-700 mr-3"></span>
                                    <span>Location: City, Country</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-gray-700 mr-3"></span>
                                    <span>@yourusername</span>
                                </li>
                            </ul>
                            <div className="mt-8 flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"></a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                ></textarea>
                                <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}