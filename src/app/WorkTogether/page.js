import { Anton } from "next/font/google";
import styled from 'styled-components';
import ConnectButton from "@/components/ConnectButton";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });


function WorkTogether() {
    return (
        
        <div className="w-screen min-h-screen max-h-screen bg-black text-white flex justify-center items-center  ">
            <div className="w-1/2 min-h-screen bg-red-400">
            <img src="/work.png" alt="worktogether" className="w-full h-screen object-cover" />
            </div>
            <div className="w-1/2 min-h-screen bg-[#ffe5d5] p-8">
            <div className="w-full h-full flex flex-col justify-center items-start text-black/90">
            <div className= {`${anton.className} text-[8rem] font-bold -mt-2`}>Want to</div>
            <div className={`${anton.className} text-[8rem] font-bold -mt-16`}>Work </div>
            <div className={`${anton.className} text-[8rem] font-bold -mt-16`}>Together ?</div>
            <div className={`${anton.className} text-[2rem] font-bold text-red-400`}>Let’s grab a coffee and turn your idea into reality. I’m always open to new ideas and collaborations—let’s connect!</div>
            <div className=" mt-8">
                <ConnectButton />

                
            </div>

            </div>
            </div>
            
        </div>
    )
}

export default WorkTogether
