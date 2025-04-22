'use client'
import { useRef, useEffect } from 'react';
import { useState } from 'react';
import { gsap } from 'gsap';
import { Anton } from "next/font/google";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Great_Vibes } from "next/font/google";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Projects = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [currentSection, setCurrentSection] = useState(1);
  const marqueeRef = useRef(null);
  const marqueeTextRef = useRef(null);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Wait for the next tick to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;
      
      // Set container width to accommodate all sections
      const totalWidth = window.innerWidth * 5;
      gsap.set(container, {
        width: totalWidth,
      });
      
      // Create horizontal scroll animation
      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        animation: gsap.to(container, {
          x: () => -(totalWidth - window.innerWidth),
          ease: "none"
        }),
        onUpdate: (self) => {
          // Calculate which section is currently in view
          const progress = self.progress;
          const sectionIndex = Math.min(
            Math.floor(progress * 5),
            4
          );
          setCurrentSection(sectionIndex + 1);
        }
      });
      
      // Refresh on resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (sectionIndex) => {
    const container = containerRef.current;
    if (!container) return;
    
    const totalWidth = window.innerWidth * 5;
    const targetX = -(sectionIndex - 1) * window.innerWidth;
    
    gsap.to(container, {
      x: targetX,
      duration: 1,
      ease: "power2.inOut"
    });
    
    setCurrentSection(sectionIndex);
  };

  return (
    <div id="projects" className="overflow-x-hidden">
      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="flex relative h-screen flex-nowrap"
        style={{ width: '500vw' }} // Explicitly set width to 5x viewport width
      >
        {/* Section 1 */}
        <div
          ref={section1Ref}
          className={`relative h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#502214] transition-all duration-700 ease-in-out overflow-hidden`}
          style={{ 
            backgroundColor: hoveredSection === 1 ? "transparent" : "#502214",
          }}
        >
          {/* Background image with fade animation */}
          <div 
            className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${hoveredSection === 1 ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: "url('/Project1BG.png')" }}
          />
          
          {/* Content */}
          <div className="max-w-2xl flex flex-col items-center relative z-10">
            {/* Heading with logo overlay */}
            <div className="relative">
              <h2 
                className={`${anton.className} text-[15rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 1 ? 'text-[#502214]' : 'text-white'}`}
              >
                CANTEEN
              </h2>
              
              {/* Circular logo centered on the heading */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a 
                  target='_blank'
                  href="https://bpitcanteen.vercel.app/snacks" 
                  className="cursor-pointer w-40 h-40 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredSection(1)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <img 
                    src="/CanteenIcon.png" 
                    alt="Project1 Logo" 
                    className="w-full h-full object-contain transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
            
            {/* Subheading */}
            <p 
              className={`${anton.className} text-[2.87rem] -mt-[4rem] opacity-95 transition-colors duration-500 ${hoveredSection === 1 ? 'text-[#502214]' : 'text-white'}`}
            >
              A Food Ordering Website For College
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={section2Ref}
          className={`relative h-screen w-screen flex-shrink-0 flex items-center justify-center bg-black transition-all duration-700 ease-in-out overflow-hidden`}
          style={{ 
            backgroundColor: hoveredSection === 2 ? "transparent" : "#0f0f0f",
          }}
        >
          {/* Background image with fade animation */}
          <div 
            className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${hoveredSection === 2 ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: "url('/Project2BG.png')" }}
          />
          
          {/* Content */}
          <div className="max-w-2xl flex flex-col items-center relative z-10">
            {/* Heading with logo overlay */}
            <div className="relative">
              <h2 
                className={`${anton.className} text-[15rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 2 ? 'text-[#853fcb]' : 'text-white'}`}
              >
                ALGOHIRE
              </h2>
              
              {/* Circular logo centered on the heading */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a 
                target='_blank'
                  href="https://github.com/anugrahsingh7/AlgoHire" 
                  className="cursor-pointer w-40 h-40 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredSection(2)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <img 
                    src="/Project2Icon.png" 
                    alt="Project2 Logo" 
                    className="w-full h-full object-contain transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
            
            {/* Subheading */}
            <p 
              className={`${anton.className} text-[2rem] -mt-[4rem] opacity-95 transition-colors duration-500 ${hoveredSection === 2 ? 'text-[#fd4daf]' : 'text-white'}`}
            >
              AlgoHire is an AI-powered developer hiring platform
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div
          ref={section3Ref}
          className={`relative h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#aa2c28] transition-all duration-700 ease-in-out overflow-hidden`}
          style={{ 
            backgroundColor: hoveredSection === 3 ? "transparent" : "#aa2c28",
          }}
        >
          {/* Background image with fade animation */}
          <div 
            className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${hoveredSection === 3 ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: "url('/Project3Bg.png')" }}
          />
          
          {/* Content */}
          <div className="max-w-2xl flex flex-col items-center relative z-10">
            {/* Heading with logo overlay */}
            <div className="relative">
              <h2 
                className={`${anton.className} text-[8rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 3 ? 'text-[#aa2c28]' : 'text-white'}`}
              >
                HEADLINE HUB
              </h2>
              
              {/* Circular logo centered on the heading */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a 
                 target='_blank'
                
                  href="https://66ef5bd9ef2bafe77823fa40--ubiquitous-gelato-431c34.netlify.app/#" 
                  className="cursor-pointer w-40 h-40 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredSection(3)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <img 
                    src="/Project3Logo.png" 
                    alt="Project3 Logo" 
                    className="w-full h-full object-contain transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
            
            {/* Subheading */}
            <p 
              className={`${anton.className} text-[3rem] -mt-[2rem] opacity-95 transition-colors duration-500 ${hoveredSection === 3 ? 'text-[#aa2c28]' : 'text-white'}`}
            >
              Where every headlines connects
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div
          ref={section4Ref}
          className={`relative h-screen w-screen flex-shrink-0 flex items-center justify-center bg-black transition-all duration-700 ease-in-out overflow-hidden`}
          style={{ 
            backgroundColor: hoveredSection === 4 ? "transparent" : "#0f0f0f",
          }}
        >
          {/* Background image with fade animation */}
          <div 
            className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${hoveredSection === 4 ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: "url('/Project4BG.png')" }}
          />
          
          {/* Content */}
          <div className="max-w-2xl flex flex-col items-center relative z-10">
            {/* Heading with logo overlay */}
            <div className="relative">
              <h2 
                className={`${anton.className} text-[15rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 4 ? 'text-white' : 'text-white'}`}
              >
                X.COM
              </h2>
              
              {/* Circular logo centered on the heading */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a 
                target='_blank'
                  href="https://66c1e25e2e797777e1e44d72--timely-taffy-d9056a.netlify.app/" 
                  className="cursor-pointer w-40 h-40 rounded-full flex p-5 bg-black items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredSection(4)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <img 
                    src="/Project4LOGO.png" 
                    alt="Project4 Logo" 
                    className="w-full h-full object-contain transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
            
            {/* Subheading */}
            <p 
              className={`${anton.className} text-[3rem] -mt-[4rem] opacity-95 transition-colors duration-500 ${hoveredSection === 4 ? 'text-white' : 'text-white'}`}
            >
            A x.com clone using Tailwind Css
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div
          ref={section5Ref}
          className={`relative h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#9b00e5] transition-all duration-700 ease-in-out overflow-hidden`}
          style={{ 
            backgroundColor: hoveredSection === 5 ? "transparent" : "#9b00e5",
          }}
        >
          {/* Background image with fade animation */}
          <div 
            className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${hoveredSection === 5 ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: "url('/Project5BG.png')" }}
          />
          
          {/* Content */}
          <div className="max-w-2xl flex flex-col items-center relative z-10">
            {/* Heading with logo overlay */}
            <div className="relative">
              <h2 
                className={`${anton.className} text-[13rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 5 ? 'text-[#9b00e5]' : 'text-white'}`}
              >
                MELODEX
              </h2>
              
              {/* Circular logo centered on the heading */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a 
                target='_blank'
                  href="https://glittering-alpaca-ec7fc6.netlify.app/" 
                  className="cursor-pointer w-40 h-40 rounded-full flex p-5 bg-black items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredSection(5)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <img 
                    src="/Project5LOGO.png" 
                    alt="Project4 Logo" 
                    className="w-full h-full object-contain transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
            
            {/* Subheading */}
            <p 
              className={`${anton.className} text-[3.2rem] -mt-[4rem] opacity-95 transition-colors duration-500 ${hoveredSection === 5 ? 'text-[#9b00e5]' : 'text-white'}`}
            >
            A Music Streaming Web Platform
            </p>
          </div>
        </div>
      </div>
      
     
      
    </div>
  );
};

export default Projects;