import React, { useState } from "react";
import Customheader from "../components/Dynamic_header/Customheader";
import "./Student.css";
import axios from "axios";

export default function Student() {
  const [state, setState] = useState({
    students: [],
  });
  const api = axios.create({
    baseURL: `/api/students/`,
  });
  api.get("/").then((res) => {
    setState({ students: res.data });
  });

  return (
    <div>
      <Customheader path="" header="Student" />
      <div className="student-batch domain">
        <h4>Batch</h4>
        <select id="select-batch">
          <option>Select Batch</option>
          <option>2020-2024</option>
          <option>2019-2023</option>
          <option>2018-2020</option>
        </select>
      </div>
      <div className="student-details">
        {state.students.map((student) => (
          <div className="student-namelist">
            <h4>
              {student.id}&nbsp; &nbsp; &nbsp;
              {student.name}
              <span className="student-left">{student.roll_no}</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
