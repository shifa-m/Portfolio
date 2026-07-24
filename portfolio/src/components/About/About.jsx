import React from 'react'
import Skills from '../Skills/Skills'

const About = () => {
  return (
    <div className="w-full mt-10 px-6 md:px-10 lg:px-20 font-serif">

      <div className="flex flex-col lg:flex-row items-center gap-10">

       
        <div className="w-full lg:w-1/2 text-white">

          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#6D326D] font-bold">
            Who Am I?
          </h1>

          <h2 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-bold italic">
            I'm Sheefa Mehreen,
          </h2>

          <p className="mt-6 text-base md:text-lg lg:text-xl leading-8 text-gray-300">
            A Full-Stack Developer who enjoys turning ideas into responsive
            and user-friendly web applications. I believe in writing clean
            code, continuously learning, and building solutions that make an
            impact.
          </p>

        </div>

        <div className="w-full lg:w-1/2">
          <Skills />
        </div>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        <div className="shadow-[0_0_30px_#6D326D] rounded-2xl text-white p-6 min-h-[220px]">
          <h1 className="text-3xl text-[#6D326D] font-bold">1+</h1>
          <h2 className="text-xl font-bold mt-2">Year Learning</h2>
          <p className="mt-2">
            Learning, Building & Collaborating
          </p>
        </div>

        <div className="shadow-[0_0_30px_#6D326D] rounded-2xl text-white p-6 min-h-[220px]">
          <h1 className="text-3xl text-[#6D326D] font-bold">10+</h1>
          <h2 className="text-xl font-bold mt-2">Websites</h2>
          <p className="mt-2">
            Modern & Fast Responsive Designs
          </p>
        </div>

        <div className="shadow-[0_0_30px_#6D326D] rounded-2xl text-white p-6 min-h-[220px]">
          <h1 className="text-3xl text-[#6D326D] font-bold">3+</h1>
          <h2 className="text-xl font-bold mt-2">
            Internships & Volunteering
          </h2>
          <p className="mt-2">
            Full-Stack Developer, Software Developer & IoT
          </p>
        </div>

        <div className="shadow-[0_0_30px_#6D326D] rounded-2xl text-white p-6 min-h-[220px]">
          <h1 className="text-3xl text-[#6D326D] font-bold">100%</h1>
          <h2 className="text-xl font-bold mt-2">Dedication</h2>
          <p className="mt-2">
            Consistent Learning & Collaboration
          </p>
        </div>

      </div>

    </div>
  )
}

export default About