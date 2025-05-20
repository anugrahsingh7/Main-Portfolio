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
          className={`${anton.className} text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[13rem] text-left text-red-400 ps-4 sm:ps-8 md:ps-13 will-change-transform`}
        >
          Meet my
        </div>
        
        <div 
          ref={teamRef}
          className={`${anton.className} text-[5rem] sm:text-[10rem] md:text-[16rem] lg:text-[22rem] text-right text-red-400 -mt-10 sm:-mt-20 md:-mt-28 lg:-mt-36 pe-4 sm:pe-10 md:pe-20 lg:pe-30 will-change-transform`}
        >
          Team
        </div>
      </div>
    </div>
  )
}

export default MyTeamHeading;