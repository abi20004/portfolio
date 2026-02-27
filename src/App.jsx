import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { color } from 'framer-motion'

const App = () => {
  return (
    <div className='bg-gray-950 w-full relative md:px-9 md:pt-8 pt-2 lg:pt-14'>
      <Nav />
<section id="home" className="scroll-mt-24"><Home /></section>
<section id="about" className="scroll-mt-24"><About /></section>
<section id="skill" className="scroll-mt-24"><Skill /></section>
<section id="project" className="scroll-mt-24"><Project /></section>
<section id="contact" className="scroll-mt-24"><Contact /></section>

 <div id="footer" className="bg-gray-950 text-white py-6 text-center flex-cols">
        <div >
          <p className='text-teal-300 text-2xl font-serif'><span  className='font-bold text-3xl'>A</span>birami</p>
        </div>
          <div className='flex flex-row py-6 justify-center'> 
   <a 
    href="https://www.linkedin.com/in/abirami-s-p-0870b2362/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pl-"
  >
    <FaLinkedin size={28} className='text-teal-100 hover:text-white'/>
  </a>
  <a 
    href="https://github.com/abi20004" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pl-8"
  >
    <FaGithub size={28} className='text-teal-100 hover:text-white' />
  </a>
  <a 
    href="mailto:abirami10122004@gmail.com" 
    className="pl-8"
  >
    <FaEnvelope size={28} className='text-teal-100 hover:text-white'/>
  </a>

        </div>
        <p className='text-sm py-4 text-white text-shadow-white'>© 2025 Abirami Portfolio. All rights reserved.</p>
</div>
    </div>
  )
}

export default App
