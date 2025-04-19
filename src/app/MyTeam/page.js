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
    if (containerRef.current) {
      // Define fixed positions for each profile
      let scrollPosition;
      
      switch(profileName) {
        case 'anugrah':
          scrollPosition = 0;
          break;
        case 'vaibhav':
          scrollPosition = 845;
          break;
        case 'sumit':
          scrollPosition = 1680;
          break;
        default:
          scrollPosition = 0;
      }
      
      // Direct scroll approach
      containerRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
      
      // Set active profile
      setActiveProfile(profileName);
    }
  };
  
  // Modified useEffect to ensure it doesn't interfere with scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !anugrahRef.current || !vaibhavRef.current || !sumitRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      
      // Get positions of each section
      const anugrahPosition = anugrahRef.current.offsetTop;
      const vaibhavPosition = vaibhavRef.current.offsetTop;
      const sumitPosition = sumitRef.current.offsetTop;
      
      // Calculate distances to determine which section is closest to the viewport
      const distToAnugrah = Math.abs(scrollPosition - anugrahPosition);
      const distToVaibhav = Math.abs(scrollPosition - vaibhavPosition);
      const distToSumit = Math.abs(scrollPosition - sumitPosition);
      
      // Find the minimum distance to determine active section
      const minDistance = Math.min(distToAnugrah, distToVaibhav, distToSumit);
      
      if (minDistance === distToAnugrah) {
        setActiveProfile('anugrah');
      } else if (minDistance === distToVaibhav) {
        setActiveProfile('vaibhav');
      } else if (minDistance === distToSumit) {
        setActiveProfile('sumit');
      }
    };
    
    // Prevent manual scrolling with mouse wheel
    const preventScroll = (e) => {
      e.preventDefault();
    };
    
    const container = containerRef.current;
    if (container) {
      // Initial check
      handleScroll();
      
      // Add scroll listener for active profile detection
      container.addEventListener('scroll', handleScroll);
      
      // Block mouse wheel scrolling
      container.addEventListener('wheel', preventScroll, { passive: false });
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', preventScroll);
      };
    }
  }, []);

  // Social media link handler
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div id="myteam" className="text-white w-screen h-screen flex">
      
    <div className="w-1/2 h-full bg-red-400 p-4 ">
    
    <div className="w-full h-[5%] flex items-center justify-between text-black/90">
      <h1 className= {` ${anton.className} text-3xl font-bold`}>Me & My Team</h1>
      <RiTeamLine  className="text-4xl"/>
    </div>

    <div className="w-full h-[75%]   p-4">
      <div className={`flex w-full gap-2 ${anton.className} text-black/90 text-2xl font-bold justify-between mt-24`}>
        <div className="w-1/4 text-center ">Frontend Developer</div>
        <div className="w-1/4 text-center">Backend Developer</div>
        <div className="w-1/4 text-center">UI/UX Designer</div>
        <div className="w-1/4 text-center">Full Stack Developer</div>
      </div>
      <div className={` mt-8 text-7xl ${greatVibes.className} flex justify-start`}>
        <div className="flex flex-col ">
      <button 
        onClick={() => scrollToSection(anugrahRef, 'anugrah')} 
        className={`mt-4 p-5 w-full rounded-4xl cursor-pointer transition-all hover:bg-black/80 duration-300 hover:shadow-lg hover:shadow-black/30`}
      >
        Anugrah Singh
      </button>
      <button 
        onClick={() => scrollToSection(vaibhavRef, 'vaibhav')} 
        className={`mt-4 p-5 w-full  rounded-4xl cursor-pointer transition-all hover:bg-black/80  duration-300 hover:shadow-lg hover:shadow-black/30`}
      >
        Vaibhav Sinha
      </button>
      <button 
        onClick={() => scrollToSection(sumitRef, 'sumit')} 
        className={`mt-4 p-5 w-full  rounded-4xl cursor-pointer  transition-all hover:bg-black/80  duration-300 hover:shadow-lg hover:shadow-black/30`}
      >
        Sumit Joshi
      </button>
      </div>

      </div>

      
    </div>
    <div className={`w-full h-[20%] ${anton.className} text-black/90 text-2xl font-bold flex items-center justify-center  mt-8 pe-36`}>
    We don't just code websites — we craft experiences, design futures,
    and engineer digital revolutions that make brands unforgettable.
    </div>
    
    
    </div>
    <div ref={containerRef} className="w-1/2 h-full bg-[#ffe5d5] overflow-y-scroll flex flex-col items-center">
    
    <div ref={anugrahRef} className="group bg-black/90 w-2/3 min-h-[70vh] my-32 flex flex-col items-center justify-center bg-[url('/AnugrahBG.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 p-8 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
        <div className={`${anton.className} text-4xl font-bold mb-4 text-red-400 transform group-hover:scale-110 transition-duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}>Anugrah Singh</div>
        <p className="mb-6 text-center max-w-md text-white/90 text-lg leading-relaxed font-light hover:text-white transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">I'm a BTech Computer Science student with a strong passion for full-stack web development and AI integration. I specialize in building responsive, real-world applications using React.js, Next.js, and MongoDB.</p>
        
        <div className="flex gap-4 mb-8">
          <button onClick={() => openLink('https://github.com/anugrahsinghy')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaGithub className="text-2xl" />
          </button>
          <button onClick={() => openLink('https://linkedin.com/in/anugrahsingh')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaLinkedin className="text-2xl" />
          </button>
          <button onClick={() => openLink('mailto:anugrah@example.com')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaEnvelope className="text-2xl" />
          </button>
        </div>
        
        <button onClick={() => openLink('https://anugrahsingh-portfolio.com')} className="bg-red-400 text-white px-8 py-3 rounded-full hover:bg-black/80 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]">
          View Portfolio
        </button>
      </div>
      
      <div className={`${anton.className} text-3xl font-bold relative z-10 group-hover:opacity-0 transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]`}>HOVER ME !</div>
    </div>
    
    <div ref={vaibhavRef} className="group bg-black/90 w-2/3 min-h-[70vh] my-32 flex flex-col items-center justify-center bg-[url('/VaibhavBG.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 p-8 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
        <div className={`${anton.className} text-4xl font-bold mb-4 text-red-400 transform group-hover:scale-110 transition-duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}>Vaibhav Sinha</div>
        <p className="mb-6 text-center max-w-md text-white/90 text-lg leading-relaxed font-light hover:text-white transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">Vaibhav is a proficient Full Stack Developer with deep expertise in React, Next.js, Express, Node.js, and MongoDB. With a solid foundation in Computer Science, he excels at building innovative, scalable solutions and driving technical excellence across the stack.</p>
        
        <div className="flex gap-4 mb-8">
          <button onClick={() => openLink('https://github.com/vaibhavsinha')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaGithub className="text-2xl" />
          </button>
          <button onClick={() => openLink('https://linkedin.com/in/vaibhavsinha')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaLinkedin className="text-2xl" />
          </button>
          <button onClick={() => openLink('mailto:vaibhav@example.com')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaEnvelope className="text-2xl" />
          </button>
        </div>
        
        <button onClick={() => openLink('https://vaibhavsinha-portfolio.com')} className="bg-red-400 text-white px-8 py-3 rounded-full hover:bg-black/80 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]">
          View Portfolio
        </button>
      </div>
      
      <div className={`${anton.className} text-3xl font-bold relative z-10 group-hover:opacity-0 transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]`}>HOVER ME !</div>
    </div>
    
    <div ref={sumitRef} className="group bg-black/90 w-2/3 min-h-[70vh] my-32 flex flex-col items-center justify-center bg-[url('/SumitBG.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 p-8 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
        <div className={`${anton.className} text-4xl font-bold mb-4 text-red-400 transform group-hover:scale-110 transition-duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}>Sumit Joshi</div>
        <p className="mb-6 text-center max-w-md text-white/90 text-lg leading-relaxed font-light hover:text-white transition-all duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">Sumit is an aspiring software developer with hands-on experience in the MERN stack, he is passionate about building scalable web applications. With a strong foundation in C++, data structures, and algorithms, he enjoy solving complex problems and optimising code efficiency.</p>
        
        <div className="flex gap-4 mb-8">
          <button onClick={() => openLink('https://github.com/sumitjoshi')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaGithub className="text-2xl" />
          </button>
          <button onClick={() => openLink('https://linkedin.com/in/sumitjoshi')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaLinkedin className="text-2xl" />
          </button>
          <button onClick={() => openLink('mailto:sumit@example.com')} className="bg-red-400/30 p-3 rounded-full hover:bg-red-400 hover:scale-110 transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.5)]">
            <FaEnvelope className="text-2xl" />
          </button>
        </div>
        
        <button onClick={() => openLink('https://sumitjoshi-portfolio.com')} className="bg-red-400 text-white px-8 py-3 rounded-full hover:bg-black/80 transform hover:scale-105 transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]">
          View Portfolio
        </button>
      </div>
      
      <div className={`${anton.className} text-3xl font-bold relative z-10 group-hover:opacity-0 transition-all duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]`}>HOVER ME !</div>
    </div>

    <div className="bg-transparent w-full min-h-[1vh] my-12">
     
    </div>
    
    
    
    
    </div>
    </div>
  )
}

export default MyTeam
