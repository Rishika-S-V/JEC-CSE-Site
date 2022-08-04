import React from "react";
import "./Achievements.css";
import EventCard from "../components/EventCard";
import Customheader from "../components/Dynamic_header/Customheader";

const Events = () => {
  return (
    <div>
      <Customheader path="" header="Events" />
      <EventCard />
    </div>
  );
};

export default Events;
