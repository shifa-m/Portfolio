import React from "react";
import {
  Search,
  ClipboardList,
  Code2,
  TrendingUp,
} from "lucide-react";

const Process = () => {
  return (
    <section className="bg-black text-white py-24 font-serif">

      <h3 className="text-center text-[#b56db5] text-xl italic">
        My Process
      </h3>

      <h1 className="text-center text-5xl font-bold mt-3">
        How I <span className="text-[#6D326D]">Solve Problems</span>
      </h1>

      <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
        Every project starts with understanding the problem and ends with
        delivering a polished solution.
      </p>

      <div className="relative mt-24">

        

        <svg
          className="absolute top-10 left-0 w-full hidden lg:block"
          height="170"
          viewBox="0 0 1400 170"
          preserveAspectRatio="none"
        >
          <path
            d="M0 90
               C170 0 230 0 350 90
               S530 180 700 90
               S1030 0 1200 90
               S1330 180 1400 90"
            stroke="#6D326D"
            strokeWidth="5"
            fill="none"
          />
        </svg>


        <div className="grid lg:grid-cols-4 gap-12 relative z-10">


          <div className="lg:-mt-10 flex flex-col items-center">

            <div className="w-16 h-16 rounded-full bg-[#6D326D] flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_#6D326D]">
              1
            </div>

            <div className="w-[2px] h-12 bg-[#6D326D]"></div>

            <div className="w-72 bg-[#111] rounded-3xl border border-[#6D326D] p-8 text-center">

              <Search size={45} className="mx-auto text-[#c98dc9]" />

              <h2 className="text-3xl font-bold mt-6">
                Understand
              </h2>

              <p className="text-gray-400 mt-4">
                I carefully understand the requirements,
                identify the real problem and gather every
                important detail before writing code.
              </p>

            </div>

          </div>


          <div className="lg:mt-24 flex flex-col items-center">

            <div className="w-16 h-16 rounded-full bg-[#6D326D] flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_#6D326D]">
              2
            </div>

            <div className="w-[2px] h-12 bg-[#6D326D]"></div>

            <div className="w-72 bg-[#111] rounded-3xl border border-[#6D326D] p-8 text-center">

              <ClipboardList
                size={45}
                className="mx-auto text-[#c98dc9]"
              />

              <h2 className="text-3xl font-bold mt-6">
                Plan
              </h2>

              <p className="text-gray-400 mt-4">
                I divide the problem into smaller tasks,
                choose the right approach and prepare a
                clear roadmap.
              </p>

            </div>

          </div>


          <div className="lg:-mt-10 flex flex-col items-center">

            <div className="w-16 h-16 rounded-full bg-[#6D326D] flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_#6D326D]">
              3
            </div>

            <div className="w-[2px] h-12 bg-[#6D326D]"></div>

            <div className="w-72 bg-[#111] rounded-3xl border border-[#6D326D] p-8 text-center">

              <Code2 size={45} className="mx-auto text-[#c98dc9]" />

              <h2 className="text-3xl font-bold mt-6">
                Build
              </h2>

              <p className="text-gray-400 mt-4">
                I build clean, reusable and responsive
                applications while testing features
                throughout development.
              </p>

            </div>

          </div>

          
          <div className="lg:mt-24 flex flex-col items-center">

            <div className="w-16 h-16 rounded-full bg-[#6D326D] flex items-center justify-center text-2xl font-bold shadow-[0_0_25px_#6D326D]">
              4
            </div>

            <div className="w-[2px] h-12 bg-[#6D326D]"></div>

            <div className="w-72 bg-[#111] rounded-3xl border border-[#6D326D] p-8 text-center">

              <TrendingUp
                size={45}
                className="mx-auto text-[#c98dc9]"
              />

              <h2 className="text-3xl font-bold mt-6">
                Improve
              </h2>

              <p className="text-gray-400 mt-4">
                Finally, I optimize performance, fix issues
                and polish the overall user experience.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Process;