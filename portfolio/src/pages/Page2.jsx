import React from 'react'
import Profile from "../assets/images/profile.jpg"

const Page2 = () => {
  return (
    <div className='min-h-screen w-full  flex '>

            <div className='w-1/2  h-200  '>
                        <img src={Profile} alt="Sheefa Mehreen" className='h-120 m-50' />

            </div>
            <div className='w-1/2  h-200'>
            <button className='bg-gray-500 h-10 w-30 m-20 rounded-2xl '>About me</button>
            <div className='m-20 text-2xl'>
                         <h1>I'm a Computer Science & Engg Graduate</h1>
            <h1>I'm passionate about turning ideas into real-world applications <br />using MERN Stack.I love clean code , modern UI/UX , and <br/>building projects that make an impact.</h1>
            </div>
           

            </div>

    </div>
  )
}

export default Page2