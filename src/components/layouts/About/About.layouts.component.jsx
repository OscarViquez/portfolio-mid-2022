import React from "react";
import aboutImage from "../../../assets/images/about-image.png";
import "./About.layouts.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-text-container">
          <h2>About Me</h2>
          <p>
            I'm Web Developer utilizing code and visual designs to solve
            problems, create growth, and opportunities for business and brands.
            I love the tech field because it is one of the industries that is
            involved in not just tech companies, but also other companies in
            different industries. For example airline, food, finance, and sport.
          </p>
        </div>
        <div className="about-img-container">
          <img src={aboutImage} alt="Hello" />
        </div>
      </div>
    </section>
  );
};

export default About;
