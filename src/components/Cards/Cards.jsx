import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import "./Cards.css";
import Slider1 from "../../asset/images/slider1.jpg";
import Slider2 from "../../asset/images/slider2.jpg";
import Slider3 from "../../asset/images/slider3.jpg";
import { CardMedia } from "@material-ui/core";

const Cards = () => {
  return (
    <div>
      <Grid container spacing={4} className="grid-cont">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  className="d-block w-100"
                  src={Slider2}
                  alt="Second slide"
                />
              </CardMedia>
              <Typography className="service-head" variant="h5" component="h2">
                Facials
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  className="d-block w-100"
                  src={Slider2}
                  alt="Second slide"
                />
              </CardMedia>
              <Typography className="service-head" variant="h5" component="h2">
                Beauty treatment
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  className="d-block w-100"
                  src={Slider2}
                  alt="Second slide"
                />
              </CardMedia>
              <Typography className="service-head" variant="h5" component="h2">
                Body Massage
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
