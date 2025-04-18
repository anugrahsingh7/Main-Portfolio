"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Anton } from 'next/font/google';

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const SkillsHeading = () => {
    const containerRef = useRef(null);
    const letterRefs = useRef([]);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    useEffect(() => {
        // Initialize the refs array
        letterRefs.current = letterRefs.current.slice(0, 6);
        
        // Set initial state - letters are invisible and positioned off-screen
        gsap.set(letterRefs.current, { 
            opacity: 0,
            y: 100,
            scale: 0.5,
            rotation: -45
        });
        
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the component is in view and hasn't been animated yet
                if (entry.isIntersecting && !hasAnimated) {
                    // Create a timeline for the animation
                    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                    
                    // Animate each letter with a stagger effect
                    tl.to(letterRefs.current, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 0.2,
                        stagger: 0.15,
                        ease: "back.out(1.5)"
                    })
                   
                    
                    
                    // Mark as animated so it doesn't repeat
                    setHasAnimated(true);
                    
                    // Disconnect the observer after animation
                    observer.disconnect();
                }
            });
        }, {
            threshold: 0.3, // Trigger when 30% of the component is visible
            rootMargin: '0px'
        });
        
        // Start observing the container
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        
        // Cleanup function
        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);
    
    return (
        <div ref={containerRef} className="h-screen w-screen bg-black text-white flex justify-center items-center p-2 gap-x-2 mb-10">
            <div ref={el => letterRefs.current[0] = el} className={`h-screen w-1/6 bg-cover flex justify-center items-center text-[14rem] rounded-sm font-extrabold grayscale hover:grayscale-[0%] transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-white/20 ${anton.className}`}
             style={{ backgroundImage: "url('https://wallpapers.com/images/hd/1080x1920-ugd930ckdcujq44s.jpg')" }}>S</div>
            <div ref={el => letterRefs.current[1] = el} className={`h-screen w-1/6 bg-cover flex justify-center items-center text-[14rem] rounded-sm font-extrabold grayscale hover:grayscale-[0%] transition-all duration-500 ease-in-out hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:shadow-white/20 ${anton.className}`}
             style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp11911501.jpg')" }}>K</div>
            <div ref={el => letterRefs.current[2] = el} className={`h-screen w-1/6 bg-cover flex justify-center items-center text-[14rem] rounded-sm font-extrabold grayscale hover:grayscale-[0%] transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-white/20 ${anton.className}`}
             style={{ backgroundImage: "url('https://img2.wallspic.com/crops/4/0/0/6/7/176004/176004-golden_gate_bridge-art-painting-cloud-water-2628x4668.png')" }}>I</div>
            <div ref={el => letterRefs.current[3] = el} className={`h-screen w-1/6 bg-cover flex justify-center items-center text-[14rem] rounded-sm font-extrabold grayscale hover:grayscale-[0%] transition-all duration-500 ease-in-out hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:shadow-white/20 ${anton.className}`}
             style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp5109115.jpg')" }}>L</div>
            <div ref={el => letterRefs.current[4] = el} className={`h-screen w-1/6 bg-cover flex justify-center items-center text-[14rem] rounded-sm font-extrabold grayscale hover:grayscale-[0%] transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-white/20 ${anton.className}`}
             style={{ backgroundImage: "url('https://wallpapersok.com/images/high/cherry-blossom-tree-anime-japanese-iphone-cyj7pbqwxve74qbt.jpg')" }}>L</div>
            <div ref={el => letterRefs.current[5] = el} className={`h-screen w-1/6 bg-cover flex justify-center items-center text-[14rem] rounded-sm font-extrabold grayscale hover:grayscale-[0%] transition-all duration-500 ease-in-out hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:shadow-white/20 ${anton.className}`}
             style={{ backgroundImage: "url('https://wallpapers.com/images/hd/galaxy-and-blue-background-wvpsz67az82dzajc.jpg')" }}>S</div>
        </div>
    );
};

export default SkillsHeading;
