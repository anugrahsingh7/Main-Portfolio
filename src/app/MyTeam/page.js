'use client'
import { Anton, Great_Vibes } from "next/font/google";
import { RiTeamLine } from "react-icons/ri";
import { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

function MyTeam() {
  const anugrahRef = useRef(null);
  const vaibhavRef = useRef(null);
  const sumitRef = useRef(null);
  const containerRef = useRef(null);
  const [activeProfile, setActiveProfile] = useState('anugrah');
  
  const scrollToSection = (ref, profileName) => {
    // Hide all profiles
    [anugrahRef.current, vaibhavRef.current, sumitRef.current].forEach(profile => {
      if (profile) {
        profile.style.display = 'none';
      }
    });
    
    // Show selected profile
    if (ref.current) {
      ref.current.style.display = 'flex';
    }
    
    setActiveProfile(profileName);
  };
  
  // Initialize display on component mount
  useEffect(() => {
    if (anugrahRef.current) {
      anugrahRef.current.style.display = 'flex';
    }
    if (vaibhavRef.current) {
      vaibhavRef.current.style.display = 'none';
    }
    if (sumitRef.current) {
      sumitRef.current.style.display = 'none';
    }
  }, []);

  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div id="myteam" className="text-white w-screen min-h-screen flex flex-col lg:flex-row">
      {/* LEFT PANEL */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-red-400 p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative">
        {/* Header */}
        <div className="flex items-center justify-between text-black/90 mb-2 sm:mb-4">
          <h1 className={`${anton.className} font-bold`}
          style={{ fontSize: "clamp(0.75rem, 3vw, 4.5em)" }}>Me & My Team</h1>
          <RiTeamLine className=""
          style={{ fontSize: "clamp(1rem, 4vw, 6em)" }}/>
        </div>

        {/* Roles Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 ${anton.className} text-black/90 text-base  font-bold mt-2 sm:mt-4`}
        style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}>
          <div className="text-center bg-white/30 rounded-lg py-1.5 sm:py-2 shadow-md">Frontend Developer</div>
          <div className="text-center bg-white/30 rounded-lg py-1.5 sm:py-2 shadow-md">Backend Developer</div>
          <div className="text-center bg-white/30 rounded-lg py-1.5 sm:py-2 shadow-md">Modern UI Designer</div>
          <div className="text-center bg-white/30 rounded-lg py-1.5 sm:py-2 shadow-md">Full Stack Developer</div>
        </div>

        {/* Names Card */}
        <div className={`flex-1 flex flex-col items-center justify-center my-4 sm:my-6`}>
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm rounded-2xl  py-4 sm:py-6 px-3 sm:px-4 flex flex-col gap-2 sm:gap-3">
            <button 
              onClick={() => scrollToSection(anugrahRef, 'anugrah')} 
              className={`cursor-pointer transition-all duration-300 rounded-xl py-2 sm:py-3 px-2  ${greatVibes.className} font-bold text-white  ${activeProfile === 'anugrah' ? ' bg-black/30 shadow-lg scale-105' : ' hover:bg-black/60 hover:scale-105'}`}
            
              style={{ fontSize: "clamp(0.65rem, 2.6vw, 3.9rem)" }}>
              Anugrah Singh
            </button>
            <div className="border-b border-white/20 mx-2"></div>
            <button 
              onClick={() => scrollToSection(vaibhavRef, 'vaibhav')} 
              className={`cursor-pointer transition-all duration-300 rounded-xl py-2 sm:py-3 px-2  ${greatVibes.className} font-bold text-white ${activeProfile === 'vaibhav' ? 'bg-black/30 shadow-lg scale-105' : ' hover:bg-black/60 hover:scale-105'}`}
              style={{ fontSize: "clamp(0.65rem, 2.6vw, 3.9rem)" }}
            >
              Vaibhav Sinha
            </button>
            <div className="border-b border-white/20 mx-2"></div>
            <button 
              onClick={() => scrollToSection(sumitRef, 'sumit')} 
              className={`cursor-pointer transition-all duration-300 rounded-xl py-2 sm:py-3 px-2  ${greatVibes.className} font-bold text-white ${activeProfile === 'sumit' ? 'bg-black/30 shadow-lg scale-105' : ' hover:bg-black/60 hover:scale-105'}`}
              style={{ fontSize: "clamp(0.65rem, 2.6vw, 3.9rem)" }}
            >
              Sumit Joshi
            </button>
          </div>
        </div>

        {/* Quote */}
        <div className={`w-full ${anton.className} text-black/90  font-bold flex items-center justify-center px-2 sm:px-4 md:px-8 pb-2 sm:pb-4 md:pb-6`}
         style={{ fontSize: "clamp(0.375rem, 1.5vw, 2.25rem)" }}>
          <span className="bg-white/30 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-md text-center">
            We don't just code websites — we craft experiences, design futures, and engineer digital revolutions that make brands unforgettable.
          </span>
        </div>
      </div>

      <div ref={containerRef} className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-[#ffe5d5] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div ref={anugrahRef} className="group bg-black/90 w-[75%] h-[80%] flex flex-col items-center justify-center bg-[url('/AnugrahBG.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4">
              <div className={`${anton.className} font-bold text-red-400 transform group-hover:scale-110 transition-duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center`}
              style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}
              >Anugrah Singh</div>
              <p className="text-center max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] text-white/90  leading-relaxed font-light hover:text-white transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
               style={{ fontSize: "clamp(0.3rem, 1.3vw, 2rem)" }}
              >I'm a passionate web developer with hands-on experience in modern technologies like GSAP, Locomotive Scroll, Lenis, Spline, Framer Motion, and Three.js. I specialize in creating smooth, interactive, and visually captivating user experiences using React, Next.js, and MongoDB.</p>
              
              <div className="flex gap-2 sm:gap-3">
                <button onClick={() => openLink('https://github.com/anugrahsingh7')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaGithub className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
                <button onClick={() => openLink('https://www.linkedin.com/in/anugrah-singh-7777/')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaLinkedin className="text-base"
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
                <button onClick={() => openLink('mailto:anugrahsingh7777@gmail.com')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaEnvelope className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
              </div>
              
              <button onClick={() => openLink('https://anugrahsingh-portfolio.com')} className=" bg-red-400 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full hover:bg-black/80 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
                 style={{ fontSize: "clamp(0.25rem, 1vw, 1.5rem)" }}>
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className={`${anton.className} text-base sm:text-lg md:text-xl lg:text-2xl opacity-75 font-bold relative z-10 group-hover:opacity-0 transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] text-center`}>HOVER ME !</div>
        </div>
        
        <div ref={vaibhavRef} className="group bg-black/90 w-[75%] h-[80%] flex flex-col items-center justify-center bg-[url('/VaibhavBG.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4">
              <div className={`${anton.className}  font-bold text-red-400 transform group-hover:scale-110 transition-duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center`}
              style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}>Vaibhav Sinha</div>
              <p className="text-center max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] text-white/90 leading-relaxed font-light hover:text-white transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
               style={{ fontSize: "clamp(0.3rem, 1.3vw, 2rem)" }}
              >Vaibhav is a proficient Full Stack Developer with deep expertise in React, Next.js, Express, Node.js, and MongoDB. With a solid foundation in Computer Science, he excels at building innovative, scalable solutions and driving technical excellence across the stack.</p>
              
              <div className="flex gap-2 sm:gap-3">
                <button onClick={() => openLink('https://github.com/VaibhavSinha25')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaGithub className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
                <button onClick={() => openLink('https://www.linkedin.com/in/-vaibhav-sinha')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaLinkedin className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
                <button onClick={() => openLink('mailto:vaibhavsinha0825@gmail.com')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaEnvelope className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
              </div>
              
              <button onClick={() => openLink(' ')} className="bg-red-400 text-white  px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full hover:bg-black/80 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
                 style={{ fontSize: "clamp(0.25rem, 1vw, 1.5rem)" }}>
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className={`${anton.className} text-base sm:text-lg md:text-xl lg:text-2xl opacity-75 font-bold relative z-10 group-hover:opacity-0 transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] text-center`}>HOVER ME !</div>
        </div>
        
        <div ref={sumitRef} className="group w-[75%] h-[80%] flex flex-col items-center justify-center bg-[url('/SumitBG.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4">
              <div className={`${anton.className}  font-bold text-red-400 transform group-hover:scale-110 transition-duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center`}
              style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}>Sumit Joshi</div>
              <p className="text-center max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] text-white/90 leading-relaxed font-light hover:text-white transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
                style={{ fontSize: "clamp(0.4rem, 1.5vw, 3.7rem)" }}>
                Sumit is an aspiring software developer with hands-on experience in the MERN stack, he is passionate about building scalable web applications. With a strong foundation in C++, data structures, and algorithms, he enjoy solving complex problems and optimising code efficiency.</p>
              
              <div className="flex gap-2 sm:gap-3">
                <button onClick={() => openLink('https://github.com/josum06')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaGithub className="text-base " 
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}
                  />
                </button>
                <button onClick={() => openLink('https://www.linkedin.com/in/sumit-joshi-417a91258/')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaLinkedin className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
                <button onClick={() => openLink('mailto:sumit.joshi0616@gmail.com')} className="bg-red-400/30 cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
                  <FaEnvelope className="text-base "
                   style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }} />
                </button>
              </div>
              
              <button onClick={() => openLink('  ')} className="bg-red-400 text-white  px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full hover:bg-black/80 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
                 style={{ fontSize: "clamp(0.25rem, 1vw, 1.5rem)" }}>
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className={`${anton.className} text-base sm:text-lg md:text-xl lg:text-2xl opacity-75 font-bold relative z-10 group-hover:opacity-0 transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] text-center`}>HOVER ME !</div>
        </div>
      </div>
    </div>
  )
}

export default MyTeam
