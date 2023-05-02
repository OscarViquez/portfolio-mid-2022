import React from "react";
import "./Footer.common.css";
import logo from "../../../assets/images/website-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper footer-wrapper--top">
        <div className="footer-wrapper-col">
          <h2>Oscar Hernandez-Viquez</h2>
          <p>
            I'm Web Developer utilizing code and visual designs to solve
            problems, create growth, and opportunities for business and brands.
            I love the tech field because it is one of the industries that is
            involved in not just tech companies, but also other companies in different industries.
            For example airline, food, finance, and sport.
          </p>

          {/* <div className="footer-socials">
            <a href="/" className="footer-social-link">
              <img src="" className="footer-social-icon" />
            </a>
          </div> */}
        </div>
        <div className="footer-wrapper-col">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="footer-wrapper footer-wrapper--bottom">
        <p>&copy; OSHV. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
