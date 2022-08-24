import React from "react";
import "./Navbar.common.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-wrapper"></div>

      <div className="nav-wrapper">

        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Project</a>
          </li>
          <li className="nav-item">
            <a href="/">Contact Me</a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
