import React from 'react'
import Profile from "../assets/images/profile.jpg"

const Page2 = () => {
  return (
    <div className='min-h-screen w-full   '>
   <div className='flex'>
<div className='w-1/2   h-130   '>
                        <img src={Profile} alt="Sheefa Mehreen" className='h-90 m-20 ml-50' />

            </div>
            <div className='w-1/2  h-130'>
            <button className='bg-gray-500 h-10 w-30 m-10 rounded-2xl '>About me</button>
            <div className='ml-10 text-2xl'>
                         <h1>I'm a Computer Science & Engg Graduate</h1>
            <h1>I'm passionate about turning ideas into real-world applications <br />using MERN Stack.I love clean code , modern UI/UX , and <br/>building projects that make an impact.</h1>

            </div>
           
<div className='flex gap-4 m-10 mt-15 '>
            <h1 className='h-20 w-40  bg-gray-500 flex justify-center items-center rounded-2xl text-white '>1+ Year Learning</h1>
            <h1  className='h-20 w-40  bg-gray-500 flex justify-center items-center rounded-2xl text-white '>5+ Projects</h1>
            <h1  className='h-20 w-40  bg-gray-500 flex justify-center items-center rounded-2xl text-white '>3 Internships</h1>
            <h1  className='h-20 w-40  bg-gray-500 flex justify-center items-center rounded-2xl text-white '>100% dedication</h1>
</div>
<div>
            <button className='ml-10 bg-gray-500 h-15 w-50 text-white  rounded-2xl'>Know more about me</button>
</div>
   </div>
            
            </div>
            <div>
                        <button className='ml-15 mb-10'>Skills & Technologies *</button>
                        <div className='flex justify-around  '>
                                    <h1 className='h-50 w-60 bg-gray-400 rounded-2xl pl-10'>Frontend</h1>
                                     <h1 className='h-50 w-60 bg-gray-400 rounded-2xl pl-10'>Backend</h1>
                                      <h1 className='h-50 w-60 bg-gray-400 rounded-2xl pl-10'>Database</h1>
                                       <h1 className='h-50 w-60 bg-gray-400 rounded-2xl pl-10'>Tools & Others</h1>
                        </div>
            </div>
           

    </div>
  )
}

export default Page2