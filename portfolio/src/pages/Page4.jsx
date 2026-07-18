import React from 'react'

const Page4 = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white flex font-bold justify-center items-center'>
      <div className="w-1/2  h-100  m-40">
 <h1 className='text-xl'>Start a Project</h1>
    <h1 className='text-6xl mt-5'>Let's Build </h1>
    <h1 className='text-8xl text-[#6D326D]'>Something Great .</h1>
    <h1 className='text-xl mt-10'>shifamahreen786@gmail.com</h1>
      </div>
      <div className="w-1/2  h-100 text-xl m-40 text-white">
   
     <input type="text"  placeholder="What's Your Name?" className='text-gray-500 w-[80%] bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400'/><br />
     <input type="text" placeholder='Your email address' className='w-[80%] bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400  mt-10'/>
     <input type="text" placeholder='Tell me about Your Project' className='w-[80%] bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400 mt-10 ' />
      

      <button className='mt-25 w-[30%] bg-[#6D326D] h-17 rounded-3xl '>Send Message</button>
      </div>
    
    </div>
  )
}

export default Page4
