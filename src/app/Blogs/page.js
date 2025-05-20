"use client"

import { Anton, Playfair_Display, Montserrat } from "next/font/google";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import { FaImage } from "react-icons/fa";
import gsap from "gsap";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

function Blogs() {
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const blogsRef = useRef([]);
    const navigationRef = useRef(null);
    const [animationsInitialized, setAnimationsInitialized] = useState(false);
    
    // Use IntersectionObserver instead of ScrollTrigger
    useEffect(() => {
        // Function to run animations
        const playBlogsAnimations = () => {
            setAnimationsInitialized(true);
        };
        
        // Create intersection observer to detect when section is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If section is at least 20% visible and animations not already initialized
                if (entry.isIntersecting && entry.intersectionRatio >= 0.2 && !animationsInitialized) {
                    playBlogsAnimations();
                    // Optional: unobserve after playing animations
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            // Configure the observer:
            root: null, // Use viewport as root
            rootMargin: '0px', // No margin
            threshold: [0.2, 0.5, 0.8] // Trigger at different visibility levels
        });
        
        // Start observing the section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        // Clean up observer and animations
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [animationsInitialized]);
    
    // Add blog cards hover animations when animations are initialized
    useEffect(() => {
        if (animationsInitialized && blogsRef.current.length > 0) {
            blogsRef.current.forEach((blog) => {
                // Animate the gradient background
                blog.querySelector(".absolute.inset-0").style.opacity = "1";
                blog.querySelector(`.${playfair.className}`).style.color = "#7e1d1d";
                blog.querySelector(`.${playfair.className}`).style.transform = "translateY(-5px)";
                
                // Animate icon buttons
                blog.querySelector(".absolute.bottom-4.right-4").style.opacity = "1";
                blog.querySelector(".absolute.bottom-4.right-4").style.transform = "translateY(-5px)";
            });
        }
        
        return () => {
            if (blogsRef.current.length > 0) {
                blogsRef.current.forEach((blog) => {
                    blog.querySelector(".absolute.inset-0").style.opacity = "0";
                    blog.querySelector(`.${playfair.className}`).style.color = "#991b1b";
                    blog.querySelector(`.${playfair.className}`).style.transform = "translateY(0px)";
                    blog.querySelector(".absolute.bottom-4.right-4").style.opacity = "0";
                    blog.querySelector(".absolute.bottom-4.right-4").style.transform = "translateY(0px)";
                });
            }
        };
    }, [animationsInitialized, playfair.className]);
    
    const scrollWithEasing = (distance) => {
        if (!scrollContainerRef.current) return;
        
        const container = scrollContainerRef.current;
        const startPosition = container.scrollLeft;
        const targetPosition = startPosition + distance;
        const duration = 800; // milliseconds
        let startTime = null;
        
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Ease-in-out curve
            const easeInOut = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                
            container.scrollLeft = startPosition + (targetPosition - startPosition) * easeInOut;
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    };
    
    const scrollLeft = () => {
        gsap.to(".scroll-left-btn", {
            scale: 0.9,
            duration: 0.1,
            onComplete: () => {
                gsap.to(".scroll-left-btn", {
                    scale: 1,
                    duration: 0.2,
                    ease: "bounce.out"
                });
            }
        });
        scrollWithEasing(-1300);
    };
    
    const scrollRight = () => {
        gsap.to(".scroll-right-btn", {
            scale: 0.9,
            duration: 0.1,
            onComplete: () => {
                gsap.to(".scroll-right-btn", {
                    scale: 1,
                    duration: 0.2,
                    ease: "bounce.out"
                });
            }
        });
        scrollWithEasing(1270);
    };

    // Function to add a blog card to the refs array
    const addToRefs = (el) => {
        if (el && !blogsRef.current.includes(el)) {
            blogsRef.current.push(el);
        }
    };

    // Title animation
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { scale: 0.8, },
            { scale: 1,  duration: 2, ease: "elastic.out(1, 0.3)" }
        );
    }, []);

    // Page Load Animation
    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );
    }, []);

    // Enhanced Blog Card Hover Animation
    useEffect(() => {
        if (blogsRef.current.length > 0) {
            blogsRef.current.forEach((blog) => {
                blog.addEventListener("mouseenter", () => {
                    gsap.to(blog, {
                        scale: 1.05,
                        rotationY: 15,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        duration: 0.5,
                        ease: "power3.out"
                    });
                });
                blog.addEventListener("mouseleave", () => {
                    gsap.to(blog, {
                        scale: 1,
                        rotationY: 0,
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        duration: 0.5,
                        ease: "power3.out"
                    });
                });
            });
        }
    }, [blogsRef.current]);

    return (
        <div id="blogs" ref={sectionRef} className="w-screen min-h-screen max-h-screen bg-[#ffe5d5] flex justify-center items-center relative overflow-hidden">
            <h1 ref={titleRef} className={`${anton.className} text-[10rem] md:text-[20rem] lg:text-[34rem] font-bold text-red-400`}>BLOGS</h1> 

            {/* blogs div */}
            <div 
                ref={scrollContainerRef} 
                className="absolute h-screen w-screen bg-transparent flex items-center p-2 overflow-y-hidden overflow-x-scroll"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {/* blog cards... */}
                {/* blog 1 */}
                <div 
                    ref={addToRefs}
                    className="min-h-[55%] max-h-[55%] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:min-w-[50%] lg:max-w-[50%] ms-[5vh] sm:ms-[20vh] md:ms-[30vh] lg:ms-[42vh] me-[5vh] sm:me-[20vh] md:me-[30vh] lg:me-[43vh] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer flex-col relative shadow-2xl group overflow-hidden backdrop-blur-sm border border-white/20" 
                    style={{ 
                        background: "linear-gradient(135deg, rgba(255, 154, 158, 0.6) 0%, rgba(250, 208, 196, 0.6) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>
                    <div className={`${playfair.className} text-red-400 text-xl sm:text-2xl md:text-3xl font-bold relative z-10 mb-3 tracking-tight`}>
                        1. From College Cafeteria to Code: Building the BPIT Canteen Website
                    </div>
                    <div className={`${montserrat.className} text-red-900/80 text-base sm:text-lg mt-1 relative z-10 leading-relaxed line-clamp-7 overflow-hidden`}>
                        As a BTech student at BPIT, I saw a real-world problem — long queues and confusion around food orders. 
                        That's when I decided to build a full-fledged canteen website using React.js.
                        I integrated user authentication, a cart system, and even order placement with cooking instructions. 
                        The biggest win? Seeing my classmates actually use it and appreciate the convenience. 
                        It was the first time my code solved a real-life problem, and it felt incredible.
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500 ">
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <ImAttachment className="text-red-800" size={18} />
                        </div>
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <FaImage className="text-red-800" size={18} />
                        </div>
                    </div>
                </div>

                {/* blog 2 */}
                <div 
                    ref={addToRefs}
                    className="min-h-[55%] max-h-[55%] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:min-w-[50%] lg:max-w-[50%] ms-[5vh] sm:ms-[20vh] md:ms-[30vh] lg:ms-[42vh] me-[5vh] sm:me-[20vh] md:me-[30vh] lg:me-[43vh] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer flex-col relative shadow-2xl group overflow-hidden backdrop-blur-sm border border-white/20" 
                    style={{ 
                        background: "linear-gradient(135deg, rgba(255, 184, 184, 0.6) 0%, rgba(255, 236, 210, 0.6) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>
                    <div className={`${playfair.className} text-red-400 text-xl sm:text-2xl md:text-3xl font-bold relative z-10 mb-3 tracking-tight`}>
                        2. Integrating Razorpay: My First Real-World Payment Gateway
                    </div>
                    <div className={`${montserrat.className} text-red-900/80 text-base sm:text-lg mt-1 relative z-10 leading-relaxed line-clamp-7 overflow-hidden`}>
                        When I added Razorpay to my project, it felt like crossing a milestone. I learned how to securely send payment details, handle transaction success, and redirect users after payment — all in a production-like flow. Seeing that payment window pop up and work smoothly made the project feel professional. It taught me the importance of seamless UI/UX in fintech components and how little details can build trust with users.
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500">
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <ImAttachment className="text-red-800" size={18} />
                        </div>
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <FaImage className="text-red-800" size={18} />
                        </div>
                    </div>
                </div>

                {/* blog 3 */}
                <div 
                    ref={addToRefs}
                    className="min-h-[55%] max-h-[55%] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:min-w-[50%] lg:max-w-[50%] ms-[5vh] sm:ms-[20vh] md:ms-[30vh] lg:ms-[42vh] me-[5vh] sm:me-[20vh] md:me-[30vh] lg:me-[43vh] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer flex-col relative shadow-2xl group overflow-hidden backdrop-blur-sm border border-white/20" 
                    style={{ 
                        background: "linear-gradient(135deg, rgba(255, 129, 119, 0.6) 0%, rgba(255, 241, 235, 0.6) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>
                    <div className={`${playfair.className} text-red-400 text-xl sm:text-2xl md:text-3xl font-bold relative z-10 mb-3 tracking-tight`}>
                        3. Lessons Learned: Things I Wish I Knew Before Starting Web Dev
                    </div>
                    <div className={`${montserrat.className} text-red-900/80 text-base sm:text-lg mt-1 relative z-10 leading-relaxed line-clamp-7 overflow-hidden`}>
                        Looking back, I wish someone had told me that responsive design matters just as much as functionality. Or that managing state smartly can save hours of debugging. I also learned the hard way that copying code without understanding it leads to bugs you can't fix. But every mistake made me better. Web development isn't just about writing code—it's about thinking like a user and solving problems with elegance.
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500">
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <ImAttachment className="text-red-800" size={18} />
                        </div>
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <FaImage className="text-red-800" size={18} />
                        </div>
                    </div>
                </div>

                {/* blog 4 */}
                <div 
                    ref={addToRefs}
                    className="min-h-[55%] max-h-[55%] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:min-w-[50%] lg:max-w-[50%] ms-[5vh] sm:ms-[20vh] md:ms-[30vh] lg:ms-[42vh] me-[5vh] sm:me-[20vh] md:me-[30vh] lg:me-[43vh] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer flex-col relative shadow-2xl group overflow-hidden backdrop-blur-sm border border-white/20" 
                    style={{ 
                        background: "linear-gradient(135deg, rgba(255, 187, 181, 0.6) 0%, rgba(255, 216, 203, 0.6) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>
                    <div className={`${playfair.className} text-red-400 text-xl sm:text-2xl md:text-3xl font-bold relative z-10 mb-3 tracking-tight`}>
                        4. Why I Switched from Create React App to Next.js
                    </div>
                    <div className={`${montserrat.className} text-red-900/80 text-base sm:text-lg mt-1 relative z-10 leading-relaxed line-clamp-7 overflow-hidden`}>
                        Initially, like most beginners, I used Create React App for all my projects. But as I started working on more advanced apps, especially those that required better SEO and dynamic routing, CRA began to feel limiting. Switching to Next.js felt like unlocking a whole new level — built-in routing, SSR/SSG, image optimization, and the ability to use API routes made development way more efficient. I no longer had to rely on third-party tools or do extra configuration for basic things. 
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500">
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <ImAttachment className="text-red-800" size={18} />
                        </div>
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <FaImage className="text-red-800" size={18} />
                        </div>
                    </div>
                </div>

                {/* blog 5 */}
                <div 
                    ref={addToRefs}
                    className="min-h-[55%] max-h-[55%] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:min-w-[50%] lg:max-w-[50%] ms-[5vh] sm:ms-[20vh] md:ms-[30vh] lg:ms-[42vh] me-[5vh] sm:me-[20vh] md:me-[30vh] lg:me-[43vh] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer flex-col relative shadow-2xl group overflow-hidden backdrop-blur-sm border border-white/20" 
                    style={{ 
                        background: "linear-gradient(135deg, rgba(255, 195, 160, 0.6) 0%, rgba(255, 175, 189, 0.6) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px 0 rgba(255, 79, 79, 0.2)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>
                    <div className={`${playfair.className} text-red-400 text-xl sm:text-2xl md:text-3xl font-bold relative z-10 mb-3 tracking-tight`}>
                        5. Centering a Login Page on Mobile is Harder Than It Looks
                    </div>
                    <div className={`${montserrat.className} text-red-900/80 text-base sm:text-lg mt-1 relative z-10 leading-relaxed line-clamp-7 overflow-hidden`}>
                        When I was designing the login page for my app, I assumed centering it would be simple. But on mobile screens, everything broke — vertical alignment was off, and there was unexpected scroll. After hours of tweaking, I finally got it right using Tailwind CSS: min-h-screen, flex, items-center, and justify-center became my new best friends. I also made sure the container used overflow-hidden and was responsive across screen sizes.
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-500">
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <ImAttachment className="text-red-800" size={18} />
                        </div>
                        <div className="rounded-full bg-white/30 p-2 backdrop-blur-md hover:bg-white/40 transition-all cursor-pointer">
                            <FaImage className="text-red-800" size={18} />
                        </div>
                    </div>
                </div>

            
                <div className="min-h-[55%] min-w-[1px] max-w-[50%] bg-transparent"></div>
            </div>
            
            {/* Navigation buttons */}
            <div ref={navigationRef} className="absolute bottom-6 right-6 flex gap-4">
                <button 
                    onClick={scrollLeft}
                    className="bg-red-400 cursor-pointer p-3 rounded-full text-white hover:bg-red-500 transition-colors scroll-left-btn"
                >
                    <IoIosArrowBack size={24} />
                </button>
                <button 
                    onClick={scrollRight}
                    className="bg-red-400 cursor-pointer p-3 rounded-full text-white hover:bg-red-500 transition-colors scroll-right-btn"
                >
                    <IoIosArrowForward size={24} />
                </button>
            </div>
        </div>
    )
}

export default Blogs