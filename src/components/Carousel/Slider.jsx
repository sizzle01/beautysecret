import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import Slider1 from "../../asset/images/slider1.jpg";
import Slider2 from "../../asset/images/slider2.jpg";
import Slider3 from "../../asset/images/slider3.jpg";
import Button from "../Button/Button";
import Typography from "@material-ui/core/Typography";

const Slider = () => {
  return (
    <div>
      <Carousel className="slider-cont">
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={Slider1} alt="First slide" />
          <Carousel.Caption className="c-caption">
            <Typography variant="h2" className="c-head">
              THE BEST KEPT SECRET IN ABUJA
            </Typography>
            <Typography variant="h4" className="c-text">
              Discover Deep Relaxation & Comfort at Beauty Secrets Medspa
            </Typography>

            <a href="https://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4">
              <Button text="VISIT US" />
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />

          <Carousel.Caption className="c-caption">
            <Typography variant="h2" className="c-head">
              AN AMAZING SPLENDOUR
            </Typography>
            <Typography variant="h4" className="c-text">
              If beauty is a splendour, then you'll find one at Beauty Secrets
              Medspa
            </Typography>

            <a href="https://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4">
              <Button text="BOOK A SESSION" />
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="Third slide" />

          <Carousel.Caption className="c-caption">
            <Typography variant="h2" className="c-head">
              GREAT DELIGHT
            </Typography>

            <Typography variant="h4" className="c-text">
              Serene atmosphere that massages your delight
            </Typography>
            <a href="https://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4">
              <Button text="BOOK A SESSION" />
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
