import React from 'react'

const Projects = () => {

  const handleGithub = () => {
    window.open(
      "https://github.com/shifa-m",
      "_blank"
    )
  }

  const handleRestraurant=()=>{
    window.open(
      "https://github.com/shifa-m/Restrautrant-MERN-Stack-project",
      "_blank"
    )
  }

  return (
    <div className="w-full px-6 md:px-10 lg:px-16 py-10 font-serif cursor-pointer">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10 lg:mt-10">

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          FEATURED PROJECTS
        </h1>

        <button
          onClick={handleGithub}
          className="bg-[#6D326D] text-white font-bold px-6 py-3 rounded-2xl hover:bg-[#814381] transition"
        >
          View All Projects
        </button>

      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

     

        <div className="bg-black shadow-[0_0_30px_#6D326D] rounded-2xl p-6 h-80 hover:scale-105 transition duration-300">
          <h1 className="text-2xl text-[#6D326D] font-bold">
            Restrautrant App
          </h1>

          <p className="text-gray-300 mt-5">
            A responsive MERN stack restrautrant application with authentication, CRUD operations, and modern UI.
          </p>

          <button onClick={handleRestraurant} className="mt-8 bg-[#6D326D] px-5 py-2 rounded-xl text-white font-semibold">
            View Project
          </button>
        </div>

       

        <div className="bg-black shadow-[0_0_30px_#6D326D] rounded-2xl p-6 h-80 hover:scale-105 transition duration-300">
          <h1 className="text-2xl text-[#6D326D] font-bold">
            Product Recommendation
          </h1>

          <p className="text-gray-300 mt-5">
            Built a recommendation platform using React, Node.js and MongoDB with a responsive interface.
          </p>

          <button onClick={handleGithub} className="mt-8 bg-[#6D326D] px-5 py-2 rounded-xl text-white font-semibold">
            View Project
          </button>
        </div>

       

        <div className="bg-black shadow-[0_0_30px_#6D326D] rounded-2xl p-6 h-80 hover:scale-105 transition duration-300">
          <h1 className="text-2xl text-[#6D326D] font-bold">
            Portfolio Website
          </h1>

          <p className="text-gray-300 mt-5">
            A modern personal portfolio built using React and Tailwind CSS with responsive design.
          </p>

          <button onClick={handleGithub} className=" cursor-pointer mt-8 bg-[#6D326D] px-5 py-2 rounded-xl text-white font-semibold">
            View Project
          </button>
        </div>

      </div>

    </div>
  )
}

export default Projects