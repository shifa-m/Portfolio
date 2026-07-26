import React from 'react'
import { ArrowRight,Download} from 'lucide-react';
import { FaLinkedin ,FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Profile from "../../assets/images/profile.png";
import Resume from "../../assets/resume/resumeMERN.pdf";
import {easeInOut, motion} from "framer-motion"

const RightCard = () => {

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.setAttribute("download", "Sheefa_Mehreen_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  const handleMessage=()=>{
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=shifamahreen786@gmail.com",
      "_blank"
    )
  }


  const handleLinkedin=()=>{
    window.open(
      "https://www.linkedin.com/in/sheefa-mehreen-3634a1278/",
      "_blank"
    )
  }

  const handleGithub=()=>{
    window.open(
      "https://github.com/shifa-m",
      "_blank"
    )
  }

  return (

    <div className="flex flex-col-reverse lg:flex-row items-center w-full px-6 md:px-10 lg:px-16 lg:mt-20">

      {/* Left Section */}

      <div className="w-full lg:w-1/2 mt-10 lg:mt-20">

        <span className="inline-block rounded-full border border-[#6D326D] bg-[#6D326D]/20 px-6 py-2 text-sm font-semibold tracking-wide text-[#d98dd9] cursor-pointer transition-transform duration-300 hover:scale-105">
          FULL-STACK DEVELOPER
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 text-white cursor-pointer">
          Hi, I'm
        </h1>

        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 text-[#6D326D] italic font-bold cursor-pointer transition-transform duration-300 hover:scale-105">
          Sheefa Mehreen
        </h1>

        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 text-white cursor-pointer">
          Full-Stack MERN Developer
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mt-6 text-gray-300 leading-relaxed cursor-pointer">
          I build scalable, responsive and user-friendly web applications
          that solve real-world problems.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-10">

          <button
            className="flex items-center gap-2 bg-[#6D326D] px-6 py-3 rounded-xl font-semibold hover:bg-[white] hover:text-[#814381] transition-transform duration-150 hover:scale-105 cursor-pointer"
          >
            View My Work
            <ArrowRight size={20} />
          </button>

          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 bg-[#6D326D] px-6 py-3 rounded-xl font-semibold hover:bg-[white] hover:text-[#814381] transition-transform duration-150 hover:scale-105 cursor-pointer"
          >
            Download Resume
            <Download size={20} />
          </button>

        </div>
        <div className="flex gap-6 lg:gap-15 md:gap-10 mt-8">

          <FaGithub
            onClick={handleGithub}
            className="cursor-pointer hover:text-[#6D326D] transition-transform duration-300 hover:scale-95"
            size={30}
          />

          

          <FaLinkedin
          onClick={handleLinkedin}
            className="cursor-pointer hover:text-[#6D326D] transition-transform duration-300 hover:scale-95"
            size={30}
          />

          <MdEmail
            onClick={handleMessage}
            className="cursor-pointer hover:text-[#6D326D] transition-transform duration-300 hover:scale-95"
            size={30}
          />

        </div>

      </div>

      {/* Right Section */}

      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">

        <img
          src={Profile}
          alt="Sheefa Mehreen"
          className="w-full max-w-[400px] lg:max-w-[450px] object-contain drop-shadow-[0_0_50px_rgba(109,50,109,0.45)] hover:scale-105 transition-all duration-500"
        />

      </div>

    </div>

  );
}


export default RightCard;