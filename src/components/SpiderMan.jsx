import React from 'react';
import styled from 'styled-components';

const SpiderMan = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="rope">
          <div className="legs">
            <div className="boot-l" />
            <div className="boot-r" />
          </div>
          <div className="costume">
            <div className="spider">
              <div className="s1" />
              <div className="s2" />
              <div className="s3" />
              <div className="s4" />
            </div>
            <div className="belt" />
            <div className="hand-r" />
            <div className="hand-l" />
            <div className="neck" />
            <div className="mask">
              <div className="eye-l" />
              <div className="eye-r" />
            </div>
            <div className="cover" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    height: 31.25em;
    width: 21.87em;
  }

  .rope {
    height: 13.62em;
    width: 0.15em;
    background-color: #ffffff;
    animation: swing 2s infinite;
  }

  @keyframes swing {
    50% {
      transform: translateY(-4em);
    }
  }

  .legs {
    height: 1.12em;
    width: 7.5em;
    background-color: transparent;
    box-shadow: 0 0 0 0.12em #140243, 0 0 0 1.06em #1b1676, 0 0 0 1.18em #140243;
    border-radius: 3.12em;
  }

  .boot-l,
  .boot-r {
    height: 1.25em;
    width: 2.5em;
    background-color: #e32832;
    position: absolute;
    border: 0.12em solid #140243;
  }

  .boot-l {
    left: 1em;
  }

  .boot-r {
    transform: rotateY(180deg);
    left: 3.81em;
  }

  .costume {
    height: 6.25em;
    width: 5.62em;
    background: linear-gradient(
      to right,
      #1b1676 20%,
      #e32832 20%,
      #e32832 80%,
      #1b1676 80%
    );
    border: 0.12em solid #140243;
  }

  .spider {
    height: 1.87em;
    width: 0.93em;
    background-color: #140243;
    border-radius: 45%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: calc(50% + 0.93em);
    left: 50%;
  }

  .s1,
  .s2,
  .s3,
  .s4 {
    height: 7.5em;
    width: 2.5em;
    border-radius: 0 0 1.37em 1.37em;
    border-bottom: 0.12em solid #140243;
    position: absolute;
    left: 50%;
  }

  .s1 {
    bottom: 1.43em;
  }

  .s2 {
    bottom: 0.93em;
  }

  .s3 {
    top: 1.43em;
    transform: translateX(-50%) rotateX(180deg);
  }

  .s4 {
    top: 0.93em;
    transform: translateX(-50%) rotateX(180deg);
  }

  .belt {
    height: 0.43em;
    width: 5.87em;
    background-color: #e32832;
    border: 0.12em solid #140243;
  }

  .hand-r,
  .hand-l {
    height: 8.12em;
    background: linear-gradient(
      #e32832 4.6em,
      #140243 4.6em,
      #140243 4.75em,
      #1b1676 4.75em,
      #1b1676 8.12em
    );
    width: 1.12em;
    border: 0.12em solid #140243;
    border-radius: 1.25em;
    position: absolute;
    transform-origin: bottom;
  }

  .hand-r {
    right: -0.75em;
    transform: rotate(-22deg);
  }

  .hand-l {
    left: -0.75em;
    transform: rotate(22deg);
  }

  .neck {
    height: 0.37em;
    width: 1.25em;
    background-color: #e32832;
    border: 0.12em solid #140243;
  }

  .mask {
    height: 4.65em;
    width: 4.06em;
    background-color: #e32832;
    border-radius: 50% 50% 50% 50% / 54% 54% 46% 46%;
    border: 0.12em solid #140243;
  }

  .eye-l,
  .eye-r {
    height: 0.68em;
    width: 1.37em;
    background-color: #ffffff;
    border-radius: 1.37em 1.37em 0 0;
    border: 0.12em solid #140243;
    position: absolute;
    top: 2.1em;
  }

  .eye-l {
    left: 0.3em;
  }

  .eye-r {
    right: 0.3em;
  }

  .cover {
    height: 3.12em;
    width: 0.15em;
    background-color: #ffffff;
  }

  @media screen and (min-width: 600px) {
    .container {
      font-size: 20px;
    }
  }
`;

export default SpiderMan;
