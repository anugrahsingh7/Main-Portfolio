"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialRef = useRef(null);
  const formContainerRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const formFieldsRef = useRef([]);
  const sectionRef = useRef(null); // Ref for the entire section

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    // Create a timeline that will be triggered by scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start when the top of the section hits 80% from the top of viewport
        end: "bottom 20%", // End when the bottom of the section hits 20% from the top of viewport
        toggleActions: "play none none none", // play on enter, no action on leave, no action on re-enter, no action on leave back
        // markers: true, // For debugging - remove in production
      },
      defaults: { ease: "power3.out" }
    });
    
    // Animate the background
    tl.fromTo(".bg-overlay", 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }
    );
    
    // Animate the heading
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
    
    // Animate subtitle with text reveal
    tl.fromTo(subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );
    
    // Animate the CTA button with scale and glow
    tl.fromTo(ctaButtonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 }
    );
    
    // Staggered animation for social icons
    tl.fromTo(socialRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
    );
    
    // Form container reveal
    tl.fromTo(formContainerRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 }
    );
    
    // Staggered animation for form fields
    tl.fromTo(formFieldsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 }
    );
    
    // Hover animations for interactive elements
    const buttons = document.querySelectorAll('.animated-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        gsap.to(button.querySelector('.button-bg'), { width: '100%', duration: 0.4 });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
        gsap.to(button.querySelector('.button-bg'), { width: '0%', duration: 0.4 });
      });
    });
    
    // Form input animations
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, { 
          borderColor: '#f87171', 
          boxShadow: '0 0 15px rgba(248, 113, 113, 0.3)', 
          duration: 0.3 
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, { 
          borderColor: input.value ? '#f87171' : '#e5e7eb', 
          boxShadow: '0 0 0px rgba(248, 113, 113, 0)', 
          duration: 0.3 
        });
      });
    });
    
    // Cursor follower effect
    const cursorFollower = document.querySelector('.cursor-follower');
    window.addEventListener('mousemove', (e) => {
      gsap.to(cursorFollower, { 
        x: e.clientX, 
        y: e.clientY, 
        duration: 0.8,
        ease: "power3.out"
      });
    });
    
    // Clean up event listeners and ScrollTrigger
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
      
      inputs.forEach(input => {
        input.removeEventListener('focus', () => {});
        input.removeEventListener('blur', () => {});
      });
      
      window.removeEventListener('mousemove', () => {});
      
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us - Ultimate Design Solution</title>
        <meta name="description" content="Get in touch with us for the ultimate design solutions" />
      </Head>
      
      {/* Custom cursor follower */}
      <div className="cursor-follower fixed w-16 h-16 rounded-full pointer-events-none mix-blend-difference z-50 opacity-70" style={{ background: 'radial-gradient(circle, rgba(248,113,113,1) 0%, rgba(248,113,113,0) 70%)' }}></div>

      <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/70 bg-overlay"></div>
        
        {/* Content container */}
        <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col">
          <header ref={headerRef} className="pt-8">
            <h2 className="text-red-400 font-semibold text-lg tracking-widest">CONTACT US</h2>
          </header>
          
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 flex-1 py-8">
            {/* Left content */}
            <div className="w-full lg:w-1/2 text-white">
              <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold leading-tight text-white">
                <span className="block text-[#ffe5d5]">Let's create</span>
                <span className="block text-red-400">something</span>
                <span className="block">amazing.</span>
              </h1>
              
              <p ref={subtitleRef} className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
                Tell us about your project and let's craft a stunning design solution together. 
                Our team is ready to bring your vision to life with cutting-edge creativity.
              </p>
              
              
              
              <div className="mt-12">
                <h3 className="text-[#ffe5d5] text-sm font-semibold tracking-widest mb-4">CONNECT WITH US</h3>
                
                <div ref={socialRef} className="flex space-x-6">
                 

                  <a className="transform hover:scale-125 hover:text-red-400 transition-all duration-300" href="https://www.linkedin.com/in/anugrah-singh-161089266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                      <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                      <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                    </svg>
                  </a>

                  <a className="transform hover:scale-125 hover:text-red-400 transition-all duration-300 flex items-center " href="mailto:anugrahsingh7777@gmail.com">
                  <SiGmail className='w-6 h-6' />
                  </a>

                  <a className="transform hover:scale-125 hover:text-red-400 transition-all duration-300 flex items-center " href="https://github.com/anugrahsingh7">
                  <FaGithub className='w-6 h-6' />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right form content */}
            <div ref={formContainerRef} className="w-full lg:w-1/2">
              <div className="glass-panel backdrop-blur-md bg-[#ffe5d5]/10 rounded-3xl p-10 border border-[#ffe5d5]/20 shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400/20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                
                <h2 className="text-2xl font-bold text-[#ffe5d5] mb-6">Get in Touch</h2>
                
                <form ref={formRef} className="space-y-6">
                  <div 
                    ref={el => formFieldsRef.current[0] = el}
                    className="relative"
                  >
                    <label className="text-[#ffe5d5] text-sm font-medium mb-1 block">Full Name</label>
                    <input 
                      type="text" 
                      className="form-input w-full bg-white/10 border border-[#ffe5d5]/30 rounded-lg p-4 text-white placeholder-[#ffe5d5]/50 focus:outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div 
                    ref={el => formFieldsRef.current[1] = el}
                    className="relative"
                  >
                    <label className="text-[#ffe5d5] text-sm font-medium mb-1 block">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input w-full bg-white/10 border border-[#ffe5d5]/30 rounded-lg p-4 text-white placeholder-[#ffe5d5]/50 focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  
                  
                  <div 
                    ref={el => formFieldsRef.current[3] = el}
                    className="relative"
                  >
                    <label className="text-[#ffe5d5] text-sm font-medium mb-1 block">Message</label>
                    <textarea 
                      className="form-input w-full bg-white/10 border border-[#ffe5d5]/30 rounded-lg p-4 h-32 resize-none text-white placeholder-[#ffe5d5]/50 focus:outline-none transition-all duration-300"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <div 
                    ref={el => formFieldsRef.current[4] = el}
                    className="pt-2"
                  >
                    <button 
                      type="submit"
                      className="animated-button cursor-pointer relative overflow-hidden w-full px-6 py-4 border border-[#ffe5d5] text-white font-medium rounded-lg transition-all duration-300 group"
                    >
                      <span className="button-bg absolute inset-0 w-0 h-full bg-red-400 transition-all duration-300 ease-in-out rounded-lg"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        <span>Send Message</span>
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}