"use client"

import { useState } from "react"; 
import { FiBell, FiUser, FiSettings } from "react-icons/fi";
import { PiNotchesBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5"; 
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';
import { FaArrowRightLong } from "react-icons/fa6"; 
import { Anton } from "next/font/google";
import Link from 'next/link';
import { MdOutlineWork } from "react-icons/md";
import { MdContacts } from "react-icons/md";




const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDiv = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-transparent text-[#f2d9ca] w-full ">
      <div className="container mx-auto px-0 py-3 flex items-center justify-between">
        
        {/* Company Name */}
        <div className="text-lg font-bold -ms-14"><img className="w-10 h-10" src="Anugrah singh logo-modified (1).png" alt="logo" />
        
        </div>

        {/* Notch Button with Toggle */}
        <div
          className={`fixed ${
            isOpen ? "top-10" : "-top-85"
          } left-1/2 -translate-x-1/2 bg-transparent px-4 py-2 w-96 h-96 rounded-xl transform transition-all duration-500 ease-in-out z-50`}
        >
          <div className="w-full h-[90%] bg-red-500 rounded-b-2xl rounded-t-sm  items-center justify-start  p-8 text-[#f2d9ca] text-xl">
            
          <Link  href="#home"   onClick={toggleDiv} className={`${anton.className}  mb-2 group flex items-center mb-2 border-b pb-1 border-[#f2d9ca]/85  text-[#f2d9ca]/85 hover:text-[#f2d9ca] hover:border-[#f2d9ca] w-full text-lg font-normal hover:font-bold cursor-pointer justify-between transition-all duration-300 ease-in-out hover:scale-105 `}>
            <span className="me-2  flex items-center">🚀 Launchpad </span><FaArrowRightLong className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            </Link>
            <Link  href="#intro"   onClick={toggleDiv} className={`${anton.className}  mb-2 group flex items-center mb-2 border-b pb-1 border-[#f2d9ca]/85  text-[#f2d9ca]/85 hover:text-[#f2d9ca] hover:border-[#f2d9ca] w-full text-lg font-normal hover:font-bold cursor-pointer justify-between transition-all duration-300 ease-in-out hover:scale-105 `}>
            <span className="me-2  flex items-center">🤝 Who I Am</span><FaArrowRightLong className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            </Link>
            <Link  href="#skills"   onClick={toggleDiv} className={`${anton.className}  mb-2 group flex items-center mb-2 border-b pb-1 border-[#f2d9ca]/85  text-[#f2d9ca]/85 hover:text-[#f2d9ca] hover:border-[#f2d9ca] w-full text-lg font-normal hover:font-bold cursor-pointer justify-between transition-all duration-300 ease-in-out hover:scale-105`}>
            <span className="me-2  flex items-center">💻 Skills</span><FaArrowRightLong className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            </Link>
            <Link  href="#projects"   onClick={toggleDiv} className={`${anton.className}  mb-2 group flex items-center mb-2 border-b pb-1 border-[#f2d9ca]/85  text-[#f2d9ca]/85 hover:text-[#f2d9ca] hover:border-[#f2d9ca] w-full text-lg font-normal hover:font-bold cursor-pointer justify-between transition-all duration-300 ease-in-out hover:scale-105`}>
            <span className="me-2  flex items-center">💼  My Builds</span><FaArrowRightLong className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            </Link>
            <Link  href="#blogs"   onClick={toggleDiv} className={`${anton.className}  mb-2 group flex items-center mb-2 border-b pb-1 border-[#f2d9ca]/85  text-[#f2d9ca]/85 hover:text-[#f2d9ca] hover:border-[#f2d9ca] w-full text-lg font-normal hover:font-bold cursor-pointer justify-between transition-all duration-300 ease-in-out hover:scale-105`}>
            <span className="me-2  flex items-center">✍️ Insights </span><FaArrowRightLong className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            </Link>
            <Link  href="#myteam"   onClick={toggleDiv} className={`${anton.className}  mb-2 group flex items-center mb-2 border-b pb-1 border-[#f2d9ca]/85  text-[#f2d9ca]/85 hover:text-[#f2d9ca] hover:border-[#f2d9ca] w-full text-lg font-normal hover:font-bold cursor-pointer justify-between transition-all duration-300 ease-in-out hover:scale-105`}>
            <span className="me-2  flex items-center">🤝 Meet the Team</span><FaArrowRightLong className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
            </Link>
            
            
            <div className="h-[10%] w-full flex justify-center items-center gap-x-2 mt-2 ">
            <StyledWrapper>
            <ul className="wrapper">
            <button className="icon facebook" onClick={() => window.location.href = 'mailto:anugrahsingh7777@gmail.com'}>
            <span className="tooltip">Email</span>
            <MdEmail className="text-xl"/>
            </button>
            <button className="icon twitter" onClick={() => window.open('https://github.com/anugrahsingh7', '_blank')}>
            <span className="tooltip">Github</span>
            <FaGithub className="text-xl" />
            </button>
            <button className="icon instagram" onClick={() => window.open('https://www.linkedin.com/in/anugrah-singh-7777/', '_blank')}>
            <span className="tooltip">LinkedIn</span>
            <FaLinkedin className="text-xl"/>
            </button>
            </ul>
            </StyledWrapper>
            </div>
            
         </div>
        
          
          <div className="w-full h-[10%] bg-transparent flex justify-center -mt-[1px]">
            <button
              onClick={toggleDiv}
              className="w-[30%] h-full bg-red-500 rounded-b-2xl flex justify-center items-center text-3xl cursor-pointer transition-transform duration-300 "
            >
              {isOpen ? (
                <IoClose className="transform transition-transform duration-300" />
              ) : (
                <PiNotchesBold className="transform rotate-45  transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          
        </div>
      </div>
    </nav>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: transparent;
    border-radius: 50%;
    margin: 2px;
    margin-top:5px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 6px;
    width: 6px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -40px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #fcbc00;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #000408;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #0b66c2;
    color: #fff;
  }`;

export default Navbar;