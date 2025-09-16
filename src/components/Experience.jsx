import React from "react";
import leafnyLogo from "../assets/leafny.jpeg";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={leafnyLogo} alt="Leafny Logo" className="w-16 h-16 rounded-lg shadow-lg" />
          <div>
            <h3 className="text-xl font-bold text-neutral-300">Frontend Web Developer</h3>
            <p className="text-neutral-300">Leafny Web Pack Services & Consultancy · Internship</p>
            <p className="text-neutral-400 text-sm">Sep 2025 - Present · 1 month</p>
            <p className="text-neutral-400 text-sm">Aurangabad, Maharashtra, India · Remote</p>
          </div>
        </div>
        <div className="mt-4 max-w-2xl">
          <p className="text-neutral-300">
            As a Front-End Developer Intern at Leafny Web Pack Services & Consultancy, contributed to the development and maintenance of scalable, responsive, and user-friendly front-end applications for SaaS platforms using React.js and Next.js.
          </p>
          <div className="mt-2 flex items-center gap-2 text-neutral-300">
            <span className="font-semibold">💎 React.js, Next.js and +4 skills</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
