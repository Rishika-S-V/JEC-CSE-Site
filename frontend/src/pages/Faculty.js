import React from "react";
import UserCard from "../components/UserCard";
import "./Academic.css";
import { Grid } from "@material-ui/core";
import UserCardYellow from "../components/UserCardYellow";
import Customheader from "../components/Dynamic_header/Customheader";
import { Link } from "react-router-dom";

export default function Faculty() {
  return (
    <div>
      <Customheader path="" header="Faculty" />
      <div className="Faculty-div">
        <div className="faculty-top">
          <Grid className="space" container spacing={0}>
            <Grid item>
              <Link style={{ textDecoration: "none" }} to="/facultydetail">
                <UserCardYellow
                  name="Faculty Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCardYellow>
              </Link>
            </Grid>
          </Grid>
          <Grid className="space" container spacing={0}>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Faculty Name"
                image="https://avatars.githubusercontent.com/u/88650559?v=4"
                designation="Designation"
              ></UserCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
