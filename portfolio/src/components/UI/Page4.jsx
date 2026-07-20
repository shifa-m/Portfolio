import React from 'react'
import Email from '../contact/Email.jsx'

const Page4 = () => {

  const handleMessage=()=>{
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
    "_blank"
  )
  }


  return (
    <div className='min-h-screen w-full bg-black text-white flex font-bold justify-center items-center  '>
      <div className='flex  rounded-4xl bg-black shadow-[0_0_30px_#6D326D] m-20'>
        <Email />
        <div className="w-1/2  h-100 text-xl m-40 text-white">
          <input type="text" placeholder="What's Your Name?" className='text-gray-500 w-[80%] bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400' /><br />
          <input type="text" placeholder='Your email address' className='w-[80%] bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#e981e9] placeholder:text-gray-400  mt-10' />
          <input type="text" placeholder='Tell me about Your Project' className='w-[80%] bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400 mt-10 ' />
          <button onClick={handleMessage} className='mt-25 w-[40%] bg-[#6D326D] h-15 rounded-4xl '>Send Message</button>
        </div>
      </div>
    </div>



  )
}

export default Page4
