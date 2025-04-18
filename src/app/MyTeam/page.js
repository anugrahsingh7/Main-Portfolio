"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { IoIosArrowRoundForward } from "react-icons/io";

function MyTeam() {
  const elements = useRef({
    image: useRef(null),
    text: useRef(null),
    marquee: useRef(null)
  });
  const content = useRef({
    current: 0,
    items: [
      { 
        image: "/Vaibhav.png",
        name: "Vaibhav Sinha",
        bio: "Highly enthusiastic backend specialist..."
      },
      {
        image: "/Sumit.png",
        name: "Sumit Joshi",
        bio: "Creative frontend expert..."
      }
    ]
  });

  useEffect(() => {
    const preventScroll = (e) => {
      if (!content.current.animating) return;
      e.preventDefault();
      e.stopPropagation();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  const animateTransition = (direction) => {
    content.current.animating = true;
    
    const tl = gsap.timeline({
      onComplete: () => {
        content.current.animating = false;
        content.current.current = (content.current.current + 1) % 2;
      }
    });

    // Exit animation
    tl.to(elements.current.image, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power3.inOut"
    }, 0)
    .to(elements.current.text, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power3.in"
    }, 0)
    .to(elements.current.marquee, {
      xPercent: direction === 'next' ? 100 : -100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out"
    }, 0);

    // Content update
    tl.add(() => {
      gsap.set(elements.current.marquee, { xPercent: direction === 'next' ? -100 : 100 });
    });

    // Enter animation
    tl.to(elements.current.image, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, 0.4)
    .to(elements.current.text, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, 0.5)
    .to(elements.current.marquee, {
      xPercent: 0,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out"
    }, 0.4);
  };

  return (
    <div id="myteam" className='relative w-screen h-screen bg-[#ffe5d5] flex'>
      {/* Image Column */}
      <div className="w-1/2 h-screen py-17 ps-40 pe-14 overflow-hidden">
        <div className="w-full h-full overflow-hidden rounded-xl">
          <img
            ref={elements.current.image}
            className="object-cover w-full h-full"
            src={content.current.items[content.current.current].image}
            alt="Team member"
          />
        </div>
      </div>

      {/* Text Column */}
      <div className="w-1/2 h-screen p-10 pt-30">
        <div ref={elements.current.text} className="w-1/2 font-medium p-2 text-xl">
          <span className="font-bold">
            {content.current.items[content.current.current].name}
          </span> 
          {content.current.items[content.current.current].bio}
        </div>
        
        <div className="w-1/2">
          <button 
            onClick={() => animateTransition('next')}
            className="bg-red-400 flex justify-center items-center p-2 text-4xl rounded-full cursor-pointer mt-5 ms-1 hover:scale-110 transition-transform"
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>

      {/* Marquee */}
      <div 
        ref={elements.current.marquee}
        className="absolute text-[12rem] left-0 bottom-1 px-10 w-full flex justify-center pointer-events-none"
      >
        {content.current.items[content.current.current].name}
      </div>
    </div>
  );
}

export default MyTeam;