'use client'

import { useState, useEffect, useRef } from "react";
import CursorBox from "@/components/CursorBox";
import { 
  FaShoppingCart, 
  FaUtensils, 
  FaPlayCircle, 
  FaPalette, 
  FaBlog, 
  FaBriefcase, 
  FaGraduationCap, 
  FaComments, 
  FaChartLine 
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Work() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const pageRef = useRef(null);
    const projectsRef = useRef([]);
    const titleRef = useRef(null);

    const projects = [
        {
            title: "E-Commerce Website",
            description: "A sophisticated e-commerce platform featuring a responsive product catalog with advanced search, secure payment integration, real-time inventory management, comprehensive user authentication, detailed order tracking, wishlist functionality, product reviews, loyalty program, abandoned cart recovery, and a comprehensive admin dashboard for product management and analytics.",
            icon: <FaShoppingCart className="text-blue-500" />
        },
        {
            title: "Restaurant Ordering System",
            description: "An innovative digital ordering solution offering dynamic menu management, comprehensive order processing with kitchen display system, advanced table management, integrated payment processing, customer feedback collection, loyalty program, staff scheduling, inventory tracking, and detailed analytics dashboard for business insights.",
            icon: <FaUtensils className="text-red-500" />
        },
        {
            title: "Content Streaming Website",
            description: "A high-performance streaming platform featuring adaptive bitrate streaming, personalized content recommendations, comprehensive user profiles, offline viewing capabilities, multi-device synchronization, content management system, live streaming, parental controls, multi-language support, and integration with popular streaming devices.",
            icon: <FaPlayCircle className="text-purple-500" />
        },
        {
            title: "Portfolio Builder for Creators",
            description: "A comprehensive portfolio creation platform offering customizable templates, advanced image optimization, project categorization, client testimonials, contact forms, social media integration, blog integration, SEO optimization, analytics dashboard, custom domain support, and integration with popular design tools.",
            icon: <FaPalette className="text-yellow-500" />
        },
        {
            title: "Blogging Platform",
            description: "A feature-rich blogging platform with modern WYSIWYG editor, comprehensive SEO tools, content scheduling, multi-author support, advanced comment moderation, social sharing integration, detailed analytics, newsletter integration, content monetization, and integration with popular marketing tools.",
            icon: <FaBlog className="text-green-500" />
        },
        {
            title: "Business Website",
            description: "A professional business website template featuring service showcase, team member profiles, client testimonials, comprehensive contact management, appointment scheduling, lead generation forms, live chat support, multilingual support, blog section, and integration with popular business tools.",
            icon: <FaBriefcase className="text-indigo-500" />
        },
        {
            title: "Online Course Platform",
            description: "A comprehensive learning management system featuring course creation tools, video hosting, quiz and assessment creation, progress tracking, discussion forums, analytics, course bundling, student progress reports, instructor dashboard, and integration with popular educational tools.",
            icon: <FaGraduationCap className="text-pink-500" />
        },
        {
            title: "Real-Time Chat App",
            description: "A modern messaging application featuring end-to-end encryption, group chat functionality, file sharing, message reactions, read receipts, offline messaging, cross-platform synchronization, voice and video calling, message search, and integration with popular productivity tools.",
            icon: <FaComments className="text-cyan-500" />
        },
        {
            title: "Analytics Dashboard for Businesses",
            description: "An advanced business intelligence dashboard offering real-time data visualization, comprehensive reporting, KPI tracking, predictive analytics, data export capabilities, team collaboration features, integration with various data sources, and custom alert system for important metrics.",
            icon: <FaChartLine className="text-orange-500" />
        }
    ];

    // Set up refs for each project
    useEffect(() => {
        projectsRef.current = projectsRef.current.slice(0, projects.length);
    }, [projects]);

    // Initial page load animation
    useEffect(() => {
        // Create a timeline for the entrance animation
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        // Animate the page opacity
        tl.fromTo(pageRef.current, 
            { 
                opacity: 0
            },
            { 
                opacity: 1,
                duration: 1.5
            }
        );
        
        // Animate each project with a stagger effect
        tl.fromTo(projectsRef.current,
            { 
                y: 100, 
                opacity: 0,
                scale: 0.8,
                rotation: -5
            },
            { 
                y: 0, 
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            },
            "-=0.5"
        );
        
        // Add hover animations for each project
        projectsRef.current.forEach((project, index) => {
            // Create a timeline for each project's hover animation
            const projectTl = gsap.timeline({ paused: true });
            
            // Scale up and add glow effect on hover
            projectTl.to(project, {
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Add event listeners for hover
            project.addEventListener("mouseenter", () => {
                projectTl.play();
            });
            
            project.addEventListener("mouseleave", () => {
                projectTl.reverse();
            });
        });
        
        // Add scroll-triggered animations
        projectsRef.current.forEach((project, index) => {
            gsap.fromTo(project,
                { 
                    opacity: 0.7,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: project,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
        
        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (project) => {
        setCurrentProject(project);
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            id="work"
            ref={pageRef}
            className="w-screen min-h-screen max-h-content p-4 pt-6 overflow-hidden"
            style={{ backgroundColor: '#ffe5d5' }}
            onMouseMove={handleMouseMove}
        >
            {projects.map((project, index) => (
                <div 
                    key={index}
                    ref={el => projectsRef.current[index] = el}
                    className="group project-item w-full h-[15vh] border-b border-gray-300 cursor-pointer hover:bg-red-400 hover:scale-105 rounded-3xl transition-all duration-300"
                    onMouseEnter={() => handleMouseEnter(project)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="w-full h-full flex items-center px-6">
                        <div className="text-4xl mr-4">
                            {project.icon}
                        </div>
                        <div className="text-5xl font-semibold bg-clip-text text-black bg-gradient-to-r from-gray-800 to-gray-600 group-hover:text-[#ffe5d5]">
                            {project.title}
                        </div>
                    </div>
                </div>
            ))}
            
            <CursorBox 
                isVisible={isHovering} 
                position={cursorPosition} 
                projectInfo={currentProject}
            />
        </div>
    )
}

export default Work
