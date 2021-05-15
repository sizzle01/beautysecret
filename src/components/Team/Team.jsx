import React from "react";
import "./team.css";
import Breaker from "../Breaker/Breaker";
const Team = () => {
  return (
    <div>
      <Breaker head="OUR TEAM" paragraph="Meet our experienced team members" />

      <section className="team">
        <div className="row row-cont">
          <div className="col-md-4 profile text-center">
            <div className="img-box">
              <img src="images/ceo.jpeg" alt="" className="img-responsive" />

              <ul>
                <a href="https://instagram.com/deborahomale?igshid=s880e63wzg6c">
                  <li>
                    <i className="fa fa-instagram"></i>
                  </li>
                </a>
                <a href="https://m.facebook.com/beautysecretskincarespa/">
                  <li>
                    <i className="fa fa-facebook"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-twitter"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-linkedin"></i>
                  </li>
                </a>
              </ul>
            </div>
            <h2>Deborah Emmanuel Omale</h2>
            <h3>Founder and CEO</h3>
          </div>
          <div className="col-md-4 profile text-center">
            <div className="img-box">
              <img src="images/genman.jpg" alt="" />

              <ul>
                <a href="#">
                  <li>
                    <i className="fa fa-instagram"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-facebook"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-twitter"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-linkedin"></i>
                  </li>
                </a>
              </ul>
            </div>
            <h2>Dr. Ivy Ilonzo </h2>
            <h3>Dermatologist</h3>
          </div>
          <div className="col-md-4 profile text-center">
            <div className="img-box">
              <img src="images/facman.jpeg" alt="" />

              <ul>
                <a href="https://instagram.com/keziaochemba?igshid=71iklffuunhe">
                  <li>
                    <i className="fa fa-instagram"></i>
                  </li>
                </a>
                <a href="https://m.facebook.com/beautysecretskincarespa/">
                  <li>
                    <i className="fa fa-facebook"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-twitter"></i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i className="fa fa-linkedin"></i>
                  </li>
                </a>
              </ul>
            </div>
            <h2> Kezia Ochemba</h2>
            <h3>Facility Manager</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
