import React from 'react';

const IdeateGenerateSection = () => {
  return (
    <div className="ideate-generate-section">
      <h1 className="section-title">
        Ideate, Describe & Generate <br /> Videos Instantly with AI-Powered Tools
      </h1>

      <div className="thumbnails-container">
        {/* Large Thumbnail on the Left */}
        <div className="thumbnail large-thumbnail">
          <h2>Lifelike AI Avatars</h2>
          <p>
            We capture the subtle nuances of facial features, expressions, accents, 
            and speaking mannerisms in our models, offering a selection of hyper-realistic AI avatars.
          </p>
          <p>
            Choose from our collection to narrate and provide dialogue in your videos—no cameras or 
            microphones needed!
          </p>
          <img src="/thumb1.png" alt="AI Avatar" className="thumbnail-image" />
        </div>

        {/* Smaller Thumbnails on the Right */}
        <div className="small-thumbnails">
          <div className="thumbnail small-thumbnail">
            <h2>Multi-Language Text to Speech</h2>
            <p>
              Extend your content's reach with scripts and on-screen text translated into over 80 languages.
              AI Studios helps you create content for education, entertainment, or marketing that resonates with a global audience.
            </p>
            <img src="/thumb2.png" alt="Multi-Language Text to Speech" className="thumbnail-image" />
          </div>

          <div className="thumbnail small-thumbnail">
            <h2>All-in-One Video Editor</h2>
            <p>
              Create full-production videos right from your browser with DeepBrain AI and save over 80% on time and overhead costs.
              Our platform provides everything you need to take your video from concept to completion.
            </p>
            <img src="/thumb3.png" alt="All-in-One Video Editor" className="thumbnail-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeateGenerateSection;
