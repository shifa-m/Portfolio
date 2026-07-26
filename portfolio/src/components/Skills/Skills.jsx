import React from 'react'
import { easeInOut, motion } from "framer-motion"

const Skills = () => {

  const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "RESTful APIs",
    "Responsive Design"
  ];

  return (
    <div className="w-full">

      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8">
        Skills & Technologies
      </h1>

      <div className="shadow-[0_0_30px_#6D326D] rounded-3xl p-6 md:p-8">

        <div className="flex flex-wrap gap-4 justify-center">

          {skills.map((skill, index) => (
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1.1,
                scale: [1, 1.03, 1],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: index * 0.15
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
                boxShadow: "0 0 35px rgba(109,50,109,.8)"
              }}
              key={index}
              className=" text-white 
             bg-[#6D326D]/30
backdrop-blur-md
border
border-purple-400/30
              px-5 py-3
              rounded-full
              font-semibold
              text-sm md:text-base
              cursor-pointer
              transition-all
              duration-300"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Skills;