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
                        <div className='min-h-screen w-full bg-black text-white font-serif '>
                                    <div className="h-20 flex items-center justify-between px-5 py-4 ">
                                                <h1 className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-sm md:text-2xl lg:text-3xl flex items-center justify-center  rounded-full  text-white font-bold italic'>SM</h1>
                                           <h1 className="text-xl md:text-2xl lg:text-4xl font-bold font-serif ml-3">
    Sheefa Mehreen
</h1>
                                                <div className='hidden lg:flex items-center gap-12 ml-40 text-white font-bold md:gap-16 md:ml-50 lg:gap-23 lg:ml-60 font-serif fixed '>
                                                            <Link to="home" smooth={true} duration={500} className="cursor-pointer   transition-transform duration-300 hover:scale-120">Home</Link>
                                                            <Link to="about" smooth={true} duration={500} className="cursor-pointer transition-transform duration-300 hover:scale-120 ">About</Link>
                                                            <Link to="process" smooth={true} duration={500} className="cursor-pointer transition-transform duration-300 hover:scale-120">Process</Link>
                                                            <Link to="projects" smooth={true} duration={500} className="cursor-pointer transition-transform duration-300 hover:scale-120">Projects</Link>
                                                            <Link to="experience" smooth={true} duration={500} className="cursor-pointer transition-transform duration-300 hover:scale-120">Experience</Link>
                                                            <Link to="contact" smooth={true} duration={500} className="cursor-pointer transition-transform duration-300 hover:scale-120">Contact</Link>
                                                            <button onClick={handleTalk} className='flex rounded-full border border-[#6D326D] bg-[#6D326D]/20 px-10 py-2  text-sm font-semibold tracking-wide text-[#d98dd9] cursor-pointer transition-transform duration-300 hover:scale-105'>Let's Talk<ChevronRight className='ml-2' size={30} /> </button>
                                                </div>
                                                <div className='lg:hidden ml-auto cursor-pointer '
                                                            onClick={() => setOpen(!open)}
                                                >
                                                            {open ? <X size={30} /> : <Menu size={30} />
                                                            }
                                                            {
                                                                        open && (
                                                                                    
                                                                                    <div className="absolute top-20 left-0 w-full bg-black flex flex-col px-6 py-5 gap-6 z-50">
                                                                                                <Link to="home" smooth={true} duration={500} onClick={() => setOpen(flase)} className="cursor-pointer">Home</Link>
                                                                                                <Link to="about" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">About</Link>
                                                                                                <Link to="process" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Process</Link>
                                                                                                <Link to="projects" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Projects</Link>
                                                                                                <Link to="experience" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Experience</Link>
                                                                                                <Link to="contact" smooth={true} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Contact</Link>
                                                                                                <button
                                                                                                            onClick={handleTalk}
                                                                                                            className="flex justify-center rounded-full border border-[#6D326D] bg-[#6D326D]/20 px-6 py-2 text-sm font-semibold tracking-wide text-[#d98dd9] cursor-pointer transition-transform duration-300 hover:scale-105">
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
