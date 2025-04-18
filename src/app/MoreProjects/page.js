import { Anton } from "next/font/google";
import GithubButton from "@/components/GithubButton";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function MoreProjects() {
    return (
        <div className="w-screen min-h-screen max-h-screen bg-[#ffe5d5] text-white flex-col justify-center items-center">
            <div className="w-screen min-h-[40vh] flex justify-center items-center">
               <a href="https://github.com/anugrahsingh7?tab=repositories" className="cursor-pointer mt-10"><GithubButton /></a>
            </div>
            <div className="w-screen min-h-[60vh] p-4 flex flex-col gap-0 overflow-hidden ">
                <div className={`${anton.className} text-[13rem] justify-center items-center flex text-black/90 -mt-10 `}>EXPLORE</div>
                <div className={`${anton.className} text-[13rem] justify-center items-start flex text-black/90 -mt-24 `}>MORE PROJECTS</div>
            </div>
        </div>
    )
}

export default MoreProjects
