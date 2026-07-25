import React from "react";

const Experience = () => {
  return (
    <div className="w-full bg-black px-6 md:px-10 lg:px-16 py-16 font-serif">

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-16">
        Experience & Journey
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* 1 */}
        <div className="flex flex-col items-center flex-1 text-center">

          <div className="w-12 h-12 rounded-full bg-[#6D326D] flex items-center justify-center text-white font-bold text-xl">
            1
          </div>

          <div className="hidden lg:block w-full h-1 bg-[#6D326D] mt-4"></div>

          <div className="mt-6 text-white">
            <h2 className="text-xl font-bold">
              IoT Intern
            </h2>

            <h3 className="text-[#d98dd9] mt-2">
              Ambience Technology
            </h3>

            <p className="mt-4 text-gray-300">
              Developed IoT-based applications using Raspberry Pi.
            </p>
          </div>

        </div>

        {/* 2 */}

        <div className="flex flex-col items-center flex-1 text-center">

          <div className="w-12 h-12 rounded-full bg-[#6D326D] flex items-center justify-center text-white font-bold text-xl">
            2
          </div>

          <div className="hidden lg:block w-full h-1 bg-[#6D326D] mt-4"></div>

          <div className="mt-6 text-white">

            <h2 className="text-xl font-bold">
              Software Engineer Intern
            </h2>

            <h3 className="text-[#d98dd9] mt-2">
              Vivarthana Technology
            </h3>

            <p className="mt-4 text-gray-300">
              Worked on REST APIs, authentication and database integration.
            </p>

          </div>

        </div>

        {/* 3 */}

        <div className="flex flex-col items-center flex-1 text-center">

          <div className="w-12 h-12 rounded-full bg-[#6D326D] flex items-center justify-center text-white font-bold text-xl">
            3
          </div>

          <div className="hidden lg:block w-full h-1 bg-[#6D326D] mt-4"></div>

          <div className="mt-6 text-white">

            <h2 className="text-xl font-bold">
              Full-Stack Developer
            </h2>

            <h3 className="text-[#d98dd9] mt-2">
              Varcons Technology
            </h3>

            <p className="mt-4 text-gray-300">
              Built responsive UIs with React and improved user experience.
            </p>

          </div>

        </div>

        {/* 4 */}

        <div className="flex flex-col items-center flex-1 text-center">

          <div className="w-12 h-12 rounded-full bg-[#6D326D] flex items-center justify-center text-white font-bold text-xl">
            4
          </div>

          <div className="hidden lg:block w-full h-1 bg-[#6D326D] mt-4"></div>

          <div className="mt-6 text-white">

            <h2 className="text-xl font-bold">
              Volunteer
            </h2>

            <h3 className="text-[#d98dd9] mt-2">
              Google Cloud Community Day
            </h3>

            <p className="mt-4 text-gray-300">
              Contributed as a volunteer and helped in event management.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Experience;