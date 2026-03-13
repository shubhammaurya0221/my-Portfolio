import React from "react";
<<<<<<< HEAD
import aboutImg from "../assets/about.jpg";
=======
>>>>>>> 16450a6 (Initial commit)
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function about() {
  return (
<<<<<<< HEAD
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="lw-full lg:1/2 "
        >
          <div className="flex justify-center lg:justify-start">
            <div className=" text-base font-[Kufam] my-2 max-w-xl py-6 font-light tracking-tighter">
              <p>
                I am a <b>Full Stack Developer</b> skilled in the <b>MERN Stack (MongoDB, Express.js, React.js, Node.js)</b> and <b>Next.js</b>,
                with experience in building <b>scalable, responsive, and user-friendly web applications</b>.
              </p>
              <br />
              <p>
                My expertise spans <b>JavaScript, TypeScript, Python, C++, C</b>, databases (<b>MongoDB, MySQL, Prisma ORM</b>),
                and frontend tools like <b>React.js, Redux Toolkit, Tailwind CSS, Bootstrap, shadcn/ui</b>. I also work with
                <b>Cloudinary, Vercel, Netlify, Render</b> for deployment and use <b>Git/GitHub</b> for version control.
              </p>
              <br />
              <p>
                Passionate about crafting impactful digital experiences, I am <b>currently exploring Generative AI</b> while
                continuously learning and adapting to modern web technologies.
              </p>
            </div>
=======
    <div className="border-b border-white/5 pb-16 lg:pb-32 relative" id="about">
      <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-16 lg:gap-8 min-h-[50vh]">
        
        {/* Left Side - Large Typography Headline */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-5/12 sticky top-32"
        >
          <div className="flex flex-col">
            <h2 className="section-title text-white mb-6">
              ABOUT
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--accent-start)] to-transparent mb-8"></div>
            <p className="font-space text-2xl lg:text-4xl leading-tight font-light text-white/90 tracking-tight">
              Driven by <span className="text-gradient font-medium italic">curiosity</span> and a passion for engineering immersive digital realities.
            </p>
          </div>
        </motion.div>
        
        {/* Right Side - Description paragraph */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-6/12 flex flex-col justify-center"
        >
          <div className="text-[var(--text-secondary)] font-inter text-lg lg:text-xl font-light leading-relaxed space-y-8">
            <p>
              Hey there. I'm a passionate full-stack developer committed to building scalable and modern web applications from the ground up.
            </p>
            <p>
              {ABOUT_TEXT}
            </p>
            <p>
              When I'm not writing code, I'm analyzing top-tier Awwwards web designs, experimenting with generative AI, or studying the latest advancements in web architecture to ensure my skills remain at the absolute bleeding edge of the industry.
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-xs font-space text-[var(--text-secondary)] tracking-widest uppercase">
            <span>Availability: <span className="text-white">Open for roles</span></span>
            <span className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-start)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-end)]"></span>
              </span>
              Actively Building
            </span>
>>>>>>> 16450a6 (Initial commit)
          </div>
        </motion.div>
      </div>
    </div>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 16450a6 (Initial commit)
import Experience from "./Experience";

export default function AboutWithExperience() {
  return (
    <>
      {about()}
      <Experience />
    </>
  );
}
