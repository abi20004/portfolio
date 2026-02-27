import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { motion } from "framer-motion";

import front from '../assets/frontpic.avif';
import front2 from '../assets/frontpic2.jpeg';
// import front3 from '../assets/frontpic3.jpeg';
import clgpro from '../assets/pro3.png';

const Project = () => {
  // 👉 Card data array
  const projects = [
    {
    image: front2,
    title: "Portfolio v2",
    desc: "Experimented with animations and responsive layouts.",
    link: "https://www.portfolio.com"
  },
  {
    image: front,
    title: "Portfolio",
    desc: "Built with HTML, CSS, Tailwind CSS, React, Material UI.",
    link: "https://www.portfolio.com"
  },
  {
    image: clgpro,
    title: "College Project",
    desc: "Its our BE.CS and Engineering final year college project using React.",
    link: "https://www.portfolio.com"
  }
];

  return (
    <div className='flex flex-col items-center w-full 2xl:px-[500px] 2xl:mb-8'>

      <div className='flex flex-col mx-18 lg:mx-64 xl:mx-74 w-full items-center' >

        <div className='text-4xl md:text-4xl font-medium text-cyan-50 px-4 '>
          <p className='text-cyan-50 mt-4 mb-12 lg:mb-6 lg:pb-20 lg:pr-44 xl:mb-4 xl:pt-2 '>
            <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}>
            My <span className='font-bold text-teal-300'>P</span>rojects...
            </motion.h2>
          </p>
        </div>  

        <div className='pr-4  md:mr-4 md:px-14 xl:px-14'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-9 items-center xl:mb-4'>
            
            {projects.map((proj, index) => (
               <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
  whileHover={{ scale: 1.05 }}

>
       <Card       key={index} 
      className="w-[250px] h-[250px] md:w-50 md:h-68 lg:w-54 lg:h-68 xl:w-54 xl:h-68 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl animate-fadeIn">
                <CardActionArea>
                  <CardMedia
                    className='h-[135px]'
                    component="img"
                    image={proj.image}
                    alt={proj.title}
                  />
                  <CardContent>
                    <p className='text-lg text-teal-500'>{proj.title}</p>
                    <p className='text-sm font-normal text-gray-500'>{proj.desc}</p>
                    <a href={proj.link}>{proj.link}</a>
                  </CardContent>
                </CardActionArea>
              </Card>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Project;