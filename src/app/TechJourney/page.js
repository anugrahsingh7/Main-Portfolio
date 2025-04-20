import { Anton } from 'next/font/google';
import JourneyCard from '@/components/JourneyCard';
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function TechJourney() {
  return (
    <div id="Journey" className="relative flex flex-col items-center justify-center h-screen text-red-400 bg-red-400">
      <div className="w-screen h-screen flex flex-col p-6">
        <div className="flex justify-start items-end px-7">
          <h1 className={`${anton.className} text-black text-[14rem] font-bold mt-10`}>My</h1>
        </div>
        <div className="flex justify-center">
          <h1 className={`${anton.className} text-[#f3dacb] text-[24rem] font-bold -mt-36`}>Journey</h1>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-transparent text-blue-400 text-9xl flex items-center justify-center z-10">
        <JourneyCard />
      </div>
    </div>
  ) 
}

export default TechJourney
 