import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breaker from "../Breaker/Breaker";
import CSS from "../../css/App.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <>
      <Breaker head="OUR TEAM" paragraph="Meet our experienced team members" />

      <Slider {...settings} className="slider-cont">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/ceo.jpeg" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="https://m.facebook.com/beautysecretskincarespa/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/deborahomale?igshid=s880e63wzg6c">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li></li>
            </ul>
            <div className="details">
              <h2>
                Deborah Emmanuel Omale
                <span className="job-title">Founder and CEO</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/facman.jpeg" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="https://m.facebook.com/beautysecretskincarespa/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/keziaochemba?igshid=71iklffuunhe">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                Kezia Ochemba{" "}
                <span className="job-title">Facility Manager</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/genman.jpg" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                Mrs. Jennifer
                <span className="job-title">General Manager</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default ImageSlider;



