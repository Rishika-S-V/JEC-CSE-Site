import Customheader from "../components/Dynamic_header/Customheader";
import "./Facultydetails.css";

export default function Facultydetails() {
  return (
    <div>
      <Customheader path="" header="Faculty Details" />
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/88650559?v=4"
          className="faculty-pic"
          alt=""
        />
        <div className="faculty-details">
          <p>Vairamuthu M</p>
          <p>Assistant Professor, CSE</p>
          <button className="fbio-data">
            Bio-Data <span className="arrow-size">&#x2193;</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
