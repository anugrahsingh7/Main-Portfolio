import React, { useRef, useEffect } from 'react';
import { Anton } from "next/font/google";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function MyTeamHeading() {
  const myRef = useRef(null);
  const teamRef = useRef(null);

  

  return (
    <div className='w-screen h-screen bg-black flex items-center p-10 overflow-hidden'>
      <div className="w-full">
        <div 
          ref={myRef}
          className={`${anton.className} text-[13rem] text-left text-red-400 ps-13 will-change-transform`}
        >
          Meet my
        </div>
        
        <div 
          ref={teamRef}
          className={`${anton.className} text-[22rem] text-right text-red-400 -mt-36 pe-30 will-change-transform`}
        >
          Team
        </div>
      </div>
    </div>
  )
}

export default MyTeamHeading;