'use client'
import { useRef, useState } from 'react';
import { Anton } from "next/font/google";
import { Great_Vibes } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Projects = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  return (
    <div id="projects" className="overflow-x-hidden min-h-screen flex flex-col">
      {/* Section 1 */}
      <div
        className={`relative h-screen w-full flex-shrink-0 flex items-center justify-center bg-[#502214] transition-all duration-700 ease-in-out overflow-hidden`}
        style={{ 
          backgroundColor: hoveredSection === 1 ? "transparent" : "#502214",
        }}
      >
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
                className={`${anton.className} text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 1 ? 'text-[#502214]' : 'text-white'}`}
              >
                CANTEEN
              </h2>
              
              {/* Circular logo centered on the heading */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a 
                  target='_blank'
                  href="https://bpitcanteen.vercel.app/snacks" 
                  className="cursor-pointer w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
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
              className={`${anton.className} text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.87rem] -mt-[2rem] sm:-mt-[3rem] md:-mt-[4rem] opacity-95 transition-colors duration-500 ${hoveredSection === 1 ? 'text-[#502214]' : 'text-white'}`}
            >
              A Food Ordering Website For College
            </p>
          </div>
        </div>
        </div>
      

      {/* Section 2 */}
      <div
        className={`relative h-screen w-full flex-shrink-0 flex items-center justify-center bg-black transition-all duration-700 ease-in-out overflow-hidden`}
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
        className={`relative h-screen w-full flex-shrink-0 flex items-center justify-center bg-[#aa2c28] transition-all duration-700 ease-in-out overflow-hidden`}
        style={{ 
          backgroundColor: hoveredSection === 3 ? "transparent" : "#f2f2f2",
        }}
      >
        {/* Background image with fade animation */}
        <div 
          className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${hoveredSection === 3 ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: "url('/CC.png')" }}
        />
        {/* Content */}
        <div className="max-w-2xl flex flex-col items-center relative z-10">
          {/* Heading with logo overlay */}
          <div className="relative">
            <h2 
              className={`${anton.className} text-[6rem] opacity-95 font-bold relative z-0 transition-colors duration-500 ${hoveredSection === 3 ? 'text-white' : 'text-black'}`}
            >
              Campus Connect
            </h2>
            {/* Circular logo centered on the heading */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <a 
                target='_blank'
                href="https://campus-connect-chi-ten.vercel.app/Network" 
                className="cursor-pointer w-40 h-40 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setHoveredSection(3)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <img 
                  src="/CCLogo.png" 
                  alt="Project3 Logo" 
                  className="w-full h-full object-cover transition-transform duration-300" 
                />
              </a>
            </div>
          </div>
          {/* Subheading */}
          <p 
            className={`${anton.className} text-[1.5rem] mt-1 opacity-95 transition-colors duration-500 ${hoveredSection === 3 ? 'text-white' : 'text-black'}`}
          >
            Bringing Students Together, One Connection at a Time.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className={`relative h-screen w-full flex-shrink-0 flex items-center justify-center bg-black transition-all duration-700 ease-in-out overflow-hidden`}
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
        className={`relative h-screen w-full flex-shrink-0 flex items-center justify-center bg-[#9b00e5] transition-all duration-700 ease-in-out overflow-hidden`}
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
  );
};

export default Projects;