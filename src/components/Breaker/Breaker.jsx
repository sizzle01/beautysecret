import React from "react";
import "./breaker.css";
import { Grid, Typography } from "@material-ui/core";

const Breaker = ({ head, paragraph }) => {
  return (
    <div className="breaker-cont">
      <Grid container xs={12} direction="column" className="breaker-grid">
        <Grid item>
          <Typography variant="h3" className="breaker-head">
            {head}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="breaker-desc">{paragraph}</Typography>
        </Grid>
        <Grid item>
          <div className="underline"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Breaker;
