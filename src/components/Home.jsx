import React from 'react'
import pics from '../assets/pic2.png'
import Button from '@mui/material/Button';
import Abi from '../assets/Abi.pdf'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between  py-4 md:py-20 px-9 mt-16 md:px-12 lg:px-20 xl:px-32 2xl:px-40">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col mx-4 md:mx-9">

          {/* Hello */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-3xl md:text-6xl text-amber-50 py-3 pt-9 md:pt-10"
          >
            Hello <span className="text-yellow-400">!</span>
          </motion.p>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-semibold font-serif text-xl sm:text-2xl text-cyan-50 hover:text-yellow-100 py-3"
          >
            I'm Abirami
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sky-50 font-stretch-105% selection:bg-zinc-800 selection:text-white"
          >
            A passionate <b>Java Full Stack</b> fresher eager to build clean, scalable applications.  
            I focus on writing efficient code and continuously improving my development skills.
          </motion.p>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-6"
          >
            <Button
              variant="outlined"
              href={Abi}
              download="Abi.pdf"
              sx={{ borderColor: 'yellow', color: 'yellow' }}
              className="w-auto px-4 sm:px-6 md:px-8"
            >
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <img
              src={pics}
              className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[500px] h-auto"
              alt="pi1"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Home