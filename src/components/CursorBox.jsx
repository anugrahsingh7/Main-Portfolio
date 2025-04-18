import React, { useRef } from 'react';

const CursorBox = ({ isVisible, position, projectInfo }) => {
  const boxRef = useRef(null);
  const contentRef = useRef(null);

  // Function to get background color based on project title
  const getBackgroundColor = (title) => {
    const colors = {
      'E-Commerce Website': 'bg-blue-600',
      'Restaurant Ordering System': 'bg-red-600',
      'Content Streaming Website': 'bg-purple-600',
      'Portfolio Builder for Creators': 'bg-amber-600',
      'Blogging Platform': 'bg-emerald-600',
      'Business Website': 'bg-indigo-600',
      'Online Course Platform': 'bg-rose-600',
      'Real-Time Chat App': 'bg-cyan-600',
      'Analytics Dashboard for Businesses': 'bg-orange-600'
    };
    return colors[title] || 'bg-gray-600';
  };

  return (
    <div 
      ref={boxRef}
      className="fixed pointer-events-none z-50 w-[28rem] h-[15.5rem]"
      style={{ 
        transform: 'translate(-50%, -50%)',
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="relative w-full h-full group">
        {/* Main container with solid background color */}
        <div className={`w-full h-full ${getBackgroundColor(projectInfo?.title)} rounded-3xl shadow-2xl border border-white/20 p-6`}>
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-black/10"></div>
          
          <div ref={contentRef} className="relative h-full flex flex-col">
            {/* Enhanced title with white text and glow */}
            <h3 className="text-2xl font-bold  text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {projectInfo?.title || ''}
            </h3>
            
            {/* Sophisticated separator with glow */}
            <div className="relative h-px w-full my-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/50 to-white/50 blur-sm"></div>
            </div>
            
            {/* Description with premium typography */}
            <p className="text-sm text-white/90 leading-relaxed font-light tracking-wide">
              {projectInfo?.description || ''}
            </p>
          </div>
        </div>
        
        {/* Enhanced corner accents with advanced effects */}
        <div className="absolute -top-2 -left-2 w-5 h-5 bg-gradient-to-br from-white to-white/80 rounded-full shadow-lg shadow-white/50 group-hover:shadow-white/70 transition-all duration-300"></div>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-white to-white/80 rounded-full shadow-lg shadow-white/50 group-hover:shadow-white/70 transition-all duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-gradient-to-br from-white to-white/80 rounded-full shadow-lg shadow-white/50 group-hover:shadow-white/70 transition-all duration-300"></div>
        <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-br from-white to-white/80 rounded-full shadow-lg shadow-white/50 group-hover:shadow-white/70 transition-all duration-300"></div>
        
        {/* Advanced grid pattern with white overlay */}
        <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default CursorBox; 