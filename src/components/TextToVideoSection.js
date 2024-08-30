import React from 'react';
// import './styles.css'; 

const TextToVideoSection = () => {
  return (
    <div className="text-to-video-section">
      <h1>
        <span className="highlight">AI Text</span> to Video
      </h1>
      <p className="description">
        Convert your text to video using AI. Paste your script, the easiest way to create videos for YouTube, Instagram, and TikTok from text.
      </p>
      <button className="btn-get-started">Get Started for Free</button>
      <img src="/ai-text.png" alt="AI Text to Video Illustration" className="section-image" />
    </div>
  );
};



export default TextToVideoSection;
