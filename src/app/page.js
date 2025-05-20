"use client";
import { useState, useEffect, useRef } from "react";
import { Anton, Great_Vibes } from "next/font/google";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import Intro from "./Intro/page";
import TechJourney from "./TechJourney/page";
import SkillsHeading from "./SkillsHeading/page";
import Skills from "./Skills/page";
import ProjectHeading from "./ProjectHeading/page";
import Projects from "./Projects/page";
import WorkHeading from "./WorkHeading/page";
import Work from "./Work/page";
import WorkTogether from "./WorkTogether/page";
import MoreProjects from "./MoreProjects/page";
import Blogs from "./Blogs/page";
import MyTeamHeading from "./MyTeamHeading/Page";
import MyTeam from "./MyTeam/page";
import GetInTouch from "./GetInTouch/page";
import Qualities2 from "./Qualities2/page";

// Move the font loader outside the component
const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainTimelineRef = useRef(null);
  const sectionsRef = useRef([]);

  // Define an image for each letter (update the URLs to your images)
  const letterImages = [
    "/A.jpg", // For letter A
    "/N.jpg", // For letter N
    "/U.jpg", // For letter U
    "/G.jpg", // For letter G
    "/R.jpg", // For letter R
    "/2ndA.jpg", // For the second A
    "/H.jpg", // For letter H
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize the main timeline
      mainTimelineRef.current = gsap.timeline();
      
      // Main intro animation sequence
      gsap.fromTo(
        ".letter-container",
        { opacity: 0, y: 50, rotation: -15, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)",
        }
      );

      // Set up scroll-based animations
      const sections = document.querySelectorAll('main > div, section');
      sectionsRef.current = sections;
      
      sections.forEach((section, index) => {
        if (index === 0) return; // Skip first section (hero)
        
        // Create animation for each section
        gsap.fromTo(section, 
          { 
            y: 100, 
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            }
          }
        );
        
        // Add additional animations for elements within sections
        const headings = section.querySelectorAll('h1, h2, h3');
        const paragraphs = section.querySelectorAll('p');
        const buttons = section.querySelectorAll('button');
        const images = section.querySelectorAll('img');
        
        gsap.fromTo(headings, 
          { x: -50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );
        
        gsap.fromTo(paragraphs, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.1,
            delay: 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );

        gsap.fromTo(buttons, 
          { scale: 0.8, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.1,
            delay: 0.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );

        gsap.fromTo(images, 
          { rotation: -5, scale: 0.9, opacity: 0 },
          { 
            rotation: 0, 
            scale: 1, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
      
      // Clean up ScrollTrigger on component unmount
      return () => {
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      };
    }
  }, [loading]);

  const handleMouseEnter = (index) => {
    gsap.to(`.white-letter-${index}`, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(`.image-letter-${index}`, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(`.white-letter-${index}`, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(`.image-letter-${index}`, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleSharinganClick = () => {
    document.body.classList.toggle("red-filter");
    // Optionally, add a class that triggers a "laggy" effect, such as reducing animation FPS or adding CSS transition.
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          
          
          <div className="relative w-full h-screen bg-[url('/RedBG2.jpeg')] bg-cover bg-center overflow-hidden">
  {/* ANUGRAH in center */}
  <div
    className={`${anton.className} absolute inset-0 flex justify-center items-center scale-y-[1.3] cursor-default text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[21.5rem] font-extrabold opacity-95 transition-all duration-300`}
  >
    {"ANUGRAH".split("").map((letter, index) => (
      <span
        key={index}
        className="group letter-container relative inline-block mx-[2px] sm:mx-1"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      >
        <span
          className={`white-letter-${index} relative z-10`}
          style={{ color: "#ffe5d5" }}
        >
          {letter}
        </span>
        <span
          className={`image-letter-${index} absolute top-0 left-0 z-0`}
          style={{
            backgroundImage: `url(${letterImages[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            opacity: 0,
          }}
        >
          {letter}
        </span>
      </span>
    ))}
  </div>

  {/* Bottom Left - Click Me! */}
  <div className="absolute bottom-4 left-4 flex items-center text-white">
    <StyledWrapper>
      <div className="sharingon scale-65">
        <div className="ring">
          <div className="to" />
          <div className="to" />
          <div className="to" />
          <div className="circle" />
        </div>
      </div>
    </StyledWrapper>
    <div
      className={`${anton.className} text-xl sm:text-2xl md:text-3xl -ms-4 text-[#ffe5d5] opacity-95`}
    >
      Click Me!
    </div>
  </div>

  {/* Bottom Right - Singh */}
  <div className="absolute bottom-4 right-6 text-red-400 text-right">
    <span
      className={`${greatVibes.className} text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem]`}
    >
      Singh
    </span>
  </div>
</div>



          
          <Intro />
          <TechJourney/>
          <Qualities2/>
          <SkillsHeading/>
          <Skills/>
          <ProjectHeading/>
          <Projects/>
          <MoreProjects/>
          {/* <WorkHeading/> */}
          <Work/>
          {/* <WorkTogether/>
          <Blogs/> */}
          <MyTeamHeading/>
          <MyTeam/>
          <GetInTouch/>
          <Footer/> 
          
        </>
      )}
    </div>
  );
}

const StyledWrapper = styled.div`
  .sharingon {
    width: 6em;
    height: 6em;
    
    background-color: red;
    border: 6px solid black;
    animation: rot 1s ease-in-out infinite;
  }

  .ring {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 3.5em;
    height: 3.5em;
    border: 4px solid rgb(110, 13 ,13 ,0.5);
    transform: translate(-50%,-50%);
  }

  .sharingon, .ring, .to,.circle {
    border-radius: 50%;
  }

  .to,.circle {
    position: absolute;
    content: "";
    width: 0.9em;
    height: 0.9em;
    background-color: black;
  }

  .to:nth-child(1) {
    top: -0.5em;
    left: 50%;
    transform: translate(-40%);
  }

  .to::before {
    content: "";
    position: absolute;
    top: -0.5em;
    right: -0.2em;
    width: 1.1em;
    height: 0.9em;
    box-sizing: border-box;
    border-left: 16px solid black;
    border-radius: 100% 0 0;
  }

  .to:nth-child(2) {
    bottom: 0.5em;
    left: -0.35em;
    transform: rotate(-120deg);
  }

  .to:nth-child(3) {
    bottom: 0.5em;
    right: -0.35em;
    transform: rotate(120deg);
  }

  .circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 20px 1px;
    width: 1em;
    height: 1em;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

