import React from 'react'


import RightCard from '../Card/RightCard.jsx';



const Header = () => {
            return (
                        <div className='min-h-screen w-full '>

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
                                   
                                   <div className='flex w-full'>
                                    <RightCard/>
                                   </div>
                                    </div>
                                    
                                   


                       

            )
}

export default Header
