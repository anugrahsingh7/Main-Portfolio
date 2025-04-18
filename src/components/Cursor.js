"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Set initial position
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', updateCursor);

    const followMouse = () => {
      // Reduced delay - much tighter follow
      posX += (mouseX - posX) / 4; // Changed from 8 to 4 for faster follow
      posY += (mouseY - posY) / 4;
      
      gsap.to(cursor, {
        x: posX,
        y: posY,
        ease: "power2.out", // Changed to power2 for more direct movement
        duration: 0.3 // Reduced duration for snappier movement
      });
      
      requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-7 h-7 overflow-hidden rounded-full pointer-events-none"
      style={{
        transform: 'translate(-50%, -50%)',
        zIndex: 99999
      }}
    >
      <img 
        className='w-full h-full object-contain'
        src="/rennigan.png" 
        alt="cursor"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};

export default Cursor;