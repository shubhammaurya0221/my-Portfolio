import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg"; // Use next/image if using Next.js
import { motion } from "framer-motion";

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  // Removed preview state
  const resumeUrl = import.meta.env.BASE_URL + 'src/assets/resume/Shubham_Maurya.pdf';
  return (
    <>
      <div className="h-fit flex pb-4 lg:mb-36 relative">
        {/* Removed resume preview on hover */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-20">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-10 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
              >
                Shubham Maurya
              </motion.h1>
              <motion.span 
               variants={container(0.5)}
                initial="hidden"
                animate="visible"
               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                MERN Stack Developer
              </motion.span>
              <motion.p 
               variants={container(1)}
                initial="hidden"
                animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </motion.p>
            {/* Removed button from here */}
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 flex flex-col items-center">
            <div className="flex justify-center items-center">
              <motion.img 
              initial={{x:100, opacity: 0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
                src={profilePic}
                alt="Profile"
                className="h-[400px] rounded-lg object-cover"
              />
            </div>
            <div className="mt-6 w-full flex justify-center">
              <button
                className="px-6 py-3 bg-gray-800 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'Shubham_Maurya.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
