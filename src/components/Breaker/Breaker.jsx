import React from "react";
import "./breaker.css";
import { Grid, Typography } from "@material-ui/core";

const Breaker = ({}) => {
  return (
    <div className="breaker-cont">
      <Grid container xs={12} direction="column" className="breaker-grid">
        <Grid item>
          <Typography variant="h3" className="breaker-head">
            Our services
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="breaker-desc">
            We provide the best skin care services in Nigeria, we have the best
            guys on our team
          </Typography>
        </Grid>
        <Grid item>
          <div className="underline"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Breaker;
