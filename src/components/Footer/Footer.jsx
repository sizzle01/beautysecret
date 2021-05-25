import React from "react";
import "./footer.css";
import Data from "../../Utils/data";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Grid container className="footer-cont">
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              LOCATION
            </Typography>
            <div className="footer-line"></div>
            <Typography variant="h6" className="footer-list">
              No. 424, Oka Akoko Crescent, Off Lagos Street, Garki, Abuja
            </Typography>
            <Typography variant="h6" className="footer-list">
              Phone:+2348099998140
            </Typography>
            <Typography variant="h6" className="footer-list">
              info@beautysecretskincarespa.com
            </Typography>
          </Grid>

          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              PAGES
            </Typography>
            <div className="footer-line"></div>
            <Typography variant="h6" className="footer-list">
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <Link to="/contact">Contact</Link>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <Link to="/services">Services</Link>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <a
                href="https://store.beautysecretskincarespa.com"
                target="_blank"
              >
                Shop
              </a>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <a
                href="Appointmenthttps://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4"
                target="_blank"
              >
                Appointment
              </a>
            </Typography>
          </Grid>
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              TAGS
            </Typography>
            <div className="footer-line"></div>
            <Typography variant="h6" className="footer-list">
              <Link to="/services">Manicure</Link>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <Link to="/services">Pedicure</Link>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <Link to="/services">Facial</Link>
            </Typography>
            <Typography variant="h6" className="footer-list">
              <Link to="/services">SPa</Link>
            </Typography>
          </Grid>
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              PAYMENT METHODS
            </Typography>

            <div className="footer-line"></div>

            <Grid item className="footer-item">
              <div className="header_right">
                {Object.keys(Data.payment).map((key) => (
                  <a href={Data.payment[key].link} target="_blank">
                    {Data.payment[key].image}
                  </a>
                ))}
              </div>
            </Grid>
          </Grid>

          <div className="footer-break"></div>

          <Grid container className="footer-cont2">
            <Grid item className="footer-item">
              <Typography variant="h6" className="footer-list">
                Copyright 2021 Beauty secret. All Rights Reserved
              </Typography>
            </Grid>
            <Grid item className="footer-item">
              <div className="header_right">
                {Object.keys(Data.socials).map((key) => (
                  <a href={Data.socials[key].link} target="_blank">
                    {Data.socials[key].icon}
                  </a>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
