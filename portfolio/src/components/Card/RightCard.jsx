import React from 'react'
import { ArrowRight,Download, User ,Image,CircleFadingPlus,FolderGit2 } from 'lucide-react';
import Profile from "../../assets/images/profile.jpg";



const RightCard = () => {
  return (
    <div className='flex w-full '>
                                                <div className=' w-1/2  m-5 ml-10 mt-30 '>
                                                <span className=' bg-blue-400 p-4 pl-9 pr-9  rounded-2xl '>FULL-STACK DEVELOPER</span>
                                                <h1 className='text-5xl mt-12'>Hi , I'm</h1>
                                                <h1 className='text-7xl mt-8'>Sheefa Mehreen</h1>
                                                <h1 className='text-5xl mt-8'>Full Stack MERN Developer</h1>
                                                <h1 className='text-2xl mt-8'>I build scalable ,responsive and user-friendly web application that solve real-world problems.</h1>
                                                <div className='flex gap-20'>
                                                            <button className='bg-blue-400 p-3 m-3 rounded-2xl mt-15 ml-18  flex'>View My Work  <h1><ArrowRight /></h1></button>
                                                            <button className='bg-blue-400 p-2 m-3 mt-15 rounded-2xl flex ml-6 gap-2'>Download Resume <Download /> </button>
                                                </div>

                                                <div className='flex mt-10 gap-20'>
                                                            <FolderGit2 className='' size={30} strokeWidth={2.50} />
                                                            <CircleFadingPlus size={30} strokeWidth={2.50} />
                                                            <Image size={30} strokeWidth={2.50} />

                                                            <User size={30} strokeWidth={2.50} />
                                                </div>
                                                


                                    </div>
                                  <div className='w-1/2 '>
                                                                                                <img src={Profile} alt="Sheefa Mehreen" className=' h-190 w-190 rounded-full' />
                                                                                                
                                                                                                </div>
                                    </div>
  )
}

export default RightCard