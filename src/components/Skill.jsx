// // import Icon from '@mui/material/Icon';
// import React from 'react'
// import { motion } from 'framer-motion';
// import { FaHtml5 } from "react-icons/fa6";
// import { FaCss3Alt } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandJavascript } from "react-icons/tb";
// import { FaJava } from "react-icons/fa6";
// import { SiMui } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { GrMysql } from "react-icons/gr";
// import { BiLogoSpringBoot } from "react-icons/bi";

// const Skill = () => {

//   const frontskill = [
//     { name: 'Html', icon: <FaHtml5 className='text-orange-400'/> },
//     { name: 'Css', icon: <FaCss3Alt className='text-sky-400'/> },
//     { name: 'TailwindCss', icon: <RiTailwindCssFill className='text-sky-200' /> },
//     { name: 'JavaScript', icon: <TbBrandJavascript className='text-amber-300'/>},
//     {name:'Materialui',icon:<SiMui  className='text-blue-500' />},
//     {name:'react',icon:<FaReact className='text-sky-300'/>}


//   ]
//   const backskill = [
//     { name: 'Java', icon: <FaJava className='text-red-500'/> },
//     {name:'mySQL',icon:<GrMysql className='text-blue-400 '/> },
//     {name:'SpringBoot',icon:<BiLogoSpringBoot className='text-green-400'/>}
//   ]

  
//   return (
//     <div className='flex flex-col lg:flex-col items-center w-full md:max-w-screen sm:max-w-screen py-10 md:px-98 2xl:px-[900px]'>

//       <div className='[@media(min-width:320px)]:mx-14 [@media(min-width:425px)]:mx-28 [@media(min-width:375px)]:pr-14 md:mx-6 lg:mx-28 xl:mx-80 2xl:mx-[900px] '>

//       <div className='pt-16 md:pt-9  md:pl-44 lg:pl-5 [@media(min-width:320px)]:pr-28'>
//         <p className='text-4xl sm:text-1xl md:text-4xl font-medium text-cyan-50 md:px-4 md:pt-10 md:pb-8 pb-1 lg:pb-4'>
//             <motion.p
//   initial={{ opacity: 0, y: -30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}>
// Skill<span className='text-teal-300'>s</span></motion.p></p>
//       </div>

//        <p className='font-serif text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-teal-100 pt-5 md:pt-1 pb-0 md:pb-6 xl:pr-7 p-1 md:pl-64'>
//        <motion.p
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
// Frontend </motion.p></p>
//       <div className='grid grid-cols-2 md:grid-cols-6 px-1 md:px-2 pl-6 md:ml-34 gap-16 md:gap-8 py-7 md:py-9 w-full md:w-2xl text-4xl'>
//         {frontskill.map((skillf, index) =>
//         (
//           <div key={index} className='flex items-center md:text-4xl'>
//             <motion.div
//             initial={{ opacity: 0, y: 20 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              whileHover={{ scale: 1.05 }}
//               transition={{duration: 0.8 }}>
//             {skillf.icon}
//             <span className='text-sm text-cyan-50'>{skillf.name}</span>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//       <p className='font-serif text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-teal-100 pt-5 md:pt-1 pb-0 md:pb-6 xl:pr-7 p-1 md:pl-64'>
//         <motion.p
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
// Backend </motion.p></p>
//       <div className='grid grid-cols-2 md:grid-cols-6 px-1 md:px-2 pl-6 md:ml-34 gap-16 md:gap-8 py-7 md:py-9 w-full md:w-2xl text-4xl'>
//         {backskill.map((skillb, index) => (
//           <div key={index} className='flex items-center text-3xl md:text-4xl'>
//              <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   whileHover={{ scale: 1.05 }}
//   transition={{ delay: index * 0.2, duration: 0.6 }}
// >
//             {skillb.icon}
//             <span className='text-cyan-50 text-sm'>{skillb.name}</span>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   )
// }
// export default Skill



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
    <div className="flex flex-col items-center w-full max-w-screen bg-gray-950 py-19 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40">

      {/* Heading */}
      <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
        className="text-4xl sm:text-xl md:text-4xl font-medium text-cyan-50 text-center md:text-left mb-12 md:pr-68"
      >
        Skill<span className="text-teal-300">s</span>...
      </motion.h2>

      {/* Frontend */}
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-serif text-2xl md:text-3xl text-teal-100 mb-8 text-center md:text-left"
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
        className="font-serif text-2xl md:text-3xl text-teal-100 mt-12 mb-8 text-center md:text-left"
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