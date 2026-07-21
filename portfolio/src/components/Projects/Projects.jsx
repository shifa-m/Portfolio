import React from 'react'

const Projects = () => {

  const handleGithub=()=>{
    window.open(
      "https://github.com/shifa-m",
      "_blank"
    )
  }
  return (
    <div>
             <div className='flex justify-between  '>
        <h1 className='m-15 text-xl text-white font-bold'>FEATURED PROJECTS</h1>
        <button onClick={handleGithub} className=' bg-[#6D326D] text-white font-bold h-15 w-40 rounded-2xl  m-15'>View All Projects</button>
      </div>
      <div className='flex  pb-15'>
        <h1 className='h-80 w-150 ml-15 bg-black shadow-[0_0_30px_#6D326D] rounded-2xl pt-10 pl-2'>Task Manager App</h1>
        <h1 className='h-80 w-150 ml-15 bg-black shadow-[0_0_30px_#6D326D] rounded-2xl pt-10 pl-2'>Task Manager App</h1>
        <h1 className='h-80 w-150 ml-15 bg-black shadow-[0_0_30px_#6D326D] mr-15 rounded-2xl pt-10 pl-2'>Task Manager App</h1>
      </div>
    </div>
  )
}

export default Projects