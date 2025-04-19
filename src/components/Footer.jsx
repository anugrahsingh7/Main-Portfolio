import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { FaArrowRightLong, FaChevronUp } from "react-icons/fa6";

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const dividerRef = useRef(null);
  const copyrightRef = useRef(null);

  // Navigation links from Navbar
  const navLinks = [
    { name: "🚀 Launchpad", href: "#home" },
    { name: "🤝 Who I Am", href: "#intro" },
    { name: "💻 Skills", href: "#skills" },
    { name: "💼 My Builds", href: "#projects" },
    { name: "✍️ Insights", href: "#blogs" },
    { name: "🤝 Meet the Team", href: "#myteam" }
  ];

  // Social media links
  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedinIn className="w-5 h-5" />, url: "https://www.linkedin.com/in/anugrah-singh-7777/" },
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/anugrahsingh7777" },
    { name: "Email", icon: <MdEmail className="w-5 h-5" />, url: "mailto:anugrahsingh7777@gmail.com" }
  ];
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Main footer animation
    gsap.fromTo(
      footerRef.current,
      { backgroundColor: 'rgba(0,0,0,0)', y: 50, opacity: 0 },
      { 
        backgroundColor: 'black', 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: 1
        }
      }
    );

    // Content fade in
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Divider animation
    gsap.fromTo(
      dividerRef.current,
      { width: '0%' },
      { 
        width: '100%', 
        duration: 1.2, 
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top bottom-=30',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Copyright text animation
    gsap.fromTo(
      copyrightRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top bottom-=20',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-[#ffe5d5] relative ">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-400/70 to-transparent"></div>
      
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
      <div className="absolute w-40 h-40 rounded-full bg-red-400/5 blur-3xl top-1/2 left-1/4 opacity-20"></div>
      <div className="absolute w-56 h-56 rounded-full bg-red-400/5 blur-3xl bottom-0 right-1/3 opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 relative z-10">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col">
            <Link href="#home" className="group inline-block mb-5 w-fit">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-400/20 rounded-md flex items-center justify-center">
                  <span className="text-red-400 font-bold text-xl">A</span>
                </div>
                <span className="text-red-400/90 font-semibold tracking-wide text-lg">
                  Anugrah Singh
                </span>
              </div>
            </Link>
            <p className="text-[#ffe5d5]/70 text-sm leading-relaxed max-w-xs mt-2 mb-6">
              Developer and designer creating meaningful digital experiences and innovative solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-5 mt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[#ffe5d5]/70 hover:text-red-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-red-400/90 font-semibold text-sm uppercase tracking-wider mb-6">Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="group flex items-center text-[#ffe5d5]/70 hover:text-[#ffe5d5] transition-all duration-300 text-sm"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  <FaArrowRightLong className="ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" size={10} />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h3 className="text-red-400/90 font-semibold text-sm uppercase tracking-wider mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="mailto:anugrahsingh7777@gmail.com"
                className="group flex items-start text-[#ffe5d5]/70 hover:text-[#ffe5d5] transition-all duration-300"
              >
                <MdEmail className="w-4 h-4 mt-0.5 mr-3 text-red-400/80 group-hover:text-red-400" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium group-hover:text-red-400/90 transition-all">Email</span>
                  <span className="text-sm mt-0.5">anugrahsingh7777@gmail.com</span>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/anugrah-singh-7777/"
                target="_blank"
                rel="noopener noreferrer" 
                className="group flex items-start text-[#ffe5d5]/70 hover:text-[#ffe5d5] transition-all duration-300"
              >
                <FaLinkedinIn className="w-4 h-4 mt-0.5 mr-3 text-red-400/80 group-hover:text-red-400" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium group-hover:text-red-400/90 transition-all">LinkedIn</span>
                  <span className="text-sm mt-0.5">Anugrah Singh</span>
                </div>
              </a>
              
              <a 
                href="https://github.com/anugrahsingh7777"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start text-[#ffe5d5]/70 hover:text-[#ffe5d5] transition-all duration-300"
              >
                <FaGithub className="w-4 h-4 mt-0.5 mr-3 text-red-400/80 group-hover:text-red-400" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium group-hover:text-red-400/90 transition-all">GitHub</span>
                  <span className="text-sm mt-0.5">@anugrahsingh7777</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <hr ref={dividerRef} className="h-px my-10 bg-gradient-to-r from-transparent via-[#ffe5d5]/10 to-transparent border-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p ref={copyrightRef} className="text-[#ffe5d5]/50 text-sm">
            © {new Date().getFullYear()} Anugrah Singh. All rights reserved.
          </p>
          <Link 
            href="#home" 
            className="flex items-center mt-6 md:mt-0 text-[#ffe5d5]/50 hover:text-red-400/80 transition-all duration-300 text-sm group"
          >
            <span className="mr-2">Back to top</span>
            <FaChevronUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;