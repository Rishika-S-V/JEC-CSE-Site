import React from "react";
import "./ProjectCard.css";
import { Card } from "react-bootstrap";

const ProjectCard = () => {
  const cardInfo = [
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      title: "Project Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box2">
        <Card.Body>
          <h2 id="project-title">{card.title}</h2>
          <p classname="project-desc">{card.text}</p>
          <button className="project-btn">
            {" "}
            Take a Look <span className="arrow-icon">&#x2192;</span>
          </button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid3">{cardInfo.map(renderCard)}</div>;
};

export default ProjectCard;
