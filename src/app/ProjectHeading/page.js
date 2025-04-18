'use client';


import { Anton, Great_Vibes } from "next/font/google";


import { MdOutlineWork } from "react-icons/md";


const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const anton = Anton({ subsets: ["latin"], weight: ["400"] });
function projectHeading() {
  
  
  

  
  

   

  return (
    <div className="flex flex items-center justify-center h-screen bg-red-400 overflow-hidden">
      <div className="w-1/2 h-full bg-[#f3dacb] ">

      <div className="w-full h-[10%] flex justify-between items-center text-red-400 px-5 "> <span className={`${anton.className} text-3xl font-bold`}>Anugrah Singh</span> <span className={`${anton.className} text-4xl text-black font-bold`}><MdOutlineWork /></span></div>

      <div className={`${anton.className} w-full h-[70%] flex justify-start items-center px-5 text-black text-9xl font-bold -mt-4 `}>What I’ve Been Working On</div>
      <div className={` ${greatVibes.className} w-full h-[20%] flex justify-start items-center px-5 text-red-400 text-[3rem] font-bold pe-28 leading-none -mt-6`}>🚀 Explore a curated collection of projects I've developed to tackle real-world challenges with innovative solutions. 💡</div>



      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>







      <div className="w-1/2 h-full bg-black flex flex-col justify-center items-end">

      <div className="w-full flex justify-end">
      <div className="bg-red-400 w-[75%] h-[6rem] rounded-l-2xl p-4 flex items-center justify-start mb-4"> 
      <div className="rounded-lg bg-[#f3dacb] w-[4rem] font-bold  text-3xl h-full flex items-center justify-center ">B</div>
      </div>
      </div>

      <div className="w-full flex justify-end">
      <div className="bg-red-400 w-[60%] h-[6rem] rounded-l-2xl p-4 flex items-center justify-start mb-4"> 
      <div className="rounded-lg bg-[#f3dacb] w-[4rem] font-bold  text-3xl h-full flex items-center justify-center ">U</div>
      </div>
      </div>

      <div className="w-full flex justify-end">
      <div className="bg-red-400 w-[70%] h-[6rem] rounded-l-2xl p-4 flex items-center justify-start mb-4"> 
      <div className="rounded-lg bg-[#f3dacb] w-[4rem] font-bold  text-3xl h-full flex items-center justify-center ">I</div>
      </div>
      </div>

      <div className="w-full flex justify-end">
      <div className="bg-red-400 w-[40%] h-[6rem] rounded-l-2xl p-4 flex items-center justify-start mb-4"> 
      <div className="rounded-lg bg-[#f3dacb] w-[4rem] font-bold  text-3xl h-full flex items-center justify-center ">L</div>
      </div>
      </div>

      <div className="w-full flex justify-end">
      <div className="bg-red-400 w-[90%] h-[6rem] rounded-l-2xl p-4 flex items-center justify-start mb-4"> 
      <div className="rounded-lg bg-[#f3dacb] w-[4rem] font-bold  text-3xl h-full flex items-center justify-center ">D</div>
      </div>
      </div>

      <div className="w-full flex justify-end">
      <div className="bg-red-400 w-[70%] h-[6rem] rounded-l-2xl p-4 flex items-center justify-start mb-4"> 
      <div className="rounded-lg bg-[#f3dacb] w-[4rem] font-bold  text-3xl h-full flex items-center justify-center ">S</div>
      </div>
      </div>

     

      



      
      
      </div>
     
      
    </div>
  )
}

export default projectHeading
