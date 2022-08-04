import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  return (
    <div className="card-container">
      <header>
        <h1 className="bold-text1">{props.course_name}</h1>
      </header>
      <ul>
        <li className="normal-text2">{props.subjects}</li>
      </ul>
    </div>
  );
}

export default CourseCard;
