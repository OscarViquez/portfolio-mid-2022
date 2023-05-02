import React from "react";
import { useState } from "react";
import "./Navbar.common.css";
import logo from "../../../assets/images/website-logo.svg";

const Navbar = () => {
  const [toggleVisibility, setToggleVisibility] = useState(true);

  const toggleMenu = () => {
    toggleVisibility ? setToggleVisibility(false) : setToggleVisibility(true);
    console.log("inside toggle", toggleVisibility);
  };

  const untoggleMenu = () => {
    setToggleVisibility(true);
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="nav-logo-wrapper">
          <img
            src={logo}
            alt="Logo Of Oscar Website"
          />

          <button className="navbar-toggle" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <ul
          className={
            toggleVisibility ? "navbar-list navbar-display-none" : "navbar-list"
          }
        >
          <li className="navbar-item">
            <span>
              <a href="#about" onClick={untoggleMenu}>
                About
              </a>
            </span>
          </li>
          <li className="navbar-item">
            <span>
              <a href="#skills" onClick={untoggleMenu}>
                Skills
              </a>
            </span>
          </li>
          <li className="navbar-item">
            <span>
              <a href="#portfolio" onClick={untoggleMenu}>
                Projects
              </a>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
