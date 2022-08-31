import React from "react";
import aboutImage from '../../../assets/images/about-image.png';
import "./About.layouts.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-text-container">
          <h2>
            About Me
          </h2>
          <p>
            Hi, my name is Lu Yu, I am a designer working in visual
            communication, with a focus on interaction design & art direction. I
            was raised in China, and have spent time living and working in
            Melbourne, Istanbul, and Berlin. Currently open for freelance
            collaborations.
          </p>
        </div>
        <div className="about-img-container">
            <img src={aboutImage}  alt="Hello" />
        </div>
      </div>
    </section>
  );
};

export default About;
