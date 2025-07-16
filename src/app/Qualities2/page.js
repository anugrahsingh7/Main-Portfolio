"use client"

import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa";
import { LuScanBarcode } from "react-icons/lu";
import { FaHammer } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";

const personalitySkills = [
  {
    title: 'Creative Frontend Developer',
    icon: <FaCode className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-400" />, // responsive icon size
    description: 'Bringing vibrant ideas to life with responsive and intuitive interfaces, blending creativity with functionality.',
  },
  {
    title: 'Detail-Oriented Coder',
    icon: <LuScanBarcode className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400' />, // responsive icon size
    description: 'Crafting clean, scalable, and efficient code with a sharp focus on performance and user experience.',
  },
  {
    title: 'Real-World Problem Solver',
    icon: <FaHammer className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500" />, // responsive icon size
    description: 'Building impactful tech solutions that solve genuine problems, from college canteens to collaborative music apps.',
  },
  {
    title: 'Next.js Enthusiast',
    icon: <FaRocket className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-indigo-400" />, // responsive icon size
    description: 'Leveraging modern frameworks and tools to build fast, dynamic, and production-ready web applications.',
  },
  {
    title: 'UI/UX Perfectionist',
    icon: <LuLayoutDashboard className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-400" />, // responsive icon size
    description: 'Designing sleek, mobile-friendly experiences that feel as good as they look — no scroll bars, just smooth flow.',
  },
  {
    title: 'Relentless Learner',
    icon: <FaGraduationCap className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400" />, // responsive icon size
    description: 'From mastering DSA to diving into AI/ML and preparing for IES, I\'m always leveling up my tech and career game.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Qualities2() {
  return (
    <div id="strengths" className="min-h-screen bg-black text-white px-4 sm:px-6 py-8 sm:py-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-500"
      >
        My Core Strengths
      </motion.h1>

      <motion.div 
        className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 lg:gap-y-32 px-2 sm:px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {personalitySkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-tr from-zinc-800/60 to-zinc-900/80 border border-red-500/20 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-transform duration-300 will-change-transform w-full sm:w-11/12 md:w-4/5 lg:w-11/12 xl:w-5/6 max-w-2xl mx-auto"
            style={{ transform: 'translateZ(0)' }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-3 md:mb-4">
              {skill.icon}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-400">{skill.title}</h2>
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-8 sm:mt-12 md:mt-20 lg:mt-24"
      >
      </motion.div>
    </div>
  )
}

export default Qualities2;