import React from 'react'
import About from '../About/About.jsx'
import Skills from '../Skills/Skills.jsx'
import Profile from "../../assets/images/profile.png"

const Page2 = () => {
  return (
    <div className='min-h-screen w-full   bg-black text-[#6D326D]'>
      <div className='flex'>
        <div className='w-1/2   h-130   '>
          <img src={Profile} alt="Sheefa Mehreen" className="w-[400px]  h-120 object-contain drop-shadow-[0_0_50px_rgba(109,50,109,0.45)] hover:scale-105 transition-all duration-500 ml-50   " />
        </div>
        <About />
      </div>
      <Skills />
    </div>
  )
}

export default Page2