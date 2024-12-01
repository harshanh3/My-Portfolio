import React from 'react'
import myimg from "../assets/logo32.png"



const Home = () => {
    return (
        <>
            <div className="bg-black text-white min-h-screen flex flex-col">
                <header className="flex justify-between items-center px-10 py-4">
                    <div className="flex items-center space-x-2">
                        <img style={{ width: '80px' }} src={myimg} alt="Logo" />

                    </div>
                    <nav className="space-x-6 text-lg font-medium">
                      <a  href='/' className="hover:text-pink-400">Home</a>  
                        <a href="#about" className="hover:text-pink-400">About</a>
                        <a href="#skills" className="hover:text-pink-400">Skills</a>
                        <a href="#project" className="hover:text-pink-400">Projects</a>
                        <a href="#contact" className="hover:text-pink-400">Contact</a>
                    </nav>
                </header>

                <main className="flex-grow flex flex-col md:flex-row justify-center items-center px-10">
                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold">
                            HI I'M <br />
                            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                                HARSHAN P
                            </span>
                        </h2>
                        <p className="mt-4 text-xl">
                            I'M A :{' '}
                            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400">
                            MERN Stack Developer
                            </span>
                        </p>
                        <p className="mt-4">
                        I am a passionate MERN Stack Developer keep on contributing and growing in a dynamic environment. With expertise in React, Node.js, HTML, CSS, JavaScript, and Git, I thrive on teamwork and continuous learning. My experience includes hands-on projects and an ongoing internship where I have honed my skills in responsive design and cross-browser compatibility.
                        </p>
                        <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                            <a href="https://www.instagram.com/?__pwa=1" className="bg-pink-500 w-12 h-12 flex items-center justify-center  rounded-full hover:bg-blue-800">
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harshan002/"
                                className="bg-purple-600 w-12 h-12 flex items-center justify-center rounded-full hover:bg-pink-500"
                            >
                                <i className="fab fa-linkedin-in text-white text-lg"></i>
                            </a>
                            <a href="https://github.com/harshanh3" className="bg-pink-500 w-12 h-12 flex items-center justify-center  rounded-full hover:bg-purple-600">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                        <div className="bg-black p-4 rounded-lg shadow-lg">
                            <img style={{ width: "450px", background: "dark" }}
                                src="https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0"
                                alt="Programming"
                                className="w-3/4"
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home