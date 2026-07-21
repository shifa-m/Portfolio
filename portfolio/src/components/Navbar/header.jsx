import React from 'react'
import { Link } from 'react-scroll';
import RightCard from '../Card/RightCard.jsx';
import { ChevronRight } from 'lucide-react';





const Header = () => {

            const handleTalk=()=>{
                        window.open(
                                    "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
                                    "_blank"
                        )
            }

            
            return (
                        <div className=' w-full bg-black text-white'>

                                    <div className='h-20  flex  text-2xl text-white p-2 ml-3'>
                                                <h1 className='bg-[#6D326D] rounded-full h-10 w-10 p-1 text-white '>SM</h1>
                                                <h1 className='text-4xl mr-20 ml-10'>Sheefa Mehreen</h1>
                                                <div className='flex items-center gap-20 ml-60 text-white font-bold'>
                                                            <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                                                            <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
                                                            <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
                                                            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
                                                            <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
                                                            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
                                                </div>
                                                <button onClick={handleTalk} className='bg-[#6D326D] text-amber-50 border-0 p-4 rounded-2xl ml-30 font-bold text-xl flex'>Let's Talk<ChevronRight className='ml-2  ' size={30} />  </button>
                                    </div>
                                   <div className='flex w-full'>
                                    <RightCard/>
                                   </div>
                                    </div>
                                    
                                   


                       

            )
}

export default Header
