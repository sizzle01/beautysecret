import React from "react";

function Carousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../asset/images/logo.jpeg")}
            alt="carouselimage1 "
            style={{ height: "50vh" }}
          />
          <Carousel.caption>
            <h3>first slider title</h3>
            <p>Welcome to Our spar</p>
          </Carousel.caption>
        </Carousel.Item>
        {/* */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../asset/images/logo.jpeg")}
            alt="carouselimage1 "
            style={{ height: "50vh" }}
          />
          <Carousel.caption>
            <h3>Second slider title for a test</h3>
            <p>We have the best professionals to attend to you</p>
          </Carousel.caption>
        </Carousel.Item>

        {/* */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../asset/images/logo.jpeg")}
            alt="carouselimage1 "
            style={{ height: "50vh" }}
          />
          <Carousel.caption>
            <h3>Third and the last slider title for a test</h3>
            <p>We have the best professionals to attend to you</p>
          </Carousel.caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel;
