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
            Hi, my name is Lu Yu, I am a designer working in visual
            communication, with a focus on interaction design & art direction. I
            was raised in China, and have spent time living and working in
            Melbourne.
          </p>

          {/* <div className="footer-socials">
            <a href="/" className="footer-social-link">
              <img src="" className="footer-social-icon" />
            </a>
          </div> */}
        </div>
        <div className="footer-wrapper-col">
          <img src={logo} alt="logo"/>
        </div>
      </div>

      <div className="footer-wrapper footer-wrapper--bottom">
        <p>&copy; OSHV. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
