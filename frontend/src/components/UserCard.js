import React from "react";
import "./UserCard.css";

function UserCard(props) {
  return (
    <div>
      <div className="card-container1">
        <header className="header">
          <img src={props.image} className="img" alt={props.name} />
        </header>
        <h1 id="cap" className="bold-text">
          {props.name}
        </h1>
        <h2 className="normal-text">{props.designation}</h2>
      </div>
    </div>
  );
}

export default UserCard;
