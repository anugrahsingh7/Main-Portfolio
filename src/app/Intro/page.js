"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Yellowtail } from "next/font/google";
import styled from 'styled-components';
import { GiNinjaStar } from "react-icons/gi";

// Initialize font outside the component
const yellowtail = Yellowtail({ 
  subsets: ["latin"], 
  weight: ["400"],
  display: 'swap' 
});

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Intro = () => {
  const paragraphRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  
  return (
    <div id="intro" className={`h-screen w-screen bg-black ${yellowtail.className}`}>
  <div className="fixed top-0 left-0 text-white">
    {/* Empty fixed div - consider removing if unused */}
  </div>

  <div className="w-screen h-[80%] p-5 flex justify-center items-center">
    <div className="p-4 md:p-8 lg:p-18">
      <div className="h-30 flex items-start justify-between">
        <div className="flex items-center w-full justify-between">
          <GiNinjaStar className="text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <hr className="bg-[#ffe5d5] w-[85%] sm:w-[90%] h-[0.1rem]" />
          <GiNinjaStar className="text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
        </div>
      </div>
      <p 
        ref={paragraphRef} 
        className="text-[#ffe5d5] text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal opacity-90 z-10 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed"
      >
        Hi, I'm a Computer Science student with a passion for
        technology and problem-solving. I am always eager to learn and
        explore new areas in the tech world, building a strong foundation
        for my future career while working on innovative solutions.
      </p>
    </div>
  </div>

  <div className="w-screen h-[20%] flex flex-col lg:flex-row">
    <div className="w-full lg:w-[60%] h-full flex justify-center items-center">
      
    </div>

    <div className="w-full lg:w-[50%] h-full flex justify-center items-center">
      <StyledWrapper>
        <div className="card -mt-14 -ms-56">
          <div className="loader">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">~ Anugrah,</p>
            <div className="words">
              <span className="word text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">the Innovative Developer 💻</span>
              <span className="word text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">the Ambitious Learner 📚</span>
              <span className="word text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">the Determined Engineer ⚙️</span>
              <span className="word text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">the Visionary Creator 🚀</span>
              <span className="word text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">the Analytical Thinker 🧠</span>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  </div>
</div>

  );
};

const StyledWrapper = styled.div`
  .card {
    padding: 0.5rem 1rem;
    @media (min-width: 640px) {
      padding: 0.75rem 1.5rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem 2rem;
    }
    border-radius: 1.25rem;
  }
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 30px;
    @media (min-width: 640px) {
      height: 35px;
    }
    @media (min-width: 1024px) {
      height: 40px;
    }
    padding: 8px 8px;
    @media (min-width: 640px) {
      padding: 10px 10px;
    }
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 115%;
    padding-left: 4px;
    @media (min-width: 640px) {
      padding-left: 6px;
    }
    color: #ff6467;
    animation: spin_4991 4s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }
`;

export default Intro;