import React from 'react'

const Skills = () => {
  return (
    <>
    
    <section id='skills' className="bg-black text-white py-20">
  <div className="container mx-auto flex flex-col items-center">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">
        MY SKILLS
      </h2>
      <p className="text-gray-300">
        A summary of the technologies and skills I've mastered in my development career.
      </p>
    </div>

    {/* Skills List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
          alt="HTML5"
          className="w-16 h-16 mb-4 bg-neutral-50"
        />
        <h3 className="text-2xl font-semibold mb-2">HTML5</h3>
        <p className="text-gray-300 text-center">
          Skilled in building responsive, semantic, and SEO-friendly webpages using HTML5.
        </p>
      </div>

      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://banner2.cleanpng.com/20180421/vdq/avee3ca8b.webp"
          alt="CSS3"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">CSS3</h3>
        <p className="text-gray-300 text-center">
          Proficient in creating visually appealing and responsive designs with CSS3.
        </p>
      </div>
      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
          alt="Git"
          className="w-16 h-12 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Bootstrap</h3>
        <p className="text-gray-300 text-center">
        Proficient in utilizing Bootstrap to craft fast, responsive websites with the help of its extensive library of predefined classes and styles
        </p>
      </div>
      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgHWDyjwN9qZsPChFzc5PRfOOOqbfgXqR3w&s"
          alt=""
          className="w-16 h-14 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Tailwind CSS</h3>
        <p className="text-gray-300 text-center">
        Proficient in creating utility-first designs with Tailwind CSS to build responsive and modern UIs.
        </p>
      </div>

      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://icon2.cleanpng.com/20190129/jba/kisspng-javascript-web-applications-scalable-vector-graphi-1713908433870.webp"
          alt="JavaScript"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">JavaScript</h3>
        <p className="text-gray-300 text-center">
          Strong knowledge of JavaScript for building dynamic and interactive web applications.
        </p>
      </div>

      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-421x512-6l3sw2sy.png"
          alt="React"
          className="w-12 h-14 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">React</h3>
        <p className="text-gray-300 text-center">
          Expertise in building single-page applications and UI components using React.
        </p>
      </div>

      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
          alt="Node.js"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Node.js</h3>
        <p className="text-gray-300 text-center">
          Skilled in backend development using Node.js and Express to build REST APIs.
        </p>
      </div>

      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDN7Vm-3XJ2BiV3GoEmAc3Y68Q0LTFejjwg&s"
          alt="MongoDB"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">MongoDB</h3>
        <p className="text-gray-300 text-center">
          Experience in designing and working with NoSQL databases like MongoDB.
        </p>
      </div>

      {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          alt="Git"
          className="w-16 h-16 mb-4 "
        />
        <h3 className="text-2xl font-semibold mb-2">Git</h3>
        <p className="text-gray-300 text-center">
          Proficient in version control using Git for managing code and collaborating with teams.
        </p>
      </div>

     {/* Skill Item */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src="https://camo.githubusercontent.com/2d207b0294721c57203fb9451bd14ef5ec0cf391790e4a2499cac1e7ed3bb9c9/68747470733a2f2f6d75692e636f6d2f7374617469632f6c6f676f2e737667"
          alt="Git"
          className="w-16 h-16 mb-4 "
        />
        <h3 className="text-2xl font-semibold mb-2">UI/UX</h3>
        <p className="text-gray-300 text-center">
        Proficient in creating seamless user experiences through research, wireframing, prototyping, and user testing.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Skills