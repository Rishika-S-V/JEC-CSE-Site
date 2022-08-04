import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import Customheader from "../components/Dynamic_header/Customheader";

const Projects = () => {
  return (
    <div>
      <Customheader path="" header="Projects" />
      <ProjectCard />
    </div>
  );
};

export default Projects;
