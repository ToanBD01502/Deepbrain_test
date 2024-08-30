import React from 'react';

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      {/* Left Side: Title and Description */}
      <div className="benefits-text">
        <h1>Benefits of AI Video from Text</h1>
        <p>Transform text, prompts, and documents into professional-quality videos with just a few clicks.</p>
      </div>

      {/* Right Side: Facts with Icons */}
      <div className="benefits-container">
        <div className="benefit">
          <img src="/video-camera.png" alt="Cost-Effective Icon" className="benefit-icon" />
          <h2>Cost-Effective</h2>
          <p>Save on overhead costs such as staffing, equipment, and software licenses, making high-quality video production more affordable.</p>
        </div>

        <div className="benefit">
          <img src="/white-house.png" alt="Scale Video Production Icon" className="benefit-icon" />
          <h2>Scale Video Production</h2>
          <p>Easily create a high volume of videos, supporting scalable content strategies for growing audiences — without compromising on quality or timing.</p>
        </div>

        <div className="benefit">
          <img src="/productivity.png" alt="Cloud-Based Flexibility Icon" className="benefit-icon" />
          <h2>Cloud-Based Flexibility</h2>
          <p>Create videos anytime, anywhere with our cloud-based platform. Whether you're at the office or on the go, your video production can move with you.</p>
        </div>

        <div className="benefit">
          <img src="/love-message.png" alt="No Experience Necessary Icon" className="benefit-icon" />
          <h2>No Experience Necessary</h2>
          <p>AI Studios is designed to be user-friendly for beginners while still delivering the powerful features professionals need.</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
