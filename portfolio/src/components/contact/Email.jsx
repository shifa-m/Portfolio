import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Email = () => {

  const handleMessage=()=>{
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
      "_blank"
    )
  }
  return (
    <div>
            
                    <div className="w-1/2  h-100  m-40">
                      <h1 className='text-xl'>Start a Project</h1>
                      <h1 className='text-6xl mt-5'>Let's Build </h1>
                      <h1 className='text-8xl text-[#6D326D]'>Something Great .</h1>
                      <h1 className='text-xl mt-10 flex mr-2'>shifamahreen786@gmail.com <div className='h-8 w-8 bg-[#6D326D] rounded-full ml-2 pl-1 pt-1'><ArrowUpRight  onClick={handleMessage}/></div></h1>
                    </div>
                    </div>
    
  )
}

export default Email