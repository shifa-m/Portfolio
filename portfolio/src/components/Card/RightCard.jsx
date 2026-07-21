import React from 'react'
import { ArrowRight,Download, User ,Image,CircleFadingPlus,FolderGit2 } from 'lucide-react';
import Profile from "../../assets/images/profile.png";
import Resume from "../../assets/resume/resumeMERN.pdf"



const RightCard = () => {

  const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.setAttribute("download", "Sheefa_Mehreen_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const handleGithub=()=>{
                        window.open(
                                    "https://github.com/shifa-m",
                                    "_blank"
                        )
            };
const handleInsta=()=>{
  window.open(
    "https://www.instagram.com/_hushed.s/",
    "_blank"
  )
};

const handleEmail=()=>{
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
    "_blank"
  )
}

  return (
    
    <div className='flex w-full '>
                                                <div className=' w-1/2  m-5 ml-10 mt-30 '>
                                                <span className=' bg-[#6D326D] text-white font-bold p-4 pl-9 pr-9  rounded-2xl '>FULL-STACK DEVELOPER</span>
                                                <h1 className='text-5xl mt-12 text-white'>Hi , I'm</h1>
                                                <h1 className='text-7xl mt-8 text-[#6D326D]'>Sheefa Mehreen</h1>
                                                <h1 className='text-5xl mt-8 text-white'>Full Stack MERN Developer</h1>
                                                <h1 className='text-2xl mt-8 text-white'>I build scalable ,responsive and user-friendly web application that solve real-world problems.</h1>
                                                <div className='flex gap-20'>
                                                            <button className='bg-[#6D326D] text-white font-bold p-3 m-3 rounded-2xl mt-15 ml-18  flex'>View My Work  <h1><ArrowRight /></h1></button>
                                                            <button onClick={handleResumeDownload} className='bg-[#6D326D] text-white font-bold p-3 m-3 mt-15 rounded-2xl flex ml-6 gap-2 w-50'>Download Resume <Download /> </button>
                                                </div>

                                                <div className='flex mt-10 gap-20'>
                                                            <FolderGit2 onClick={handleGithub} className='' size={30} strokeWidth={2.50} />
                                                            <CircleFadingPlus onClick={handleInsta} size={30} strokeWidth={2.50} />
                                                            <Image size={30} strokeWidth={2.50} />

                                                            <User onClick={handleEmail} size={30} strokeWidth={2.50} />
                                                </div>
                                                


                                    </div>
                                  <div className='w-1/2 '>
                                                                                                <img src={Profile} alt="Sheefa Mehreen" className='w-[450px] object-contain drop-shadow-[0_0_50px_rgba(109,50,109,0.45)] hover:scale-105 transition-all duration-500 ml-40  mt-15' />
                                                                                                
                                                                                                </div>
                                    </div>
  )
}

export default RightCard

