import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen px-6 pl-8">

      {/* Heading  */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl sm:text-xl md:text-4xl font-medium text-cyan-50 md:px-4 md:pt-10 md:pb-8 pb-2 lg:pb-4 md:pr-68"
      >
        About <b className="text-yellow-400">Me</b>...
      </motion.h2>

      {/* About Me Paragraph */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-cyan-50 font-stretch-105% leading-relaxed px-4 sm:px-6 md:px-12 py-6 md:py-9 
                   selection:bg-zinc-800 selection:text-white text-center md:text-left"
      >
        I am a <span className="tracking-wide uppercase text-yellow-400 font-bold">Java Full Stack Developer</span> 
        with hands-on experience in building practical projects such as a 
        <span className="text-amber-200"> personal portfolio website</span> and a 
        <span className="text-amber-200"> functional e-commerce application</span>.
        
        <br /><br />
        
        With a strong foundation in both 
        <span className="tracking-wide uppercase text-yellow-300 font-bold"> Frontend & Backend Development</span>, 
        I focus on writing clean, efficient code and creating applications that deliver real value to users.
        
        <br /><br />
        
        I am committed to <span className="italic">Continuous Learning</span> and eager to contribute my skills, 
        creativity, and <span className="underline">Problem-Solving Mindset</span> to a dynamic development team.
      </motion.p>

      {/* Education Section */}
      <div className="flex flex-col md:flex-row lg:flex-row 2xl:flex-row items-start w-full md:w-3/4 gap-6 mt-8 
                      selection:bg-zinc-800 selection:text-white font-stretch-105% text-left">

        <div className="w-full md:w-1/3">
          <span className="font-bold text-cyan-50">Vins Christian College of Engineering</span><br />
          B.E. Computer Science and Engineering<br />
          2021 – 2025 | <span className="text-amber-200 shadow">Secured</span> 8.3 CGPA
        </div>

        <div className="w-full md:w-1/3">
          <span className="font-bold text-cyan-50">K.D.V.P. Government Girls HrS School</span><br />
          HSS (12th) – 2020 – 2021 | <span className="text-amber-200 shadow">Secured</span> 78.3%
        </div>

        <div className="w-full md:w-1/3">
          <span className="font-bold text-cyan-50">K.D.V.P. Government Girls HrS School</span><br />
          SSLC (10th) – 2018 – 2019 | <span className="text-amber-200 shadow">Secured</span> 63%
        </div>
      </div>
    </div>
  )
}

export default About