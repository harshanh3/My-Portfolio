import React from 'react'
import cv from "../assets/hp1.pdf"

const About = () => {
    return (
        <>
            <h1 className="text-center text-5xl font-bold">About Me</h1>

            <section id="about" className="bg-black text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://i.pinimg.com/736x/4b/bc/5c/4bbc5c7f9365f56b36f3806bb40a1b9a.jpg"
                            alt="Developer"
                            className="w-3/4 object-cover shadow-lg rounded-lg"
                        />
                    </div>

                    {/* Right Section: Content */}
                    <div className="md:w-1/2 px-6 mt-10 md:mt-0">
                        <h2 className="text-4xl font-bold mb-4">
                            MY NAME IS <span className="text-yellow-400">HARSHAN P </span>
                        </h2>
                        <p className="text-gray-300 mb-6 mt-10">
                            I am  a passionate MERN Stack Developer, eager to contribute and grow in a dynamic environment. With expertise in React, Node.js, HTML, CSS, JavaScript, and Git, I am always focused on teamwork, continuous learning, and building impactful applications.
                        </p>
                        <p className="text-gray-300 mb-6">
                            My experience includes hands-on projects as well as an ongoing internship, where I have refined my skills in responsive design, cross-browser compatibility, and developing efficient, user-friendly interfaces. As a fast learner, I thrive on challenges and have a strong foundation in both front-end and back-end technologies.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Currently, I am honing my skills as a MERN Stack Developer at Luminar Technolab, where I actively contribute to team projects, implement design solutions, and work towards ensuring seamless user experiences across various platforms.
                        </p>

                      
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-yellow-400" >Education</h4>
                            <div className="flex items-center">
                                <p> <span>   <i class="fa-solid fa-circle-dot mr-2"></i></span> BSc Computer Science, MES Kalladi College Mannarkad 
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p> <span>   <i class="fa-solid fa-circle-dot mr-2"></i></span> Higher Secondary, GVHSS Pathiripala </p>
                            </div>
                            <div className="flex items-center">
                                <p><span>   <i class="fa-solid fa-circle-dot mr-2"></i></span> High School, GVHSS Pathiripala</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-10">
                            <a  href={cv} 
        download="Harshan-CV"  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                                DOWNLOAD CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About