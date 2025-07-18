// app/MobileWarning.js

import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function MobileWarning() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-black ">
      {/* Animated SVG background shapes in red and dark tones */}
      
      {/* Glassmorphic Card - now dark with red accent */}
      <div className="relative z-10 max-w-md w-full bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-red-500/40 animate-float">
        {/* SVG Illustration */}
        <img src="/globe.svg" alt="Desktop Only" className="w-24 h-24 mb-4 drop-shadow-lg animate-bounce-slow" style={{ filter: 'drop-shadow(0 0 12px #ef4444)' }} />
        <h1 className={`${anton.className} text-3xl md:text-4xl font-extrabold text-red-500 mb-3 text-center drop-shadow-lg`}>Please Open on Desktop or Laptop</h1>
        <p className="text-lg md:text-xl text-red-200 text-center font-medium mb-2 drop-shadow-sm">
          This website is designed with advanced animations and effects.<br />
          For the best experience, please use a larger screen.
        </p>
        <span className="mt-2 text-sm text-red-400 italic">We promise it's worth it! 🚀</span>
      </div>
      {/* Custom CSS for animation */}
      <style jsx>{`
        .animate-gradient-move {
          background: linear-gradient(120deg, #000 0%, #1c1c1c 100%);
        }
        .animate-float {
          animation: floatCard 3.5s ease-in-out infinite;
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.8s infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
  