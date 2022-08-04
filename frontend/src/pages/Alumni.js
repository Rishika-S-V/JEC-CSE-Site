import React, { useState } from "react";
import "./Alumni.css";
import Customheader from "../components/Dynamic_header/Customheader";
import axios from "axios";

const Alumni = () => {
  const [state, setState] = useState({
    aluminis: [],
  });
  const api = axios.create({
    baseURL: `/api/alumni/`,
  });
  api.get("/").then((res) => {
    setState({ aluminis: res.data });
  });
  return (
    <div>
      <Customheader path="" header="Alumini" />
      <div className="Alumini-div">
        {state.aluminis.map((alumini) => (
          <div key={alumini.id} class="alumini-container ">
            <label class="textOverImage">
              <input type="checkbox" />
              <h2>{alumini.student.name}</h2>

              <div>
                {alumini.student.age}
                <br />
                {alumini.student.dob}
                <br />
                {alumini.student.roll_no}
                <br />
                {alumini.student.batch}
                <br />
                {alumini.works.company}
                <br />
                {alumini.works.position}
                <br />
                {alumini.works.duration}
                <br />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
