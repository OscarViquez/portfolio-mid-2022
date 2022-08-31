import React from "react";
import Project from "../../common/Project/Project.layouts.component";
import { ProjectsData } from "./Portfolio.data";
import "./Portfolio.layouts.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Featured Projects</h2>

      {ProjectsData.map((project) => {
        return <Project content={project} key={project.project_id} />;
      })}
    </section>
  );
};

export default Portfolio;
