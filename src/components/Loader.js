// components/Loader.js
"use client";
import React, { useState, useRef } from "react";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });


const Loader = () => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Set progress to 1% as soon as video metadata is loaded
  const handleLoadedMetadata = () => {
    setProgress(1);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(Math.min(Math.round(percentage), 100));
    }
  };

  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <video
          ref={videoRef}
          className="w-full h-[35rem] -ms-10 object-cover bg-black"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src="/Loader2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
    </div>
  );
};

export default Loader;