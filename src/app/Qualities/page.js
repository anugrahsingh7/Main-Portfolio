import { motion } from 'framer-motion';
import { FaCode  } from "react-icons/fa";
import { LuScanBarcode } from "react-icons/lu";
import { FaHammer } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";


const personalitySkills = [



  {
    title: 'Creative Frontend Developer',
    icon: <FaCode className="text-3xl text-rose-400 " />,
    description: 'Bringing vibrant ideas to life with responsive and intuitive interfaces, blending creativity with functionality.',
  },
  {
    title: 'Detail-Oriented Coder',
    icon: <LuScanBarcode className='text-3xl text-blue-400' />,
    description: 'Crafting clean, scalable, and efficient code with a sharp focus on performance and user experience.',
  },
  {
    title: 'Real-World Problem Solver',
    icon: <FaHammer className="text-3xl text-green-500" />,
    description: 'Building impactful tech solutions that solve genuine problems, from college canteens to collaborative music apps.',
  },
  {
    title: 'Next.js Enthusiast',
    icon: <FaRocket  className="text-3xl text-indigo-400" />,
    description: 'Leveraging modern frameworks and tools to build fast, dynamic, and production-ready web applications.',
  },
  {
    title: 'UI/UX Perfectionist',
    icon: <LuLayoutDashboard className="text-3xl text-purple-400" />,
    description: 'Designing sleek, mobile-friendly experiences that feel as good as they look — no scroll bars, just smooth flow.',
  },
  {
    title: 'Relentless Learner',
    icon: <FaGraduationCap className="text-3xl text-yellow-400" />,
    description: 'From mastering DSA to diving into AI/ML and preparing for IES, I’m always leveling up my tech and career game.',
  }
  
  
];

// Animation variants for staggered children
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

export default function Qualities() {
  return (
    <div id="strengths" className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-pink-500"
      >
        My Core Strengths
      </motion.h1>

      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {personalitySkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-tr from-zinc-800/60 to-zinc-900/80 border border-red-500/20 p-6 rounded-3xl shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-transform duration-300 will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            <div className="flex items-center space-x-4 mb-4">
              {skill.icon}
              <h2 className="text-2xl font-bold text-red-400">{skill.title}</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
       
      </motion.div>
    </div>
  );
}
