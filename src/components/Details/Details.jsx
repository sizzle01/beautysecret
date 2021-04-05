import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider2 from "../../asset/images/slider2.jpg";
import Breaker from "../Breaker/Breaker";
import "./Details.css";

const Details = () => {
  return (
    <>
      <div>
        <Breaker
          head="Experience the Best care "
          paragraph="Come to us and get the best. we provide international standard skin care and beauty services. "
        />
      </div>
      <div>
        <Grid container className="tile">
          <Grid item xs={12} md={6}>
            <img className="d-block w-100" src={Slider2} alt="Second slide" />
          </Grid>

          <Grid item xs={12} md={6} className="tile-text tile-text2">
            <Typography variant="h3">The Best Beauty</Typography>
            <Typography variant="h6">Beauty is a fresh feeling</Typography>
            <Typography>
              Here is where you get the best skin services we have the most
              qualified professionals to attend to your needs and wants. our
              product are fit fit for consumption so be rest assured your skin
              is being considered in the process of making our beauty products
              products
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container className="tile">
          <Grid item xs={12} md={6} className="tile-text">
            <Typography variant="h3" className="">
              WE PROVIDE NATURAL AND BEST BODY CARE
            </Typography>
            <Typography variant="h6">Beauty is a fresh feeling</Typography>
            <Typography>
              Here is where you get the best skin services we have the most
              qualified professionals to attend to your needs and wants. our
              product are fit fit for consumption so be rest assured your skin
              is being considered in the process of making our beauty products
              products
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img className="d-block w-100" src={Slider2} alt="Second slide" />
          </Grid>
        </Grid>
      </div>
      <div>
        <Breaker />
      </div>
    </>
  );
};

export default Details;
