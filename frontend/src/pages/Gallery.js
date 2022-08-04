import React from "react";
import "./Gallery.css";
import gal1 from "../images/gal1.png";
import gal2 from "../images/gal2.png";
import gal3 from "../images/gal3.png";
import gal4 from "../images/gal4.png";
import gal5 from "../images/gal5.png";
import gal6 from "../images/gal6.png";
import Customheader from "../components/Dynamic_header/Customheader";

const Gallery = () => {
  return (
    <div>
      <Customheader path="" header="Gallery" />
      <div className="Gallery-div">
        <div className="Events">
          <h1 className="domain">Events</h1>
          <div class="row">
            <div class="column">
              <img className="gal-img" src={gal1} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal2} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal3} alt="" />
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img className="gal-img" src={gal4} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal5} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal6} alt="" />
            </div>
          </div>
        </div>
        <div className="Achievements">
          <h1 className="domain">Achievements</h1>
          <div class="row">
            <div class="column">
              <img className="gal-img" src={gal1} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal2} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal3} alt="" />
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img className="gal-img" src={gal4} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal5} alt="" />
            </div>
            <div class="column">
              <img className="gal-img" src={gal6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
