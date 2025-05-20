'use client';

import styled from 'styled-components';

const Card = () => {
  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    
    
    <StyledWrapper id="skills">
    
      <div className='text-white justify-center flex'><h1></h1></div>
      <div className="wrapper scale-90 max-h-screen min-h-screen mt-30">
          <div className="inner" style={{ '--quantity': 10 }}>
          <div className="card" style={{ '--index': 0, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://www.javascripttutorial.net/')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center "> <img className="w-15 h-15  rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white">JavaScript</h1>
                </div>
              </div>
          </div>

         <div className="card" style={{ '--index': 1, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://react.dev/learn')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white">React Js</h1>
                </div>
              </div>
          </div>
          
          <div className="card" style={{ '--index': 2, '--color-card': '255, 50, 50' }} onClick={() => handleCardClick('https://www.w3schools.com/bootstrap5/')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white">Bootstrap</h1>
                </div>
              </div>
          </div>

          <div className="card" style={{ '--index': 3, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://www.youtube.com/watch?v=KkeyZJXHZqY')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUoG_7iACY_tbK5bD7SUpnmbfkOvBkQD1tQ&s" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white">Gsap</h1>
                </div>
              </div>
          </div>

          <div className="card" style={{ '--index': 4, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://github.com/studio-freight/lenis')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://jquery-plugins.net/image/plugin/lenis-new-smooth-scroll-library.png" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white">LENIS</h1>
                </div>
              </div>
          </div>

          <div className="card" style={{ '--index': 5, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://realpython.com/')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white">Python</h1>
                </div>
              </div>
          </div>

          <div className="card" style={{ '--index': 6, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://nextjs.org/learn')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s" alt="javascript logo" /> </div>
                <h1 className="font-semibold ">Next.Js</h1>
                </div>
              </div>
          </div>

          <div className="card" style={{ '--index': 7, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://tailwindcss.com/docs/installation')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white ">Tailwind</h1>
                </div>
              </div>
          </div>

          <div className="card" style={{ '--index': 8, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://threejs.org/docs/')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://canada1.discourse-cdn.com/flex035/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white ">Three.Js</h1>
                </div>
              </div>
          </div>
          
          <div className="card" style={{ '--index': 9, '--color-card': '255, 0, 0' }} onClick={() => handleCardClick('https://www.mongodb.com/docs/')}>
            <div className="img flex justify-center items-center" >
              <div className="flex-col">
              <div className="flex  justify-center"> <img className="w-15 h-15  rounded-lg" 
              src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="javascript logo" /> </div>
                <h1 className="font-semibold text-white ">MongoDB</h1>
                </div>
              </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
    
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
    animation: pulse 10s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
  }
  
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 3500px;
  }

  .inner {
    --w: 180px;
    --h: 240px;
    --translateZ: calc(var(--w) + var(--h));
    --rotateX: -10deg;
    --perspective: 1800px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 35%;
    left: 50%;
    z-index: 2;
    transform-style: preserve-3d;
    animation: rotating 30s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: translate(-50%, -50%) perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: translate(-50%, -50%) perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: none;
    border-radius: 30px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(360deg / var(--quantity) * var(--index))) translateZ(var(--translateZ));
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(20px);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.01) 50%,
      rgba(255, 255, 255, 0.03) 100%
    );
    cursor: pointer;
    
    &:hover {
      box-shadow: 
        0 40px 80px rgba(0, 0, 0, 0.6),
        inset 0 0 0 2px rgba(var(--color-card), 0.8),
        0 0 100px rgba(var(--color-card), 0.4);
      z-index: 10;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(
        135deg,
        rgba(var(--color-card), 0.02) 0%,
        rgba(var(--color-card), 0.03) 50%,
        rgba(var(--color-card), 0.02) 100%
      ),
      radial-gradient(
        circle at 50% 0%,
        rgba(var(--color-card), 0.03) 0%,
        transparent 70%
      );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(15px);
    padding: 2.5rem;
    position: relative;
    gap: 1.5rem;
    
    img {
      width: 90px;
      height: 90px;
      object-fit: contain;
      filter: drop-shadow(0 0 25px rgba(var(--color-card), 0.8));
      z-index: 1;
    }
    
    h1 {
      text-shadow: 0 0 30px rgba(var(--color-card), 1);
      letter-spacing: 2.5px;
    }
  }

  h1 {
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-size: 1rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(135deg, #fff, rgba(var(--color-card), 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    position: relative;
    z-index: 1;
  }
`;

export default Card;