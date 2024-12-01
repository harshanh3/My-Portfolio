import React from 'react'
import recip from "../assets/recipe.png"
import mygame from "../assets/game.png"
import myparalax from "../assets/cyber1.png"
import bmi from "../assets/bmi.png"
import wether from "../assets/weather.png"
import mycalt from "../assets/cal.png"
import myhotel from "../assets/hotel.png"

const Projects = () => {
  return (
    <>
      <section id='project' className="bg-black text-white py-20 ">
        <div className="container mx-auto flex flex-col items-center">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">MY PROJECTS</h2>
            <p className="text-gray-300">A showcase of some of the projects I've worked on.</p>
          </div>
          <div className="flex flex-wrap justify-between gap-8">
  {/* Project Card */}
  <div className="  w-80  h-60 max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      {/* Image */}
      <img
        src={recip}
        alt="Card Image"
        className="rounded-t-lg w-full h-40 object-cover group-hover:opacity-70 transition duration-300"
      />
      {/* Hover Content */}
      <div className="absolute h-60 inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">Recipe Listing App</h5>
          <p className="text-sm">Built a React application to showcase a collection of recipes with advanced functionality for listing, searching, and viewing details.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/harshanh3/Recipes_redux"
              className="text-gray-950  hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://stalwart-brioche-1a69ab.netlify.app/"
              className="text-gray-950 hover:text-blue-400"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Project Card */}
  <div className="w-92 max-w-xs  h-60 bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      <img
        src={mygame}
        alt="Card Image"
        className="rounded-t-lg  h-40 object-cover group-hover:opacity-70 transition duration-300"
      />
      <div className="absolute h-60 inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">Run and Crush Game</h5>
          <p className="text-sm">Developed an interactive game where players control a character to dodge obstacles and achieve high scores.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/harshanh3/Run-and-Crush"
              className="text-gray-950 hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://harshanh3.github.io/Run-and-Crush/"
              className="text-gray-950 hover:text-blue-400"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Project Card */}
  <div className="max-w-xs w-full h-60 bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      {/* Image */}
      <img
        src={myparalax}
        alt="Card Image"
        className="rounded-t-lg w-full h-40 object-cover group-hover:opacity-70 transition duration-300"
      />
      {/* Hover Content */}
      <div className=" h-60 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">Recipe Listing App</h5>
          <p className="text-sm">Designed and developed a React website featuring stunning parallax scrolling effects and an interactive image slider.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/harshanh3/parallax-react"
              className="text-gray-950 hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://soft-cendol-93a31c.netlify.app/"
              className="text-gray-950 hover:text-blue-400"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Project Card */}
  <div className="w-full h-60 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      {/* Image */}
      <img
        src={bmi}
        alt="Card Image"
        className="rounded-t-lg w-full h-full object-cover group-hover:opacity-70 transition duration-300"
      />
      {/* Hover Content */}
      <div className="h-60 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">BMI Calculator App</h5>
          <p className="text-sm">Designed and developed a BMI Calculator to compute and display Body Mass Index based on user input for weight and height.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/harshanh3/BMI-calculator"
              className="text-gray-950 hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://inquisitive-starship-1b0570.netlify.app/"
              className="text-gray-950 hover:text-blue-400"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Project Card */}
  <div className="w-full max-w-xs h-60 bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      {/* Image */}
      <img
        src={wether}
        alt="Card Image"
        className="rounded-t-lg w-full h-full object-cover group-hover:opacity-70 transition duration-300"
      />
      {/* Hover Content */}
      <div className="h-60 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">Weather App</h5>
          <p className="text-sm">Developed a weather application using React to provide real-time weather updates. The app includes features for searching cities, viewing current weather conditions.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/harshanh3/Weather-App"
              className="text-gray-950 hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://classy-alpaca-88e0e6.netlify.app/"
              className="text-gray-600 hover:text-black"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Project Card */}
  <div className="w-full h-60 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      {/* Image */}
      <img
        src={mycalt}
        alt="Card Image"
        className="rounded-t-lg w-full h-full object-cover group-hover:opacity-70 transition duration-300"
      />
      {/* Hover Content */}
      <div className="h-64 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">Calculator App</h5>
          <p className="text-sm">Built a simple calculator using JavaScript that performs basic arithmetic operations.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/harshanh3/calculator"
              className="text-gray-950 hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://harshanh3.github.io/calculator/"
              className="text-gray-950 hover:text-blue-400"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
 {/* Project Card */}
 <div className="w-full max-w-xs h-60 bg-white rounded-lg border border-gray-200 shadow-md group mt-8">
    <div className="relative">
      {/* Image */}
      <img
        src={myhotel}
        alt="Card Image"
        className="rounded-t-lg w-full h-full object-cover group-hover:opacity-70 transition duration-300"
      />
      {/* Hover Content */}
      <div className="h-60 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center text-white px-4">
          <h5 className="text-xl font-bold mb-2">Hotel booking </h5>
          <p className="text-sm">Developed a hotel booking platform using the MERN stack  with a focus on user functionalities.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/harshanh3/Fronend-HotelBooking"
              className="text-gray-950 hover:text-blue-400"
              aria-label="GitHub Repository"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://live-link-to-your-app"
              className="text-gray-600 hover:text-black"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-link text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>





      </div>

    </section >




    </>
  )
}

export default Projects