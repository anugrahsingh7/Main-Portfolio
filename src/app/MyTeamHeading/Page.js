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

  useEffect(() => {
    // Animation for "MY" (moves right)
    gsap.to(myRef.current, {
      x: 300,
      scrollTrigger: {
        trigger: myRef.current,
        start: "top 80%", // starts when top of element hits 80% of viewport height
        end: "bottom 20%", // ends when bottom of element hits 20% of viewport height
        scrub: 1,
        markers: true, // Enable markers to see trigger points
      }
    });

    // Animation for "TEAM" (moves left)
    gsap.to(teamRef.current, {
      x: -300,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        markers: true, // Enable markers to see trigger points
      }
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

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