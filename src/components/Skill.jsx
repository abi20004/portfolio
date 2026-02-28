import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJava, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TbBrandJavascript } from "react-icons/tb"
import { SiMui } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { BiLogoSpringBoot } from "react-icons/bi"

const Skill = () => {

  const frontskill = [
    { name: 'Html', icon: <FaHtml5 className="text-orange-400" /> },
    { name: 'Css', icon: <FaCss3Alt className="text-sky-400" /> },
    { name: 'TailwindCss', icon: <RiTailwindCssFill className="text-sky-200" /> },
    { name: 'JavaScript', icon: <TbBrandJavascript className="text-amber-300" /> },
    { name: 'MaterialUI', icon: <SiMui className="text-blue-500" /> },
    { name: 'React', icon: <FaReact className="text-sky-300" /> }
  ]

  const backskill = [
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'MySQL', icon: <GrMysql className="text-blue-400" /> },
    { name: 'SpringBoot', icon: <BiLogoSpringBoot className="text-green-400" /> }
  ]

  return (
    <div className="flex flex-col items-center w-full max-w-scree py-19 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40">

      {/* Heading */}
      <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
        className="text-4xl sm:text-xl md:text-4xl font-medium text-cyan-50 text-center md:text-left mb-12 md:pr-68"
      >
        Skill<span className="text-yellow-400">'s</span>...
      </motion.h2>

      {/* Frontend */}
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-serif text-2xl md:text-3xl text-yellow-100 mb-8 text-center md:text-left pr-24"
      >
        Frontend
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 md:gap-8 py-7 w-full text-4xl">
        {frontskill.map((skillf, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {skillf.icon}
            <span className="text-sm text-cyan-50 mt-2">{skillf.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Backend */}
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-2xl md:text-3xl text-yellow-100 mt-12 mb-8 text-center md:text-left pr-24"
      >
        Backend
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 md:gap-8 py-7 w-full text-4xl">
        {backskill.map((skillb, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {skillb.icon}
            <span className="text-sm text-cyan-50 mt-2">{skillb.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skill