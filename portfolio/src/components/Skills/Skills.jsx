import React from 'react'

const Skills = () => {
  return (
    <div className='bg-black '>
      <div>
        <button className='ml-15 mb-10 text-2xl font-bold text-white'>Skills & Technologies *</button>
        <div className='flex justify-around  text-white font-bold'>
          <div className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]  '>
            <h1 className='text-xl mb-2'>Frontend :</h1>
            <h1>HTML5 & CSS3</h1>
            <h1>Tailwind CSS</h1>
            <h1>JavaScript</h1>
            <h1>Responsive Design</h1>
            <h1>React.js</h1>
            <h1>Redux</h1>
          </div>
          <div className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]'>
            <h1 className='text-xl mb-2'>Backend :</h1>
            <h1>Node.js</h1>
            <h1>Express</h1>
            <h1>REST API Development</h1>
            <h1>JWT</h1>
            <h1>OAuth</h1>
          </div>
          <div className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]'>
            <h1 className='text-xl mb-2'>Database :</h1>
            <h1>MongoDB</h1>
            <h1>Mongoose</h1>
            <h1>MySQL</h1>

          </div>
          <div className='h-50 w-60 bg-black rounded-2xl pl-10 shadow-[0_0_30px_#6D326D]'>
            <h1 className='text-xl mb-2'>Tools & Others :</h1>
            <h1>Git & GitHub</h1>
            <h1>Postman</h1>
            <h1>VS Code</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills