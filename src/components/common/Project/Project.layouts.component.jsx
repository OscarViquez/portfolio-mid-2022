import React from "react";
import "./Project.layouts.css";

const Project = (props) => {
  const { project_type, project_name, project_desc, project_demoLink, project_image} = props.content;

  return (
    <article className="project">
      <div className="project-wrapper">
        {/* ========================== */}

        <div className="project-info-wrapper">
          <h2>{project_type}</h2>
          <h3>{project_name}</h3>
          <a href={project_demoLink} className="project-demo-link">
            Live Demo
          </a>
        </div>

        <div className="project-text-wrapper">
          <p>{project_desc}</p>
        </div>

      </div>
      {/* ========================== */}
      <div className="project-wrapper">
        <img src={project_image} alt="" className="project-image" />
      </div>
    </article>
  );
};

export default Project;
