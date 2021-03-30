import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <Grid
        container
        direction="row"
        xs={12}
        spacing={2}
        justify="flex-end"
        alignItems="center"
        justifyContent="center"
        className="header-cont"
      >
        <Grid item>
          <Typography className="header-item">
            Beautysecret@gmail.com
          </Typography>
        </Grid>
        <Grid item>
          <Typography className="header-item">08167722341</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
