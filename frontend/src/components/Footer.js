import React from "react";
import "./Footer.css"; //import css style
import mail from "../images/mail.png";
import map from "../images/map.png";
import call from "../images/call.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import jec from "../images/JEC_logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="Footer-div">
      <ScrollToTop
        smooth
        top="1000"
        color="#ffffff"
        width="20"
        height="20"
        style={{
          backgroundColor: "#7E1018",
          borderRadius: "15px",
        }}
      />
      <ul className="footer-list">
        <li className="footer-item">
          <p className="list">
            <img src={mail} className="im" alt="img" />
            Mail to
          </p>
          <p className="list">
            <img src={call} className="im" alt="img" /> 9234568255, 9658462147
          </p>
          <p className="list">
            <img src={map} alt="img" className="im" /> Address <br />{" "}
            <jk>
              Jaya Engineering college,
              <br />
              Thiruninravur, Chennai-600024.
            </jk>
          </p>
          <p className="copyright-text">
            <small>
              {" "}
              Copyright @ 2022 | Jaya Engineering College, Chennai.{" "}
            </small>{" "}
          </p>{" "}
        </li>
        <li className="footer-item-value">
          <list className="value">
            <ul>
              <li>
                <Link className="key" to="/">
                  About our department
                </Link>
              </li>
              <li>
                <Link className="key" to="/Academic">
                  Academic Council
                </Link>
              </li>
              <li>
                <Link className="key" to="/Achievements">
                  Achievements
                </Link>
              </li>
              <li>
                <Link className="key" to="/Alumni">
                  Alumini
                </Link>
              </li>
              <li>
                <Link className="key" to="/Clubs">
                  Clubs
                </Link>
              </li>
              <li>
                <Link className="key" to="/Events">
                  Events
                </Link>
              </li>{" "}
              <br />
              <li>
                <Link className="key" to="/Faculty">
                  Faculty
                </Link>
              </li>
              <li>
                <Link className="key" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="key" to="/Infrastructure">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link className="key" to="/Programmes">
                  Programmes Offered
                </Link>
              </li>
              <li>
                <Link className="key" to="/Projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="key" to="/Student">
                  Students
                </Link>
              </li>
            </ul>
            <br />
          </list>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <social className="youtube">
            {" "}
            <img src={youtube} className="youtube" alt="youtube"></img> &nbsp;
            &nbsp; &nbsp;Youtube
          </social>
          <media className="facebook">
            <img src={facebook} className="facebook" alt="facebook"></img>
            &nbsp; &nbsp; &nbsp;Facebook{" "}
          </media>
        </li>{" "}
        <li className="footer-item">
          <img src={jec} className="jec_logo" alt="" />
          <p className="AICTE">
            Approved by AICTE, New Delhi, Affilliated to Anna University,
            <br />
            Chennai A Telugu Minority Institute
          </p>{" "}
        </li>{" "}
      </ul>{" "}
    </footer>
  );
};

export default Footer;
