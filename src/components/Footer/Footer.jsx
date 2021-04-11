import React from "react";
import "./footer.css";
import Data from "../../Utils/data";
import { Grid, Typography } from "@material-ui/core";

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
              Home
            </Typography>
            <Typography variant="h6" className="footer-list">
              Contact
            </Typography>
            <Typography variant="h6" className="footer-list">
              Services
            </Typography>
          </Grid>
          <Grid item className="footer-item">
            <Typography variant="h5" className="footer-desc">
              TAGS
            </Typography>
            <div className="footer-line"></div>
            <Typography variant="h6" className="footer-list">
              Manicure
            </Typography>
            <Typography variant="h6" className="footer-list">
              Pedicure
            </Typography>
            <Typography variant="h6" className="footer-list">
              Facial
            </Typography>
            <Typography variant="h6" className="footer-list">
              Spa
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
