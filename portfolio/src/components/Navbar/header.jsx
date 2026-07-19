import React from 'react'


import RightCard from '../Card/RightCard.jsx';



const Header = () => {
            return (
                        <div className='min-h-screen w-full bg-black'>

                                    <div className='h-20  flex  text-2xl text-white p-2 ml-3'>
                                                <h1 className='bg-[#6D326D] rounded-full h-10 w-10 p-1 text-white '>SM</h1>
                                                <h1 className='text-4xl mr-20 ml-10'>Sheefa Mehreen</h1>
                                                <div className='flex items-center gap-20 ml-60 text-white font-bold'>
                                                            <h2>Home</h2>
                                                            <h2>About</h2>
                                                            <h2>Skills</h2>
                                                            <h2>Projects</h2>
                                                            <h2>Experience</h2>
                                                            <h2>Contact</h2>
                                                </div>
                                                <button className='bg-[#6D326D] text-amber-50 border-0 p-4 rounded-2xl ml-30 font-bold text-xl'>Let's Talk icon</button>
                                    </div>
                                   
                                   <div className='flex w-full'>
                                    <RightCard/>
                                   </div>
                                    </div>
                                    
                                   


                       

            )
}

export default Header
