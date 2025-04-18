"use client";
import { useState, useEffect } from "react";
import { Anton, Great_Vibes } from "next/font/google";
import styled from "styled-components";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import Intro from "./Intro/page";
import TechJourney from "./TechJourney/page";
import Qualities from "./Qualities/page";
import SkillsHeading from "./SkillsHeading/page";
import Skills from "./Skills/page";
import ProjectHeading from "./ProjectHeading/page";
import Projects from "./Projects/page";
import WorkHeading from "./WorkHeading/page";
import Work from "./Work/page";
import WorkTogether from "./WorkTogether/page";
import MoreProjects from "./MoreProjects/page";
import Blogs from "./Blogs/page";
import Contact from "./Contact/page";
import MyTeamHeading from "./MyTeamHeading/Page";
import MyTeam from "./MyTeam/page";

// Move the font loader outside the component
const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  const [loading, setLoading] = useState(true);

  // Define an image for each letter (update the URLs to your images)
  const letterImages = [
    "https://i.pinimg.com/736x/4f/f5/6a/4ff56a8053e4ad00c8702df8363e7298.jpg", // For letter A
    "https://www.jojosposters.com/cdn/shop/products/tazgreenday_web.jpeg?v=1562896647", // For letter N
    "https://i.redd.it/some-random-wierd-godzilla-movie-posters-that-i-found-in-v0-0lfhmmwkqpvb1.jpg?width=875&format=pjpg&auto=webp&s=e3f1e0bfd9e29bfd3d7f8993f3b653049d20881e", // For letter U
    "https://www.jojosposters.com/cdn/shop/products/tazallmans_web.jpeg?v=1559261073", // For letter G
    "https://www.designer-daily.com/wp-content/uploads/2016/02/54-2.jpg", // For letter R
    "https://i1.wp.com/www.zekagraphic.com/wp-content/uploads/2024/07/0007-Some-Random-Drawings-Poster-Design-by-Zeka-Design-scaled.jpg?fit=1810%2C2560&ssl=1", // For the second A
    "https://i.pinimg.com/736x/0f/31/af/0f31afd2411b4bf9471a28fd246fcfdc.jpg", // For letter H
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
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
          <main>
            <div className="w-full h-screen bg-transparent flex flex-col justify-center items-center p-4">
              <div
                className={`${anton.className} w-full scale-y-[1.3] cursor-default justify-center h-[75%] flex items-end text-[21.5rem] font-extrabold opacity-95 relative`}
              >
                {"ANUGRAH".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="group letter-container relative inline-block mx-1"
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
                      className={`image-letter-${index} absolute top-0 left-0 z-0 `}
                      style={{
                        backgroundImage: `url(${letterImages[index]}) `,
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
              <div className="w-full h-[25%] flex justify-between items-start -mt-10 text-4xl text-white">
                <div className="w-full bg-transparent h-full items-center flex pb-6">
                  <StyledWrapper>
                    <div
                      onClick={handleSharinganClick}
                      className="sharingon hover:cursor-pointer"
                    >
                      <div className="ring">
                        <div className="to" />
                        <div className="to" />
                        <div className="to" />
                        <div className="circle" />
                      </div>
                    </div>
                  </StyledWrapper>
                  <div
                    className={`${anton.className}  text-3xl ms-2 opacity-95 `}
                  >
                    Click Me!
                  </div>
                </div>
                <div>
                  <span
                    className={`${greatVibes.className} text-[9rem] text-red-400 pe-20 `}
                  >
                    Singh
                  </span>
                </div>
              </div>
            </div>
          </main>
          
          {/* About section */}
          
          
          
          
          
          <Intro />
          <TechJourney/>
          <Qualities/>
          <SkillsHeading/>
          <Skills/>
          <ProjectHeading/>
          <Projects/>
          <MoreProjects/>
          <WorkHeading/>
          <Work/>
          <WorkTogether/>
          
          
          <Blogs/>
          <MyTeamHeading/>
          <MyTeam/>
          <Contact/>
         



        

         <Footer/> 
          
          
        </>
      )}
    </div>
  );
}

const StyledWrapper = styled.div`
  .sharingon {
    width: 2em;
    height: 2em;
    background-color: red;
    border: 6px solid black;
    animation: rot 1s ease-in-out infinite;
  }

  .ring {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 1.2em;
    height: 1.2em;
    border: 4px solid rgb(110, 13, 13, 0.5);
    transform: translate(-50%, -50%);
  }

  .sharingon,
  .ring,
  .to,
  .circle {
    border-radius: 50%;
  }

  .to,
  .circle {
    position: absolute;
    content: "";
    width: 0.3em;
    height: 0.3em;
    background-color: black;
  }

  .to:nth-child(1) {
    top: -0.2em;
    left: 50%;
    transform: translate(-40%);
  }

  .to::before {
    content: "";
    position: absolute;
    top: -0.2em;
    right: -0.1em;
    width: 0.37em;
    height: 0.3em;
    box-sizing: border-box;
    border-left: 5px solid black;
    border-radius: 100% 0 0;
  }

  .to:nth-child(2) {
    bottom: 0.2em;
    left: -0.15em;
    transform: rotate(-120deg);
  }

  .to:nth-child(3) {
    bottom: 0.2em;
    right: -0.15em;
    transform: rotate(120deg);
  }

  .circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 0.33px;
    width: 0.33em;
    height: 0.33em;
    background-color: black;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
