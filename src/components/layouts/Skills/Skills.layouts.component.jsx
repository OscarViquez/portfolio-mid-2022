import React from "react";
import "./Skills.layouts.css";
import iconJavascript from '../../../assets/images/icon-javascript.png';
import iconReact from '../../../assets/images/icon-react.png';
import iconHTML from '../../../assets/images/icon-html5.png';
import iconCSS from '../../../assets/images/icon-css.png';
import iconBootstrap from '../../../assets/images/icon-bootstrap.png';
import iconNode from '../../../assets/images/icon-nodejs.png';
import iconGit from '../../../assets/images/icon-git.png';
import iconFigma from '../../../assets/images/icon-figma.png';
import iconJava from '../../../assets/images/icon-java.png';
import iconAngular from '../../../assets/images/icon-angular.png';
import iconSpringboot from '../../../assets/images/icon-springboot.png';
import iconMYSQL from '../../../assets/images/icon-mysql.png';


const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-wrapper">
        <h2>My Skills &amp; Tech</h2>

        <div className="skills-icons">

          <ul className="skills-icons-lists">
            <li className="skills-icons-item">
              <img src={iconJavascript} alt="tool" /> <span> JavaScript </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconReact} alt="tool" /> <span> React.js </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconHTML} alt="tool" /> <span> HTML </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconCSS} alt="tool" /> <span> CSS </span>
            </li>
          </ul>
          

          <ul className="skills-icons-lists">
            <li className="skills-icons-item">
              <img src={iconBootstrap} alt="tool" /> <span> Bootstrap </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconNode} alt="tool" /> <span> Node.js </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconGit} alt="tool" /> <span> Git </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconFigma} alt="tool" /> <span> Figma </span>
            </li>
          </ul>

          <ul className="skills-icons-lists">
            <li className="skills-icons-item">
              <img src={iconJava} alt="tool" /> <span> Java </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconAngular} alt="tool" /> <span> Angular </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconSpringboot} alt="tool" /> <span> SpringBoot </span>
            </li>
            <li className="skills-icons-item">
              <img src={iconMYSQL} alt="tool" /> <span> My SQL </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
