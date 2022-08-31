import React from "react";
import "./Hero.layouts.css";
import arrow from "../../../assets/images/icon-arrow.png";

const Hero = () => {
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
          <a href="#">
            See Projects <img src={arrow}  alt="Hello" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
