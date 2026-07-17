import React from 'react'
import Profile from "../assets/images/profile.jpg"

const Page2 = () => {
  return (
    <div className='min-h-screen w-full   bg-black text-[#6D326D]'>
   <div className='flex'>
<div className='w-1/2   h-130   '>
                        <img src={Profile} alt="Sheefa Mehreen" className='h-90 m-20 ml-50' />

            </div>
            <div className='w-1/2  h-130'>
            <button className='bg-[#6D326D] h-10 w-30 m-10 rounded-2xl text-white font-bold '>About me</button>
            <div className='ml-10 text-2xl text-white'>
                         <h1>I'm a Computer Science & Engg Graduate</h1>
            <h1>I'm passionate about turning ideas into real-world applications <br />using MERN Stack.I love clean code , modern UI/UX , and <br/>building projects that make an impact.</h1>

            </div>
           
<div className='flex gap-4 m-10 mt-15 font-bold '>
            <h1 className='h-20 w-40  bg-[#6D326D] flex justify-center items-center rounded-2xl text-white '>1+ Year Learning</h1>
            <h1  className='h-20 w-40  bg-[#6D326D] flex justify-center items-center rounded-2xl text-white '>5+ Projects</h1>
            <h1  className='h-20 w-40  bg-[#6D326D] flex justify-center items-center rounded-2xl text-white '>3 Internships</h1>
            <h1  className='h-20 w-40  bg-[#6D326D] flex justify-center items-center rounded-2xl text-white '>100% dedication</h1>
</div>
<div>
            <button className='ml-10 bg-[#6D326D] font-bold h-15 w-50 text-white  rounded-2xl'>Know more about me</button>
</div>
   </div>
            
            </div>
            <div>
                        <button className='ml-15 mb-10 text-2xl font-bold text-white'>Skills & Technologies *</button>
                        <div className='flex justify-around  text-white font-bold'>
                                    <h1 className='h-50 w-60 bg-black rounded-2xl pl-10  shadow-[0_0_30px_#6D326D]'>Frontend</h1>
                                     <h1 className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]'>Backend</h1>
                                      <h1 className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]'>Database</h1>
                                       <h1 className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]'>Tools & Others</h1>
                        </div>
            </div>
           

    </div>
  )
}

export default Page2