import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Mission from "../../../asset/images/room1.jpg";

import vision from "../../../asset/images/roomsauna.jpg";

import Philosophy from "../../../asset/images/product3.jpg";

import Breaker from "../../Breaker/Breaker";
import "./Statement.css";

const Statement = () => {
  return (
    <div>
      <div>
        <Breaker
          head="Experience the best care"
          paragraph="We provide international standard skin care and beauty services."
        />
      </div>
      <div>
        <Grid container className="tile">
          <Grid item xs={12} md={6}>
            <img
              className="d-block w-100"
              src={Mission}
              alt="Second slide"
              id="flip"
            />
          </Grid>

          <Grid item xs={12} md={6} className="tile-text tile-text2">
            <Typography variant="h3">OUR MISSION</Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="h5" className="statement">
              Within our caring and nurturing environment, our guests can enjoy
              an unbelievable experience and unveil eccentric beauty secrets and
              outlandish products from many corners of the world.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container className="tile">
          <Grid item xs={12} md={6} className="tile-text">
            <Typography variant="h3" className="">
              OUR VISION
            </Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="h5" className="statement">
              To guide our guests on a journey of relaxation and wellness with
              the best and most exceptional traditional and contemporary
              skincare services.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img className="d-block w-100" src={vision} alt="Second slide" />
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container className="tile">
          <Grid item xs={12} md={6}>
            <img
              className="d-block w-100"
              src={Philosophy}
              alt="Second slide"
            />
          </Grid>

          <Grid item xs={12} md={6} className="tile-text tile-text2">
            <Typography variant="h3">OUR PHILOSOPHY</Typography>
            <Typography variant="h6"></Typography>
            <Typography variant="h5" className="statement">
              We treat everyone with a personalized and holistic approach to
              best achieve your desired image profile. Our spa therapists and
              beauty professionals provide effective and peculiar ways in
              helping our guests make positive changes in their looks/body.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Statement;
