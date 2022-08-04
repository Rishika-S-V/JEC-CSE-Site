import React from "react";
import "./Clubs.css";
import club1 from "../images/club1.png";
import club2 from "../images/club2.png";
import club3 from "../images/club3.png";
import UserCard from "../components/UserCard";
import { Grid } from "@material-ui/core";
import UserCardblue from "../components/UserCard-blue";
import Customheader from "../components/Dynamic_header/Customheader";

const Clubs = () => {
  return (
    <div>
      <Customheader path="" header="Clubs" />
      <div className="Club-div">
        <div class="club-container ">
          <img src={club1} alt="Avatar" class="club-image1" />
          <div class="overlay">
            <p>Coding Club</p>
          </div>
        </div>
        <div class="club-container1 ">
          <img src={club2} alt="Avatar" class="club-image2" />
          <div class="overlay">
            <p>Foss Club</p>
          </div>
        </div>
        <div className="domain">
          <p className="domain-name">Domain</p>
          <select id="Domain">
            <option>Select Domain</option>
            <option>Data Analytics</option>
            <option>Web Design</option>
            <option>Cyber Security</option>
          </select>
        </div>
        <img src={club3} id="club-img" alt="club"></img>
        <div className="domain">
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            varius tortor mi luctus. Nibh bibendum egestas tellus elementum
            maecenas. Gravida bibendum in in platea. Tristique faucibus nulla
            duis aliquam. Sed nunc cursus aliquet eu amet tincidunt amet
            pharetra. Urna, iaculis vulputate quis mi aenean bibendum
            ullamcorper. Tellus, arcu posuere quam urna. Gravida dictum aenean
            amet pellentesque eros, vivamus. Quis nisl, amet, arcu auctor
            volutpat eu venenatis. Ornare tellus fermentum mi sodales purus
            odio. Aliquet sit ultricies tortor, gravida. Dictum faucibus
            porttitor vehicula et mattis et ullamcorper duis. Tellus auctor
            proin morbi tincidunt vulputate tempus. Aenean consectetur sed in
            aliquam semper in. Urna malesuada velit, et senectus tristique
            elementum a. Scelerisque sollicitudin suspendisse lorem elementum
            elementum neque egestas egestas. Enim id pulvinar praesent eget
            maecenas ornare nisi, vel facilisi. Nulla suspendisse quam turpis
            nunc, diam accumsan, amet egestas aliquet. Sed pellentesque massa eu
            tincidunt et, fames in et malesuada. Et bibendum felis amet,
            consectetur volutpat gravida non. Sollicitudin nunc, blandit sit
            mauris. A vulputate consectetur tristique ut sit tellus risus nec.
            Morbi faucibus diam tempus, laoreet interdum cursus. Ut semper
            tincidunt praesent aliquet congue vitae dui in. Arcu laoreet varius
            montes, a, turpis faucibus id ullamcorper odio. Eget dolor enim
            donec consequat mattis. Arcu ac aliquam justo, lectus massa mauris
            felis. Nisi nulla vitae nulla augue dolor, interdum. Nulla tortor,
            id sed commodo purus. Tempor, erat et nibh orci. Congue odio non at
            suspendisse. Phasellus quisque turpis quis at ut aliquam lectus
            sagittis sagittis. Ut sit interdum malesuada ut. Feugiat dignissim
            turpis scelerisque nunc nam elementum diam dictum lectus. Vel diam
            est dignissim congue cursus ut nulla.
          </p>
        </div>
        <div className="members">
          <h1 className="domain">Members</h1>
          <div className="club-members column-div">
            <Grid className="space" container spacing={0}>
              <Grid item>
                <UserCardblue
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCardblue>
              </Grid>
              <Grid item>
                <UserCardblue
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCardblue>
              </Grid>
            </Grid>
            <Grid className="space" container spacing={0}>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
              <Grid item>
                <UserCard
                  name="Student Name"
                  image="https://avatars.githubusercontent.com/u/88650559?v=4"
                  designation="Designation"
                ></UserCard>
              </Grid>
            </Grid>
          </div>
          <div>
            <button className="club-btn">Projects &#x2192;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
