import { Anton } from "next/font/google";
import ConnectButton from "@/components/ConnectButton";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function WorkTogether() {
  return (
    <div className="w-screen min-h-screen max-h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-red-400">
        <img
          src="/work.png"
          alt="worktogether"
          className="w-full h-[50vh] md:h-screen object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-[#ffe5d5] flex items-center justify-center p-8">
        <div className="w-full max-w-2xl flex flex-col gap-4 text-black/90 items-center justify-center text-center">
          <h1 className={`${anton.className} text-7xl font-bold leading-tight`}>Want to Work Together?</h1>
          <h2 className={`${anton.className} text-4xl font-semibold text-red-400`}>Let's grab a coffee and turn your idea into reality.</h2>
          <p className="text-2xl font-medium text-black/80">
            I'm always open to new ideas and collaborations—let's connect!
          </p>
          <div className="mt-6">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkTogether;
