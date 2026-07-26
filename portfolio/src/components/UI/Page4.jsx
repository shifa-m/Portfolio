import React from 'react'
import Email from '../contact/Email.jsx'
import { ChevronRight } from 'lucide-react';


const Page4 = () => {

  const handleMessage=()=>{
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
      "_blank"
    )
  }


  return (
    <div className="w-full bg-black text-white flex justify-center items-center px-6 py-16">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row rounded-4xl bg-black shadow-[0_0_30px_#6D326D] overflow-hidden">
        <div className="w-full lg:w-1/2">
          <Email />
        </div>
        <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 py-10">

          <input
            type="text"
            placeholder="What's Your Name?"
            className="w-full bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400 mt-10"
          />

          <textarea
            rows="5"
            placeholder="Tell me about your project..."
            className="w-full bg-transparent border-b border-gray-500 pb-4 outline-none focus:border-[#6D326D] placeholder:text-gray-400 mt-10 resize-none"
          ></textarea>

          <button
            onClick={handleMessage}
            className="mt-12 bg-[#6D326D] px-8 py-4 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-[#814381] transition"
          >
            Send Message
            <ChevronRight size={22} />
          </button>

        </div>

      </div>

    </div>
  )
}

export default Page4;