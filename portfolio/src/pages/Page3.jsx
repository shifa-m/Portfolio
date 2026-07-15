import React from 'react'

const Page3 = () => {
  return (
    <div className='min-h-screen w-full '>
<div className='flex justify-between'>
            <h1 className='m-15 text-xl '>FEATURED PROJECTS</h1>
            <button className=' bg-gray-500 h-15 w-40 rounded-2xl  m-15'>View All Projects</button>

</div>
<div className='flex'>
            <h1 className='h-80 w-150 ml-15 bg-gray-500 rounded-2xl pt-10 pl-2'>Task Manager App</h1>
             <h1 className='h-80 w-150 ml-15 bg-gray-500 rounded-2xl pt-10 pl-2'>Task Manager App</h1>
              <h1 className='h-80 w-150 ml-15 bg-gray-500 mr-15 rounded-2xl pt-10 pl-2'>Task Manager App</h1>
</div>
 <h1 className='text-2xl ml-15 mt-10'>Experience & Journey</h1>
<div className="flex items-center m-10">
  <div className="w-5 h-5 rounded-full bg-blue-500"></div>

  <div className="flex-1 h-[2px] bg-blue-500 font-bold">Volunteer <span className='flex'>Google Cloud Community Day</span><span>Contributed as a volunteer and</span><span>helped in event management.</span></div>

 <div className="w-5 h-5 rounded-full bg-blue-500 "></div>
  <div className="flex-1 h-[2px] bg-blue-500 font-bold">Full-Stack Developer <span className='flex'>Varcons Technology</span><span className='flex'>Built responsive UIs with React</span><span>and improved user experience.</span></div>

  <div className="w-5 h-5 rounded-full bg-blue-500 "></div>


  <div className="flex-1 h-[2px] bg-blue-500 font-bold">Software Engineer Intern <span className='flex'>Vivarthana Technology</span><span className='flex'>Worked on REST APIs,</span><span className='flex'>authentication and database</span> <span>integration.</span> </div>

  <div className="w-5 h-5 rounded-full bg-blue-500"></div>
  <div className="flex-1 h-[2px] bg-blue-500 font-bold">IOT Intern <span className='flex'>Ambience Technology</span><span className='flex'>Developed IoT-based applications </span><span> using Raspberry Pi.</span></div>

</div>
           

</div>
    
  )
}

export default Page3