import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import "./Cards.css";

import Facial1 from "../../asset/images/facials/facial1.jpg";
import Therapy1 from "../../asset/images/therapy/massage1.jpg";
import Medspa1 from "../../asset/images/Medspa/medspa2.PNG";
import Pedicure1 from "../../asset/images/pedicure/pedicure1.jpg";
import Cosmetics from "../../asset/images/cosmetics/cosmetics.jpg";
import { CardMedia } from "@material-ui/core";
import Breaker from "../Breaker/Breaker";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div>
        <Breaker
          head="Our services"
          paragraph="Beauty Secrets Medspa is a name synonymous with efficiency in service delivery.
         And we take pride in the quality of highly skilled professionals that are committed to giving
          you the best."
        />
      </div>
      <div>
        <Grid container className="grid-cont" spacing={4}>
          <Grid item xs={12} sm={6} md={4} className="service-card">
            <Card>
              <CardContent>
                <CardMedia>
                  <img
                    className="d-block w-100"
                    src={Medspa1}
                    alt="Second slide"
                  />
                </CardMedia>
                <Typography
                  className="service-head"
                  variant="h5"
                  component="h2"
                >
                  MEDSPA
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/services">
                  <Button size="small">See More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="service-card">
            <Card>
              <CardContent>
                <CardMedia>
                  <img
                    className="d-block w-100"
                    src={Facial1}
                    alt="Second slide"
                  />
                </CardMedia>
                <Typography
                  className="service-head"
                  variant="h5"
                  component="h2"
                >
                  FACIALS
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/services">
                  <Button size="small">See More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="service-card service-card1"
          >
            <Card>
              <CardContent>
                <CardMedia>
                  <img
                    className="d-block w-100"
                    src={Therapy1}
                    alt="Second slide"
                  />
                </CardMedia>
                <Typography
                  className="service-head"
                  variant="h5"
                  component="h2"
                >
                  MASSAGE THERAPY
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/services">
                  <Button size="small">See More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="service-card">
            <Card>
              <CardContent>
                <CardMedia>
                  <img
                    className="d-block w-100"
                    src={Pedicure1}
                    alt="Second slide"
                  />
                </CardMedia>
                <Typography
                  className="service-head"
                  variant="h5"
                  component="h2"
                >
                  MANICURE & PEDICURE
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/services">
                  <Button size="small">See More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="service-card">
            <Card>
              <CardContent>
                <CardMedia>
                  <img
                    className="d-block w-100"
                    src={Cosmetics}
                    alt="Second slide"
                  />
                </CardMedia>
                <Typography
                  className="service-head"
                  variant="h5"
                  component="h2"
                >
                  COSMETICS
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/services">
                  <Button size="small">See More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Cards;
