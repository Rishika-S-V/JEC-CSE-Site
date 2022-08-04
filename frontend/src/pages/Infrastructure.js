import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../components/data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Customheader from "../components/Dynamic_header/Customheader";
import "./Infrastructure.css";

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

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 2,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "180px",
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
        slidesToShow: 2,
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
          width: "300px",
          height: "500px",
          objectFit: "contain",
          marginBottom: "-90px",
          marginTop: "-150px",
        }}
      />
    </div>
  );
};

export default function Infrastructure() {
  return (
    <div>
      <Customheader path="" header="Infrastructure" />
      <div className="Infrastructure-div">
        <div className="give-gap">
          <a className="split " id="give-gap" href="#camp">
            Campus
          </a>{" "}
          <a className="split " id="give-gap" href="#lib">
            Library
          </a>
          <a className="split " id="give-gap" href="#lab">
            Laboratory
          </a>{" "}
          <a className="split " id="give-gap" href="#aud">
            Auditorium
          </a>
        </div>
        <h2 id="camp" class="infa-title">
          Campus
        </h2>
        <div style={{ margin: "30px" }} className="carousel"></div>
        <div style={{ margin: "30px" }} className="carousel">
          <Slider {...carouselProperties}>
            {data.map((item) => (
              <Card item={item} />
            ))}
          </Slider>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <h2 id="lib" class="infa-title">
          Library
        </h2>
        <div style={{ margin: "30px" }} className="carousel"></div>
        <div style={{ margin: "30px" }} className="carousel">
          <Slider {...carouselProperties}>
            {data.map((item) => (
              <Card item={item} />
            ))}
          </Slider>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <h2 id="lab" class="infa-title">
          Laboratory
        </h2>
        <div style={{ margin: "30px" }} className="carousel"></div>
        <div style={{ margin: "30px" }} className="carousel">
          <Slider {...carouselProperties}>
            {data.map((item) => (
              <Card item={item} />
            ))}
          </Slider>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <h2 id="aud" class="infa-title">
          Auditorium
        </h2>
        <div style={{ margin: "30px" }} className="carousel"></div>
        <div style={{ margin: "30px" }} className="carousel">
          <Slider {...carouselProperties}>
            {data.map((item) => (
              <Card item={item} />
            ))}
          </Slider>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
