import React from 'react'

const Contact = () => {
    return (
        <>
            <>
                <section id='contact' className="bg-gray-900 text-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">CONTACT ME</h2>
                            <p className="text-gray-300">
                                Got a project in mind or just want to say hi? Feel free to reach out!
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="w-full max-w-md text-center mt-8 md:mt-0">
                                <p className="text-lg font-medium mb-4">Connect with me on:</p>
                                <div className="flex justify-center space-x-6">
                                    <a
                                        href="https://github.com/harshanh3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-2xl hover:text-blue-500 transition duration-300"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/harshan002/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-2xl hover:text-blue-500 transition duration-300"
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="mailto:harshanh60@gmail.com"
                                        className="text-white text-2xl hover:text-blue-500 transition duration-300"
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>
                                    <div className="fixed bottom-6 right-6">
                                        <button
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                            className="bg-blue-600 text-white py-3 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                                            title="Scroll to Top"
                                        >
                                            <i className="fa-solid fa-arrow-up text-xl"></i>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </section>
            </>


        </>
    )
}

export default Contact