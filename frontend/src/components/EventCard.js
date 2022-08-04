import React from "react";
import "./Event.css";
import Achieve from "../images/event.png";
import { Card } from "react-bootstrap";

const EventCard = () => {
  const cardInfo = [
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet. ",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
    {
      image: Achieve,
      title: "Event Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci diam diam nunc, sed. A purus eu, tincidunt integer in senectus convallis. Sed sit fermentum, lacus, condimentum cras diam  integer sed. Ultricies tellus libero, sed mauris aliquet.",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box1">
        <div className="content">
          <Card.Img variant="top" className=" content-image" src={card.image} />
          <div className="content-overlay">-Event Name-</div>
          <div classname="content-details fadeIn-bottom"> </div>
        </div>
        <Card.Body>
          <h2 id="event-title">{card.title}</h2>
          <p classname="title">{card.text}</p>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid1">{cardInfo.map(renderCard)}</div>;
};

export default EventCard;
