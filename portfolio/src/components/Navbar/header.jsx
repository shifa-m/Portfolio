import React from 'react'

const header = () => {
  return (
    <div className='bg-white flex place-content-between text-2xl text-blue-400 m-2 p-2'>
      <h1 className='text-4xl'>Sheefa Mehreen</h1>
      <div className='flex items-center gap-8'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Skills</h2>
            <h2>Projects</h2>
            <h2>Experience</h2>
            <h2>Contact</h2>
      </div>
      <button className='bg-blue-300 text-amber-50 border-0 p-2 rounded-2xl'>Let's Talk icon</button>
    </div>
  )
}

export default header
