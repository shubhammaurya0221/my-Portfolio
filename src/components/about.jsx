import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function about() {
  return (
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}


import Experience from "./Experience";

export default function AboutWithExperience() {
  return (
    <>
      {about()}
      <Experience />
    </>
  );
}
