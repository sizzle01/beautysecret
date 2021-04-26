import React from "react";
import "./About.css";
import Nave from "../../Navbar/Nave";
import Footer from "../../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider2 from "../../../asset/images/slider2.jpg";
import Banner1 from "../../../asset/images/aboutbanner.jpg";

function About() {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${Banner1})` }}>
        <Typography variant="h2" className="head">
          About Us
        </Typography>
      </div>
      <Grid item xs={12} className="history">
        <Grid container>
          <Typography variant="h4" className="heading" justify="center">
            BEAUTY SECRETS HISTORY
          </Typography>
          <Typography variant="h5" className="history-paragraph">
            Beauty Secrets is a privately owned Nigerian Company offering
            comfort and ease of access to world-class skin care and spa services
            providing full spectrum spa services, blending the classic age-long
            tradition with 21st century state-of-the art equipment in the hands
            of the warmest aestheticians and cosmetologists. Beauty Secrets Skin
            care and Spa offers an ultimate luxurious relaxation, restorative
            parley and reinvigorating experience, a different world away from
            the surrounding tumult, obsessed with observing the strictest
            sterilization and hygiene procedures according to global best
            practices.
          </Typography>
          <Typography variant="h5" className="history-paragraph">
            Our well trained therapists will guaranty the care and pamper you in
            an atmosphere oozing with an aura of complete royalty, our sections
            are well tailored to provide A-list get-way for celebrities, and we
            are uniquely designed to cater for the entire family all at once
            without tampering with their sense of privacy or serenity. Beauty
            Secrets opened its doors on the 4th of December 2015 and have been
            running efficiently since then.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="tile">
        <Grid item xs={12} md={6}>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />
        </Grid>

        <Grid item xs={12} md={6} className="tile-text tile-text2">
          <Typography variant="h3">About Beauty Secrets Medspa</Typography>
          <Typography variant="h6">Beauty is a fresh feeling</Typography>
          <Typography>
            Beauty Secrets Medspa offers an ultimate luxurious relaxation,
            restorative parley and reinvigorating experience, a different world
            away from the surrounding tumult, obsessed with observing the
            strictest sterilization and hygiene procedures according to global
            best practices.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default About;
