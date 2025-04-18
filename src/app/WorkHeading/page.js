// pages/card.js
import React from 'react';
import styled from 'styled-components';

const WorkHeading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
    <StyledWrapper>
      <div className="card">
        <div className="mac-header">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <span className="card-title">Mac-Style Code Preview</span>
        <p className="card-description">
          A glimpse of your code in a clean and Mac-like window. Click to explore!
        </p>
        <span className="card-tag">Next JS</span> <span className="card-tag">React JS</span>
        <div className="code-editor">
          <pre className='text-red-400 font-bold'><code>&lt;h1&gt; Our Web Development Services: Custom Solutions for Every Need &lt;/h1&gt;</code></pre>
          <pre className='mt-2 text-2xl text-green-300 font-thin'><code>&lt;p&gt; As a dedicated and skilled web developer, I specialize in creating custom websites that cater to a wide variety of industries and individual needs. With a passion for crafting seamless, user-friendly digital experiences 🌐, I turn ideas into functional and visually captivating websites 🎨.

Whether you're a business looking to expand your online presence 📈, an entrepreneur hoping to launch a new product or service 💼, or an individual aiming to showcase your work 🌟, I offer solutions that not only meet but exceed expectations.

From dynamic e-commerce platforms 🛒 to creative portfolio showcases 📸, here’s a list of the types of websites I can design and develop. Each one is crafted to deliver top-notch performance 🚀, responsive designs 📱, and a seamless user experience 🤝. Explore the possibilities, and let’s bring your digital vision to life! 💻✨

 &lt;/p&gt;</code></pre>

         
        </div>
       
      </div>
    </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 78rem;
    height: 43rem;
    padding: 20px;
    border: 1px solid #ffe5d5;
    border-radius: 10px;
    background-color: #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    position: relative;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px #ffe5d5;
  }

  .mac-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
  }

  .mac-header span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .mac-header .red {
    background-color: #ff5f57;
  }

  .mac-header .yellow {
    background-color: #ffbd2e;
  }

  .mac-header .green {
    background-color: #28c941;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 10px;
    color: #e6e6ef;
  }

  .card-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
  }

  .card .card-tag {
    display: inline-block;
    font-size: 18px;
    border-radius: 5px;
    background-color: #0d1117;
    padding: 4px;
    margin-block-end: 12px;
    color: #dcdcdc;
  }
  .code-editor {
    background-color: #0d1117;
    color: #dcdcdc;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      monospace;
    font-size: 27px;
    line-height: 1.5;
    border-radius: 5px;
    padding: 15px;
    overflow: auto;
    height: 31.5rem;
    overflow:hidden;
    border: 1px solid #333;
  }

  .code-editor::-webkit-scrollbar {
    width: 8px;
  }

  .code-editor::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  .code-editor pre code {
    white-space: pre-wrap;
    display: block;
  }
`;

export default WorkHeading;
