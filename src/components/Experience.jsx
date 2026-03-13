import React from "react";
<<<<<<< HEAD
import leafnyLogo from "../assets/leafny.jpeg";
=======
import { EXPERIENCES } from "../constants";
>>>>>>> 16450a6 (Initial commit)
import { motion } from "framer-motion";

function Experience() {
  return (
<<<<<<< HEAD
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
            <p className="text-neutral-400 text-sm">Sep 2025 - Present · 2 month</p>
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
=======
    <section className="border-b border-white/5 pb-16 lg:pb-32 pt-10 lg:pt-20" id="experience">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-24 flex flex-col items-center"
      >
        <h2 className="section-title text-white mb-6">EXPERIENCE</h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--accent-start)] to-transparent"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2"></div>

        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-24 last:mb-0 group pl-16 md:pl-0">
            {/* Timeline Node */}
            <div className="absolute left-[27px] md:left-1/2 top-2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-[var(--bg-dark)] border-2 border-[var(--text-secondary)] group-hover:border-[var(--accent-start)] transition-colors duration-500 z-10"></div>
            
            {/* Left Side (Year) */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="md:w-[45%] md:text-right mb-4 md:mb-0 md:pr-12"
            >
              <span className="font-space text-sm tracking-widest text-[var(--accent-start)] uppercase">
                {exp.year}
              </span>
            </motion.div>

            {/* Right Side (Content) */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="md:w-[45%] md:pl-12"
            >
              <h3 className="font-space text-2xl text-white font-medium mb-1 group-hover:text-gradient transition-all duration-300 inline-block">
                {exp.role}
              </h3>
              <h4 className="text-[var(--text-secondary)] text-sm tracking-wide uppercase mb-6 font-medium">
                {exp.company}
              </h4>
              <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-6 font-inter text-sm md:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs font-space tracking-wider uppercase px-3 py-1 border border-white/10 rounded-full text-white/70 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
>>>>>>> 16450a6 (Initial commit)
  );
}

export default Experience;
