import React from 'react';

const JourneyCard = () => {
  return (
    <div className="w-full">
      <div 
        className="w-full h-[400px] overflow-hidden font-['Inter']"
        style={{
          maskImage: 'linear-gradient(to right, transparent, #000 10% 90%, transparent)',
          '--width': '400px',
          '--height': '400px',
          '--quantity': '9',
          '--gap': '3200px'
        }}
      >
        <div className="flex w-full" style={{ minWidth: 'calc((var(--width) + var(--gap)) * var(--quantity))' }}>
          {[
            {
              title: "The Spark 🔥 — When It All Began",
              description: 'My journey began when I was about 5 or 6 years old, and my uncle introduced me to a computer. The first game I played was Mario, which I\'m sure you all know. He showed me how to press the up and down keys to jump and crouch. I found it fascinating, and soon my uncle and I were playing that game together every day.',
              gradient: 'linear-gradient(135deg, rgb(248, 113, 113), #ffe5d5)',
              accent: 'rgb(248, 113, 113)'
            },
            {
              title: "Early Experiments 🛠️ — Playing Around",
              description: 'I\'ve been into computer games for a while, but on my birthday, my dad gifted me a computer, sparking my interest in its parts like the CPU, keyboard, and monitor. With school labs and my own experiments, I explored apps, software, and websites—and soon realized computers are far more than just gaming.',
              gradient: 'linear-gradient(135deg, #ffe5d5, rgb(248, 113, 113))',
              accent: '#ffe5d5'
            },
            {
              title: "The First Taste of Coding 💻",
              description: 'I still remember the first time I stumbled upon a YouTube video titled "How to Make a Calculator in Python." I had no idea what coding really was at that point, but something about that video thumbnail intrigued me. Out of pure curiosity, I clicked on it. As the video played, I watched lines of code appear on the screen, transforming simple text into something interactive, something that could do things. It felt like magic.',
              gradient: 'linear-gradient(135deg, rgb(248, 113, 113), black)',
              accent: 'black'
            },
            {
              title: "School & Tech 📚 — Balancing Both",
              description: 'Balancing schoolwork and learning HTML felt like juggling two different worlds. Weekdays were packed with assignments, tests, and lectures, yet my curiosity for web development never faded. HTML fascinated me—the power to structure and design a webpage with simple code was thrilling. Despite the chaos, creating something visual always felt worth it.',
              gradient: 'linear-gradient(135deg, black, #ffe5d5)',
              accent: '#ffe5d5'
            },
            {
              title: "First Project 🌱 — From Theory to Practice",
              description: 'I made a personal website using only HTML and CSS. It was a simple project, but seeing it come to life felt like a big achievement. For the first time, I had created something entirely on my own, and that sense of accomplishment was incredibly motivating. It pushed me to keep learning and exploring more about web development.',
              gradient: 'linear-gradient(135deg, #ffe5d5, black)',
              accent: 'black'
            },
            {
              title: "Learning Never Stops 📘 — Courses, YouTube, GitHub",
              description: 'I joined freeCodeCamp, watched tutorials like those from Code with Harry, followed creators on GitHub, and began learning by doing. Immersing myself in real projects and coding consistently helped me understand concepts better and build confidence. Each small step forward made the learning process more exciting and rewarding.',
              gradient: 'linear-gradient(135deg, rgb(248, 113, 113), #ffe5d5, black)',
              accent: 'rgb(248, 113, 113)'
            },
            {
              title: "Tech Community 💬 — Connecting with Others",
              description: 'Joining a Discord server full of developers really accelerated my growth. It was a supportive space where I felt comfortable asking even the simplest questions and getting instant feedback. Being part of that community made learning more interactive and less overwhelming, helping me improve much faster.',
              gradient: 'linear-gradient(135deg, black, rgb(248, 113, 113), #ffe5d5)',
              accent: '#ffe5d5'
            },
            {
              title: "Real-World Applications 💼 — Internships, Freelancing, Contributions",
              description: 'During my first internship at BSNL, I learned extensively about NGN (Next Generation Networking) and built a news website showcasing the latest NGN updates, combining technical knowledge with web development skills.',
              gradient: 'linear-gradient(135deg, #ffe5d5, black, rgb(248, 113, 113))',
              accent: 'rgb(248, 113, 113)'
            },
            {
              title: "The Big Vision 🔭 — Where It's All Going",
              description: 'Currently, I\'m working on building a full-stack app using Next.js, MongoDB, and real-time features with WebSockets. My goal is to create solutions that address real-world problems, leveraging modern technologies to make the application both functional and interactive. It\'s an exciting challenge, and I\'m eager to continue learning and improving as I build this project.',
              gradient: 'linear-gradient(135deg, rgb(248, 113, 113), black, #ffe5d5)',
              accent: '#ffe5d5'
            }
          ].map((card, index) => (
            <div
              key={index}
              className="absolute left-full w-[var(--width)] h-[var(--height)] hover:grayscale-0"
              style={{
                '--position': index + 1,
                animation: 'autoRun 10s linear infinite',
                animationDelay: `calc((10s / var(--quantity)) * (var(--position) - 1) - 10s)`,
                transition: 'all 0.5s ease',
                marginRight: 'var(--gap)'
              }}
            >
              <div 
                className="w-full h-full rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
                style={{ 
                  background: card.gradient,
                  boxShadow: `0 25px 50px -12px ${card.accent}25`
                }}
              >
                <div className="relative p-8 flex flex-col h-full bg-gradient-to-b from-black/10 to-black/30">
                  {/* Card Number Indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-white/90 text-sm font-medium">{index + 1}</span>
                  </div>

                  {/* Title Section */}
                  <h3 className="text-2xl font-extrabold text-white mb-4 font-['Poppins'] leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  
                  {/* Description Section */}
                  <div className="relative">
                    <p className="text-[15px] text-white/90 font-['Inter'] leading-relaxed tracking-wide font-normal">
                      {card.description}
                    </p>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        
        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc((var(--width) + var(--gap)) * -1);
          }
        }
        @keyframes reversePlay {
          from {
            left: calc((var(--width) + var(--gap)) * -1);
          }
          to {
            left: 100%;
          }
        }
      `}</style>
      <style jsx>{`
        div:hover :global(.absolute) {
          animation-play-state: paused !important;
          filter: grayscale(0.2);
          transform: scale(1.02);
        }
        div[reverse="true"] :global(.absolute) {
          animation: reversePlay 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default JourneyCard;