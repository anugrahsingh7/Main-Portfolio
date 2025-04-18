import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Photo = () => {
  const laptopRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const laptop = laptopRef.current;
    
    // Set initial closed position
    gsap.set(laptop, {
      rotateX: -88.5,
      transformOrigin: "50% 100%",
      transformStyle: "preserve-3d",
      perspective: 1900
    });

    // Create scroll animation
    gsap.to(laptop, {
      rotateX: 0,
      perspective: 1000,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false // Set to true for debugging
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-[200vh] bg-black flex flex-col justify-start items-center pt-40">
      
      
      <StyledWrapper>
        <div className="laptop" ref={laptopRef}>
          <div className="screen">
            <div className="header" />
            <div className="text">Hello MackBook</div>
          </div>
          <div className="keyboard" />
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;

  .laptop {
    transform: scale(1.5);
    transform-style: preserve-3d;
  }
  
  .screen {
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 10px #000;
    height: 318px;
    width: 518px;
    margin: 0 auto;
    padding: 9px 9px 23px 9px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://cdn.prod.website-files.com/6718c8afa78e156621f3a2ed/6719f97569304d338ba273b0_elvis-presley-4.avif');
      background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
    transform-style: preserve-3d;
  }

  .screen::before {
    content: "";
    width: 518px;
    height: 12px;
    position: absolute;
    background: linear-gradient(#979899, transparent);
    top: -3px;
    transform: rotateX(90deg);
    border-radius: 5px 5px;
  }

  .text {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #fff;
    letter-spacing: 1px;
    text-shadow: 0 0 5px #fff;
  }
  .header {
    width: 100px;
    height: 12px;
    position: absolute;
    background-color: #000;
    top: 10px;
    left: 50%;
    transform: translate(-50%, -0%);
    border-radius: 0 0 6px 6px;
  }
  .screen::after {
    background: linear-gradient(to bottom, #272727, #0d0d0d);
    border-radius: 0 0 20px 20px;
    bottom: 2px;
    content: "";
    height: 24px;
    left: 2px;
    position: absolute;
    width: 514px;
  }
  .keyboard {
    background: radial-gradient(circle at center, #e2e3e4 85%, #a9abac 100%);
    border: solid #a0a3a7;
    border-radius: 2px 2px 12px 12px;
    border-width: 1px 2px 0 2px;
    box-shadow: inset 0 -2px 8px 0 #6c7074;
    height: 24px;
    margin-top: -10px;
    position: relative;
    width: 620px;
    z-index: 9;
  }
  .keyboard::after {
    background: #e2e3e4;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 0 4px 2px #babdbf;
    content: "";
    height: 10px;
    left: 50%;
    margin-left: -60px;
    position: absolute;
    top: 0;
    width: 120px;
  }
  .keyboard::before {
    background: 0 0;
    border-radius: 0 0 3px 3px;
    bottom: -2px;
    box-shadow: -270px 0 #272727, 250px 0 #272727;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -10px;
    position: absolute;
    width: 40px;
  }
`;

export default Photo;