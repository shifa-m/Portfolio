import React from 'react'
import { Link } from 'react-scroll';
import RightCard from '../Card/RightCard.jsx';
import { ChevronRight } from 'lucide-react';
import { Menu, X } from "lucide-react";
import { useState } from 'react';





const Header = () => {

            const [open, setOpen] = useState(false)


            const handleTalk = () => {
                        window.open(
                                    "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
                                    "_blank"
                        )
            }


            return (
                        <div className=' w-full bg-black text-white font-serif '>
                                    <div className='h-20  flex  text-xl text-white p-2 ml-3 pt-5'>
                                                <h1 className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-sm md:text-2xl lg:text-3xl flex items-center justify-center  rounded-full  text-white font-bold italic'>SM</h1>
                                                <h1 className='text-xl mr-10  ml-5 md:text-2xl md:mr-15 md:ml-10 lg:text-4xl lg:mr-20 lg:ml-15 font-bold font-serif p-2 '>Sheefa Mehreen</h1>
                                                <div className='hidden lg:flex items-center gap-12 ml-40 text-white font-bold md:gap-16 md:ml-50 lg:gap-20 lg:ml-60 font-serif'>
                                                            <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                                                            <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
                                                            <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
                                                            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
                                                            <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
                                                            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
                                                            <button onClick={handleTalk} className='bg-[#6D326D] h-15 w-45  text-amber-50 border-0 p-4 rounded-4xl  font-bold text-xl flex'>Let's Talk<ChevronRight className='ml-2  ' size={30} />  </button>
                                                </div>
                                                <div className='lg:hidden cursor-pointer '
                                                            onClick={() => setOpen(!open)}
                                                >
                                                            {open ? <X size={30} /> : <Menu size={30} />
                                                            }
                                                            {
                                                                        open && (
                                                                                    <div className='lg:hidden flex flex-col bg-black px-6 py-5 gap-6 text-lg font-semibold'>
                                                                                                <Link to="home" smooth={true} duration={500} onClick={() => setOpen(flase)} className="cursor-pointer">Home</Link>
                                                                                                <Link to="about" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">About</Link>
                                                                                                <Link to="skills" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Skills</Link>
                                                                                                <Link to="projects" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Projects</Link>
                                                                                                <Link to="experience" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Experience</Link>
                                                                                                <Link to="contact" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Contact</Link>
                                                                                                <button
                                                                                                            onClick={handleTalk}
                                                                                                            className="bg-[#6D326D] py-3 rounded-xl flex justify-center items-center font-bold"
                                                                                                >
                                                                                                            Let's Talk
                                                                                                            <ChevronRight className="ml-2" />
                                                                                                </button>

                                                                                    </div>
                                                                        )
                                                            }
                                                </div>
                                    </div>
                                    <div className='flex w-full'>
                                                <RightCard />
                                    </div>
                        </div>
            )
}

export default Header
