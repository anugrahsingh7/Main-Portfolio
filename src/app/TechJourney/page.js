import { Anton } from 'next/font/google';
import JourneyCard from '@/components/JourneyCard';
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function TechJourney() {
  return (
    <div id="Journey" className="relative flex flex-col items-center justify-center h-screen text-red-400 bg-red-400 overflow-hidden">
      {/* New background design with same colors */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-6xl mx-auto px-8">
          <div className="relative">
            {/* MY with outline effect */}
            <h1 className={`${anton.className} absolute text-black text-[14rem] font-bold leading-none opacity-20`}>
              <span className="text-stroke-white">MY</span>
            </h1>
            {/* JOURNEY with layered effect */}
            <h1 className={`${anton.className} relative text-[#f3dacb] text-[24rem] font-bold leading-none mt-12 ml-12 opacity-20`}>
              JOURNEY
              <span className="absolute inset-0 text-black text-stroke-white opacity-30 -z-10">JOURNEY</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Original layout structure preserved */}
      <div className="w-screen h-screen flex flex-col p-6">
        <div className="flex justify-start items-end px-7">
          <div className="opacity-0 text-[14rem]">My</div>
        </div>
        <div className="flex justify-center">
          <div className="opacity-0 text-[24rem]">Journey</div>
        </div>
      </div>

      {/* Original overlay content */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center z-10">
        <JourneyCard />
      </div>

      {/* Add this to your global CSS for text-stroke effect */}
      <style jsx>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
      `}</style>
    </div>
  )
}

export default TechJourney;