import React from 'react'
import About from '../About/About.jsx'
import Skills from '../Skills/Skills.jsx'
import Profile from "../../assets/images/profile.jpg"

const Page2 = () => {
  return (
    <div className='min-h-screen w-full   bg-black text-[#6D326D]'>
      <div className='flex'>
        <div className='w-1/2   h-130   '>
          <img src={Profile} alt="Sheefa Mehreen" className='h-90 m-20 ml-50' />
        </div>
        <About />
      </div>
      <Skills />
    </div>
  )
}

export default Page2