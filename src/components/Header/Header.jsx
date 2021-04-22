import { Grid, Typography } from "@material-ui/core";
import Button from "../Button/Button";
import React from "react";
import "./header.css";
import Shop from "./shop.png";
const Header = () => {
  return (
    <>
      <div className="header1">
        <Grid item justify="flex-start" className="shop-icon">
          <img src={Shop} alt="shopicon" />
        </Grid>
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
            <Typography variant="h6" className="header-item">
              <a href="mailto:Beautysecret@gmail.com">
                info@beautysecretskincarespa.com
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className="header-item">
              <a href="tel: 0809 999 8140">Call: +234 809 999 8140</a>
            </Typography>
          </Grid>
          <Grid item className="header-item">
            <a
              href="https://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4"
              target="_blank"
            >
              <Button text="BOOK A SESSION" />
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;
