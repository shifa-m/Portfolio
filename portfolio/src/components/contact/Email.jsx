import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { FaLinkedin ,FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Email = () => {

  const handleMessage=()=>{
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
      "_blank"
    )
  }


  const handleLinkedin=()=>{
    window.open(
      "https://www.linkedin.com/in/sheefa-mehreen-3634a1278/",
      "_blank"
    )
  }

  const handleGithub=()=>{
    window.open(
      "https://github.com/shifa-m",
      "_blank"
    )
  }
  

  return (
    <div>
            
                    <div className="w-1/2  h-100  m-40">
                      <h1 className='text-xl'>Start a Project</h1>
                      <h1 className='text-6xl mt-5'>Let's Build </h1>
                      <h1 className='text-8xl text-[#6D326D]'>Something Great .</h1>
                      <h1 className='text-xl mt-10 flex mr-2'>shifamahreen786@gmail.com <div className='h-8 w-8 bg-[#6D326D] rounded-full ml-2 pl-1 pt-1'><ArrowUpRight  onClick={handleMessage}/></div></h1>
                      <div className='flex gap-10 mt-5'>
                        <FaLinkedin  onClick={handleLinkedin} size={25}
                         className="cursor-pointer hover:text-[#6D326D] transition"/>
                      <FaGithub onClick={handleGithub} size={25}
                       className="cursor-pointer hover:text-[#6D326D] transition"/>
                      < MdEmail onClick={handleMessage} size={27}
                       className="cursor-pointer hover:text-[#6D326D] transition"/>
                      </div>
                      
                    </div>
                    </div>
    
  )
}

export default Email