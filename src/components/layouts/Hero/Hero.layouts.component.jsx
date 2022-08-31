import React from "react";
import { useState } from "react";
import "./Hero.layouts.css";
import arrowWhite from "../../../assets/images/icon-arrow.png";
import arrowBlack from "../../../assets/images/icon-arrow.svg";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className="hero">
      {/* Hero Wrapper | adds max-width to content */}
      {/* =================================================================== */}
      <div className="hero-wrapper">
        {/* Hero Top Containers |  */}
        {/* =================================================================== */}
        <div className="hero-top-container">
          <div className="hero-top-role">
            <h2>FRONT END DEVELOPER</h2>
            <p>
              We're Blume. We're all up in your bathroom with products that are
              good for your body and the environment.
            </p>
          </div>
          {/* =================================================================== */}
          <div className="hero-top-fname">
            <h1>Oscar</h1>
          </div>
        </div>
        {/* Hero Bottom Containers |  */}
        {/* =================================================================== */}
        <div className="hero-bottom-container">
          <h2>Hernandez - Viquez</h2>
        </div>
        {/* Hero Bottom Containers |  */}
        {/* =================================================================== */}
        <div className="hero-cta-container">
          <a
            href="#portfolio"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            See Projects

            <img
              className={
                isHovering ? "hero-cta-arrow"  : "hero-cta-arrow--active"
              }
              src={arrowWhite}
              alt="Hello"
            />
            <img
              className={
                isHovering ? "hero-cta-arrow--active" : "hero-cta-arrow"
              }
              src={arrowBlack}
              alt="Hello"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
