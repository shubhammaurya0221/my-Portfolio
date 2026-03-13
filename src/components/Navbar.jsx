import logo from '/public/logo.png'
import React from 'react';
<<<<<<< HEAD
import {FaLinkedin, FaYoutube, FaYoutubeSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import '../../src/index.css'

function Navbar() {
  return (
    <nav className='mb-5 flex items-center justify-between py-2' >
        <div className='flex flex-shrink-0 items-center'>
            <a href="/"><img src={logo} alt="logo" className='mx-2 w-15 logo-img'/></a>
        </div>
        <div className='mx-8 flex items-center justify-center gap-6 text-2xl'>
            <a href="https://www.linkedin.com/in/shubham-maurya-8b7307289/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/shubhammaurya0221" target="_blank" rel="noopener noreferrer" ><FaGithub/></a>
            <a href="https://www.instagram.com/maurya.shubham_01/" target="_blank" rel="noopener noreferrer" ><FaInstagram/></a>
            <a href="https://www.youtube.com/@DuoDeveloper01" target="_blank" rel="noopener noreferrer" ><FaYoutube/></a>
        </div>
=======
import { FaLinkedin, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {

  const iconVariants = {
    hover: {
      scale: 1.25,
      color: "#ffffff",
      filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.6)) drop-shadow(0px 0px 20px rgba(255,255,255,0.4))",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <nav className='flex items-center justify-between py-4'>

      <motion.div
        className='flex flex-shrink-0 items-center'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className='mx-2 w-14'
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))"
            }}
          />
        </a>
      </motion.div>

      <motion.div
        className='mx-8 flex items-center justify-center gap-6 text-2xl text-gray-400'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.a whileHover="hover" variants={iconVariants} href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin />
        </motion.a>

        <motion.a whileHover="hover" variants={iconVariants} href="https://github.com/" target="_blank">
          <FaGithub />
        </motion.a>

        <motion.a whileHover="hover" variants={iconVariants} href="https://instagram.com/" target="_blank">
          <FaInstagram />
        </motion.a>

        <motion.a whileHover="hover" variants={iconVariants} href="https://youtube.com/" target="_blank">
          <FaYoutube />
        </motion.a>

      </motion.div>
>>>>>>> 16450a6 (Initial commit)
    </nav>
  )
}

export default Navbar;