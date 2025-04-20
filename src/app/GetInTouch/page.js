import { Anton } from "next/font/google";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

function GetInTouch() {
  return (
    <div id="contact" className="w-screen h-screen bg-black flex justify-center items-center">
    <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className={`${anton.className} text-7xl font-semibold text-red-400 capitalize `}>
              Get in touch<br /> to see your ideas <br/>come to life
            </h1>

            <div className="mt-6  md:mt-8 text-[#ffe5d5]">
            If you're looking to collaborate with a passionate and skilled team,
            and would like to hire me and my team for your project or idea,
            please don’t hesitate to get in touch with us right here—we’re excited to connect!

              

             
              
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className={`${anton.className} text-3xl text-[#ffe5d5] `}>Connect with me</h3>

              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5 text-3xl text-red-400 transition-colors duration-300 transform hover:text-red-500"
                  href="https://www.linkedin.com/in/anugrah-singh-7777/"
                >
                  <FaLinkedinIn />
                  
                </a>

                <a
                  className="mx-1.5 text-3xl text-red-400 transition-colors duration-300 transform hover:text-red-500"
                  href="https://github.com/anugrahsingh7"
                >
                  <FaGithub />
                </a>

                <a
                  className="mx-1.5 text-3xl text-red-400 transition-colors duration-300 transform hover:text-red-500"
                  href="mailto:anugrahsingh7777@gmail.com"
                >
                  <MdEmail />
                </a>

               
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#ffe5d5] rounded-lg shadow-2xl  lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className={`${anton.className} text-3xl font-medium text-red-400`}>
                What do you want to ask?
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-lg font-bold text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="block w-full px-5 py-3 mt-2 text-black placeholder-black/30 bg-red-400 border border-black/50 focus:shadow-sm rounded-md  focus:border-none  focus:ring-black focus:outline-none "
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-lg font-bold text-black ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full px-5 py-3 mt-2 text-black placeholder-black/30 bg-red-400 border border-black/50 focus:shadow-sm rounded-md  focus:border-none  focus:ring-black focus:outline-none "
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-lg font-bold  text-black ">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-black placeholder-black/30 bg-red-400 border border-black/50 focus:shadow-sm rounded-md  focus:border-none  focus:ring-black focus:outline-none "
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`${anton.className} cursor-pointer hover:shadow-md active:scale-95 font-2xl  w-full border border-black bg-transparent  px-6 py-3 mt-6 rounded-md text-black capitalize hover:bg-black hover:text-white `}
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch;
