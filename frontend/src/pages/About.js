import background from "../images/background.jpeg";
import IIC from "../images/IIC_logo.png";
import JEC from "../images/JEC_logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../components/About_data";
import "./About.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Header from "../components/Header";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const countEl = document.getElementById("count");
updateVisitCount();
function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/localhost/muthu?amount=1")
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Header />
      <div className="About-div">
        <div class="container">
          {" "}
          ' <img class="card1" src={background} alt="background" />
          <div class="jec">
            {" "}
            <p class="head">
              JAYA ENGINEERING COLLEGE{" "}
              <p class="desc">
                Affiliated to Anna University, Chennai Approved by AICTE, New
                Delhi <br /> A Telugu Minority Institute{" "}
              </p>{" "}
              <p class="dept">
                DEPARTMENT OF <br /> COMPUTER SCIENCE AND ENGINEERING{" "}
              </p>
            </p>{" "}
            <img class="logo" src={JEC} alt="logo" />
            <img class="iic_logo" src={IIC} alt="iic" />
          </div>{" "}
        </div>
        <div class="vm">
          <h1>
            {" "}
            VISION MISSION <br />{" "}
          </h1>{" "}
          <p class="card-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ut placeat
            eum porro!Dolore ullam incidunt, at sunt architecto nisi eos, facere
            maiores ut neque nostrum hic omnis eum quo quia ? Eos adipisci
            veniam molestias, magnam rerum labore ullam porro a consequatur
            voluptas fuga.Inventore nostrum nam tempora numquam voluptate quasi
            tempore voluptatum rem in , labore ut, doloribus mollitia sed fugit
            ? Enim minima veritatis cupiditate, hic sit ex ab, mollitia eveniet
            alias quae dolores exercitationem nemo, saepe eaque asperiores amet
            quasi dicta sequi inventore.Quam voluptate nesciunt voluptatibus
            deleniti, quisquam quibusdam! Ea voluptatum consequatur officiis
            tempore adipisci necessitatibus, iste obcaecati dignissimos error
            sed impedit asperiores ipsa quas voluptatem eum nihil quod
            perspiciatis fugiat, quibusdam quaerat!A, est quod.Est, ipsa
            explicabo.Odio, adipisci asperiores.Ut consequatur inventore beatae
            omnis aliquam enim reiciendis assumenda cupiditate.Maiores, beatae
            eligendi doloremque dolor eos eveniet.Earum omnis similique delectus
            laudantium possimus porro dicta reprehenderit.Eum ? Lorem, ipsum
            dolor sit amet consectetur adipisicing elit.Nesciunt, fugiat.Odit
            quibusdam, fugiat id nihil modi dolorum doloremque ducimus similique
            ut excepturi sapiente facilis dolores cumque eius a illo
            assumenda!Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.Sed eaque autem recusandae adipisci explicabo!Provident quae
            fugiat hic aspernatur molestiae quidem quaerat!Debitis odit
            obcaecati sequi eligendi ad ? Deserunt, labore.Ea animi odit
            repellendus nemo minima deleniti, voluptatum cupiditate fugit
            assumenda neque harum officiis sed eum accusamus placeat blanditiis
            debitis cum ? Neque quam nemo dolore est perferendis porro incidunt
            quis.Aut quisquam cum explicabo unde quod nihil laborum, maiores
            reiciendis ? Ad dolor dolorum itaque, minus a tenetur consequatur
            fugiat porro.Incidunt ullam repellendus odio aliquam, illum magnam
            totam rerum dolores.Mollitia esse saepe adipisci, eum a perspiciatis
            ullam assumenda, impedit non, vero iste ? Incidunt totam ullam
            eveniet hic.Debitis aliquid possimus est animi vero quam itaque
            dignissimos sed, eaque magnam.Eveniet inventore minus commodi
            aliquid quis autem velit officiis est quod, iusto corrupti voluptate
            facilis nobis corporis, totam libero asperiores modi nulla, quos
            molestias nihil odio.Laboriosam dolor facilis pariatur.{" "}
          </p>{" "}
          <div className="Hitcount">
            <h1 id="count">5,231</h1>
            <h5>Hit Count</h5>
          </div>
        </div>
        <div>
          <h2 class="desc3">Get a Look Into Here</h2>
          <div style={{ margin: "30px" }} className="carousel"></div>
          <div style={{ margin: "30px" }} className="carousel">
            <Slider {...carouselProperties}>
              {data.map((item) => (
                <Card item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
