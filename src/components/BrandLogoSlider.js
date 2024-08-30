import React from 'react';

const BrandLogoSlider = () => {
  const brandLogos = [
    // "/brand1.png",
    "/brand2.png",
    "/brand3.png",
    "/brand4.png",
    "/brand5.png",
    "/brand6.png",
    "/brand7.png",
    "/brand8.png",
    "/brand9.png",
    "/brand10.png",
    "/brand11.png",
    "/brand12.png",
    "/brand13.png",
    "/brand14.png",
    // "/brand15.png",
    "/brand16.png",
    "/brand17.png",
  ];

  return (
    <div className="brand-logo-slider">
      <div className="slider">
        {brandLogos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`Brand Logo ${index + 1}`} className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogoSlider;
