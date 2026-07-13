import React from 'react'
import { FolderGit2 } from 'lucide-react';
import { CircleFadingPlus } from 'lucide-react';
import { Image } from 'lucide-react';
import { User } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Download } from 'lucide-react';


const Header = () => {
            return (
                        <div className='h-full w-full'>

                                    <div className='h-20 bg-white flex  text-2xl text-blue-400  p-2 ml-3'>
                                                <h1 className='bg-blue-300 rounded-full h-10 w-10 p-1 text-white '>SM</h1>
                                                <h1 className='text-4xl mr-20 ml-10'>Sheefa Mehreen</h1>
                                                <div className='flex items-center gap-20 ml-60'>
                                                            <h2>Home</h2>
                                                            <h2>About</h2>
                                                            <h2>Skills</h2>
                                                            <h2>Projects</h2>
                                                            <h2>Experience</h2>
                                                            <h2>Contact</h2>
                                                </div>
                                                <button className='bg-blue-300 text-amber-50 border-0 p-2 rounded-2xl ml-30'>Let's Talk icon</button>
                                    </div>
                                    <div className='flex'>
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
                                    <img src="" alt="" srcset="" />
                                    
                                    </div>
                                    </div>
                                    
                                   


                        </div>

            )
}

export default Header
