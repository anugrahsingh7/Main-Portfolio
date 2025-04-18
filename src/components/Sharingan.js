// components/Loader.js
import React from 'react';
import styled from 'styled-components';

const Sharingan = () => {
  return (
    <StyledWrapper>
      <div className="sharingon hover:cursor-pointer">
        <div className="ring">
          <div className="to" />
          <div className="to" />
          <div className="to" />
          <div className="circle" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .sharingon {
    width: 2em;  /* Reduced size by 3 times */
    height: 2em; /* Reduced size by 3 times */
    background-color: red;
    border: 6px solid black;
    animation: rot 1s ease-in-out infinite;
  }

  .ring {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 1.2em;  /* Reduced size by 3 times */
    height: 1.2em; /* Reduced size by 3 times */
    border: 4px solid rgb(110, 13 ,13 ,0.5);
    transform: translate(-50%,-50%);
  }

  .sharingon, .ring, .to, .circle {
    border-radius: 50%;
  }

  .to, .circle {
    position: absolute;
    content: "";
    width: 0.3em; /* Reduced size by 3 times */
    height: 0.3em; /* Reduced size by 3 times */
    background-color: black;
  }

  .to:nth-child(1) {
    top: -0.2em; /* Adjusted for the new size */
    left: 50%;
    transform: translate(-40%);
  }

  .to::before {
    content: "";
    position: absolute;
    top: -0.2em; /* Adjusted for the new size */
    right: -0.1em;
    width: 0.37em; /* Adjusted for the new size */
    height: 0.3em; /* Adjusted for the new size */
    box-sizing: border-box;
    border-left: 5px solid black;
    border-radius: 100% 0 0;
  }

  .to:nth-child(2) {
    bottom: 0.2em; /* Adjusted for the new size */
    left: -0.15em;
    transform: rotate(-120deg);
  }

  .to:nth-child(3) {
    bottom: 0.2em; /* Adjusted for the new size */
    right: -0.15em;
    transform: rotate(120deg);
  }

  .circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 0.33px; /* Adjusted for the new size */
    width: 0.33em; /* Adjusted for the new size */
    height: 0.33em; /* Adjusted for the new size */
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Sharingan;
