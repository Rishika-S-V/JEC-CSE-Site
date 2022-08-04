import React from "react";
import CourseCard from "../components/CourseCard";
import { Grid } from "@material-ui/core";
import "./Programmes.css";
import Customheader from "../components/Dynamic_header/Customheader";
import { Link } from "react-router-dom";

const Programmes = () => {
  return (
    <div>
      <Customheader path="" header="Programmes Offered" />
      <div className="card-box">
        <a className="split" href="#ug">
          UG Programme
        </a>{" "}
        <a className="split" href="#pg">
          PG Programme
        </a>
        <div class="card-box1">
          <div class="card-header">
            <span className="headname">Programme </span>

            <select name="programme" id="programme">
              <option value="programme">Select Programme</option>
              <option value="programme">UG Programme</option>
              <option value="programme">PG Programme</option>
            </select>
            <span className="headname">Regulation</span>
            <select name="Regulation" id="Regulation">
              <option value="Regulation">Select Regulation</option>
              <option value="Regulation">Regulation 2013</option>
              <option value="Regulation">Regulation 2017</option>
              <option value="Regulation">Regulation 2021</option>
            </select>
            <div className="cards">
              <div className="inner-cards">
                <h2 className="center">Curriculum</h2>{" "}
                <p>
                  <ul>
                    <li>
                      <span className="item"> Lorem ipsum dolor sit</span>
                    </li>
                    <li>
                      <span className="item"> consectetur odio tellus</span>
                    </li>
                    <li>
                      <span className="item"> adipiscing elit</span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        adipiscing elit. Eu elit eu aenean{" "}
                      </span>
                    </li>
                    <li>
                      <span className="item">bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> Lorem ipsum dolor sit</span>
                    </li>
                    <li>
                      <span className="item"> consectetur odio tellus</span>
                    </li>
                    <li>
                      <span className="item"> adipiscing elit</span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        adipiscing elit. Eu elit eu aenean{" "}
                      </span>
                    </li>
                    <li>
                      <span className="item">bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> Lorem ipsum dolor sit</span>
                    </li>
                    <li>
                      <span className="item"> consectetur odio tellus</span>
                    </li>
                    <li>
                      <span className="item"> adipiscing elit</span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        adipiscing elit. Eu elit eu aenean{" "}
                      </span>
                    </li>
                    <li>
                      <span className="item">bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> Lorem ipsum dolor sit</span>
                    </li>
                    <li>
                      <span className="item"> consectetur odio tellus</span>
                    </li>
                    <li>
                      <span className="item"> adipiscing elit</span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        adipiscing elit. Eu elit eu aenean{" "}
                      </span>
                    </li>
                    <li>
                      <span className="item">bibendum aliquam nibh </span>
                    </li>
                    <li>
                      <span className="item"> bibendum aliquam nibh </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="center"> Courses</h1>

      <h1 className="course-name" id="ug">
        Under Graduates
      </h1>
      <div className="college-notes">
        <Link style={{ textDecoration: "none" }} to="/Notes">
          <p class="split-para">
            I-Year <span>II-Year</span>
          </p>
          <div className="align-programmes">
            <Grid container spacing={0}>
              <Grid item md={2}>
                <CourseCard
                  course_name="Semester-1"
                  subjects="English"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-2"
                  subjects="Maths"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-3"
                  subjects="OOPS"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-4"
                  subjects="DBMS"
                ></CourseCard>
              </Grid>
            </Grid>
          </div>

          <p id="no-decoration" class="split-para">
            III-Year <span>IV-Year</span>
          </p>
          <div className="align-programmes">
            <Grid container spacing={0}>
              <Grid item md={2}>
                <CourseCard
                  course_name="Semester-5"
                  subjects="English"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-6"
                  subjects="Maths"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-7"
                  subjects="OOPS"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-8"
                  subjects="DBMS"
                ></CourseCard>
              </Grid>
            </Grid>
          </div>
        </Link>
      </div>
      <h1 className="course-name" id="pg">
        Post Graduates
      </h1>
      <p class="split-para">
        I-Year <span>II-Year</span>
      </p>
      <div className="align-programmes">
        <div className="college-notes">
          <Grid container spacing={0}>
            <Grid item md={2}>
              <CourseCard
                course_name="Semester-1"
                subjects="English"
              ></CourseCard>
            </Grid>
            <Grid item md={2} id="programmes-card">
              <CourseCard
                id="CourseCard"
                course_name="Semester-2"
                subjects="Maths"
              ></CourseCard>
            </Grid>
            <Grid item md={2} id="programmes-card">
              <CourseCard course_name="Semester-3" subjects="OOPS"></CourseCard>
            </Grid>
            <Grid item md={2} id="programmes-card">
              <CourseCard course_name="Semester-4" subjects="DBMS"></CourseCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
