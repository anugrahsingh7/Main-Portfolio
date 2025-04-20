// components/Loader.js
"use client";
import React, { useState, useRef } from "react";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });


const Loader = () => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(Math.min(Math.round(percentage), 100));
    }
  };

  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="w-full min-h-[10%] bg-black"></div>
      <div className="w-full min-h-[70%] bg-black flex justify-center items-center">
        <video
          ref={videoRef}
          className="w-full h-[30rem] -ms-10 object-cover"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/Loader Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full min-h-[20%] flex justify-between bg-black">
        <div className={`${anton.className} min-w-[33.33%] min-h-full flex justify-start items-end p-8 text-xl font-thin text-white italic opacity-80`}>
          Anugrah Singh
        </div>
        <div className="min-w-[33.33%] w-full min-h-full flex justify-center items-end p-8">
          {/* Progress Bar */}
          <div className="w-[70%] h-[0.12rem] bg-gray-500 opacity-80 rounded-full">
            <div
              className="h-full bg-white rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full min-h-full">
          <div className="relative w-full h-full">
            <div
              className="absolute top-0 left-0 h-full rounded-lg transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
            <div className={`${anton.className}   min-w-[33.33%] absolute inset-0 flex justify-end items-end opacity-80 justify-center font-semibold text-white p-8`}>
              <span className="text-xl font-thin me-1 ">LOADING</span>
              <span className="text-4xl font-bold">{progress}</span>
              <span className="text-md ms-1 font-thin">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;