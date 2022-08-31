import React from "react";
import "./Navbar.common.css";

const Navbar = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="nav-logo-wrapper">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/73bdad8c89a3a0f1a7f675756af406dfbbae55d1/4f664/images/branding/oshv-logo-emblem.svg"
            alt="Logo Of Oscar Website"
          />
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <span>
                <a href="/">About</a>
              </span>
            </li>
            <li className="nav-item">
              <span>
                <a href="/">About</a>
              </span>
            </li>
            <li className="nav-item">
              <span>
                <a href="/">About</a>
              </span>
            </li>
            <li className="nav-item nav-item--cta">
              <span>
                <a href="/">About</a>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
