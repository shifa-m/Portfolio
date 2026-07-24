import React from 'react'

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
            <div
              key={index}
              className="bg-[#6D326D] text-white
              px-5 py-3
              rounded-full
              font-semibold
              text-sm md:text-base
              hover:scale-105
              transition-all
              duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Skills;