import { Anton } from "next/font/google";
import GithubButton from "@/components/GithubButton";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function MoreProjects() {
    return (
        <div className="w-full min-h-screen bg-[#ffe5d5] text-white flex flex-col justify-center items-center">
            <div className="w-full min-h-[40vh] flex justify-center items-center">
               <a href="https://github.com/anugrahsingh7?tab=repositories" className="cursor-pointer mt-10">
                   <GithubButton />
               </a>
            </div>
            <div className="w-full min-h-[60vh] p-4 flex flex-col gap-0 overflow-hidden">
                <div className={`${anton.className} text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[13rem] justify-center items-center flex text-black/90 -mt-10`}>
                    EXPLORE
                </div>
                <div className={`${anton.className} text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[13rem] justify-center items-start flex text-black/90 -mt-24`}>
                    MORE PROJECTS
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;
