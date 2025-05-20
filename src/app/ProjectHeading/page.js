'use client';

import { Anton, Great_Vibes } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineWork } from "react-icons/md";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function projectHeading() {
  const componentRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const letterRefs = useRef([]);
  const animationPlayedRef = useRef(false);
  
  // The main animation sequence
  const playAnimation = () => {
    if (animationPlayedRef.current) return;
    animationPlayedRef.current = true;
    
    // Initial setup - hide everything only when we're about to animate
    gsap.set(leftSideRef.current, { x: "-100%" });
    gsap.set(rightSideRef.current, { x: "100%" });
    gsap.set(".letter-block", { x: 300, opacity: 0 });
    gsap.set(".heading-text", { opacity: 0, y: 100 });
    gsap.set(".subheading-text", { opacity: 0 });
    gsap.set(".name-text", { opacity: 0, scale: 0.5 });
    gsap.set(".icon-wrapper", { opacity: 0, rotation: -180 });
    
    // Create and play the animation sequence
    const masterTl = gsap.timeline();
    
    masterTl
      // Slide in the two halves
      .to([leftSideRef.current, rightSideRef.current], {
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
      })
      // Animate the name and icon
      .to(".name-text", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
      }, "-=0.5")
      .to(".icon-wrapper", {
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      }, "-=0.3")
      // Reveal the main heading with a cool effect
      .to(".heading-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.2")
      // Reveal the subheading with a typewriter-like effect
      .to(".subheading-text", {
        opacity: 1,
        duration: 0.8,
        ease: "none",
      })
      // Animate in all the letters on the right
      .to(".letter-block", {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "back.out(1.7)",
      }, "-=0.8");
      
    // Setup ongoing animations
    
    // Floating animation for the subheading
    gsap.to(".subheading-text", {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2 // Start after main animation
    });

    // Random glitch effect on the heading
    const triggerGlitch = () => {
      const tl = gsap.timeline();
      tl.to(".heading-text", {
        skewX: 10,
        duration: 0.1,
        ease: "power4.inOut"
      })
      .to(".heading-text", {
        skewX: 0,
        duration: 0.1,
        ease: "power4.inOut"
      });
      
      // Schedule next glitch
      const delay = Math.random() * 5 + 3;
      setTimeout(triggerGlitch, delay * 1000);
    };
    
    // Start glitching after main animation
    setTimeout(triggerGlitch, 2000);
    
    return masterTl;
  };
  
  useEffect(() => {
    // Make sure elements are visible if JavaScript is disabled
    // or if ScrollTrigger fails to initialize
    if (!componentRef.current) return;
    
    // First approach: Set up ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: componentRef.current,
      start: "top 80%", // Trigger when 20% of the component is in view
      onEnter: playAnimation,
      once: true
    });
    
    // Second approach: Ensure animation plays if component is already in view
    // on first render (which ScrollTrigger might miss)
    const timeout = setTimeout(() => {
      const rect = componentRef.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        playAnimation();
      }
    }, 100);
    
    // Third approach: Force animation to play anyway after a delay
    // This is a fallback if all else fails
    const forcePlayTimeout = setTimeout(() => {
      playAnimation();
    }, 1000);
    
    // Set up hover animations for letter blocks
    letterRefs.current.forEach((letterBlock, index) => {
      if (!letterBlock) return;
      
      // Save original width for hover animations
      letterBlock.dataset.originalWidth = getComputedStyle(letterBlock).width;
      
      // Create a hover animation for each letter block
      const letterEl = letterBlock.querySelector(".letter");
      if (!letterEl) return;
      
      gsap.set(letterEl, { transformOrigin: "center center" });
      
      letterBlock.addEventListener("mouseenter", () => {
        gsap.to(letterBlock, {
          width: index % 2 === 0 ? "85%" : "75%",
          duration: 0.4,
          ease: "power2.inOut"
        });
        gsap.to(letterEl, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(2)"
        });
      });
      
      letterBlock.addEventListener("mouseleave", () => {
        gsap.to(letterBlock, {
          width: letterBlock.dataset.originalWidth,
          duration: 0.4,
          ease: "power2.inOut"
        });
        gsap.to(letterEl, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(2)"
        });
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(timeout);
      clearTimeout(forcePlayTimeout);
    };
  }, []);
  
  return (
    <div ref={componentRef} className="flex items-center justify-center h-screen bg-red-400 overflow-hidden">
      <div ref={leftSideRef} className="w-1/2 h-full bg-[#f3dacb] relative">
        <div className="w-full h-[10%] flex justify-between items-center text-red-400 px-[clamp(1.5rem,3vw,4rem)]">
          <span className={`${anton.className} text-[clamp(2rem,2.5vw,4rem)] font-bold name-text`}>Anugrah Singh</span>
          <span className={`${anton.className} text-[clamp(2.5rem,3vw,5rem)] text-black font-bold icon-wrapper`}><MdOutlineWork /></span>
        </div>

        <div className={`${anton.className} w-full h-[70%] flex justify-start items-center px-[clamp(1.5rem,3vw,4rem)] text-black text-[clamp(4rem,5vw,10rem)] font-bold -mt-[clamp(1.5rem,3vw,4rem)] heading-text`}>
          What I've Been Working On
        </div>
        
        <div className={`${greatVibes.className} w-full h-[20%] flex justify-start items-center px-[clamp(1.5rem,3vw,4rem)] text-red-400 text-[clamp(3rem,3vw,4rem)] font-bold pe-[clamp(3rem,6vw,10rem)] leading-none -mt-[clamp(2rem,3vw,4.5rem)] subheading-text`}>
          🚀 Explore a curated collection of projects I've developed to tackle real-world challenges with innovative solutions. 💡
        </div>
      </div>

      <div ref={rightSideRef} className="w-1/2 h-full bg-black flex flex-col justify-center items-end">
        <div className="w-full flex justify-end">
          <div 
            className="w-[80%] h-[clamp(4.5rem,6.5vw,9.5rem)] rounded-l-2xl p-[clamp(1rem,1.5vw,2rem)] flex items-center justify-start mb-[clamp(1rem,1.5vw,2rem)] letter-block"
            ref={el => letterRefs.current[0] = el}
            style={{ 
              background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
            }}
          > 
            <div className="rounded-lg bg-[#f3dacb] w-[clamp(3rem,3.5vw,5rem)] font-bold text-[clamp(2rem,2vw,3.5rem)] h-full flex items-center justify-center letter">B</div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div 
            className="w-[65%] h-[clamp(4.5rem,6.5vw,9.5rem)] rounded-l-2xl p-[clamp(1rem,1.5vw,2rem)] flex items-center justify-start mb-[clamp(1rem,1.5vw,2rem)] letter-block"
            ref={el => letterRefs.current[1] = el}
            style={{ 
              background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
            }}
          > 
            <div className="rounded-lg bg-[#f3dacb] w-[clamp(3rem,3.5vw,5rem)] font-bold text-[clamp(2rem,2vw,3.5rem)] h-full flex items-center justify-center letter">U</div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div 
            className="w-[75%] h-[clamp(4.5rem,6.5vw,9.5rem)] rounded-l-2xl p-[clamp(1rem,1.5vw,2rem)] flex items-center justify-start mb-[clamp(1rem,1.5vw,2rem)] letter-block"
            ref={el => letterRefs.current[2] = el}
            style={{ 
              background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
            }}
          > 
            <div className="rounded-lg bg-[#f3dacb] w-[clamp(3rem,3.5vw,5rem)] font-bold text-[clamp(2rem,2vw,3.5rem)] h-full flex items-center justify-center letter">I</div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div 
            className="w-[45%] h-[clamp(4.5rem,6.5vw,9.5rem)] rounded-l-2xl p-[clamp(1rem,1.5vw,2rem)] flex items-center justify-start mb-[clamp(1rem,1.5vw,2rem)] letter-block"
            ref={el => letterRefs.current[3] = el}
            style={{ 
              background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
            }}
          > 
            <div className="rounded-lg bg-[#f3dacb] w-[clamp(3rem,3.5vw,5rem)] font-bold text-[clamp(2rem,2vw,3.5rem)] h-full flex items-center justify-center letter">L</div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div 
            className="w-[95%] h-[clamp(4.5rem,6.5vw,9.5rem)] rounded-l-2xl p-[clamp(1rem,1.5vw,2rem)] flex items-center justify-start mb-[clamp(1rem,1.5vw,2rem)] letter-block"
            ref={el => letterRefs.current[4] = el}
            style={{ 
              background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
            }}
          > 
            <div className="rounded-lg bg-[#f3dacb] w-[clamp(3rem,3.5vw,5rem)] font-bold text-[clamp(2rem,2vw,3.5rem)] h-full flex items-center justify-center letter">D</div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div 
            className="w-[75%] h-[clamp(4.5rem,6.5vw,9.5rem)] rounded-l-2xl p-[clamp(1rem,1.5vw,2rem)] flex items-center justify-start mb-[clamp(1rem,1.5vw,2rem)] letter-block"
            ref={el => letterRefs.current[5] = el}
            style={{ 
              background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
            }}
          > 
            <div className="rounded-lg bg-[#f3dacb] w-[clamp(3rem,3.5vw,5rem)] font-bold text-[clamp(2rem,2vw,3.5rem)] h-full flex items-center justify-center letter">S</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projectHeading;