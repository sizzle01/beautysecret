import React from "react";
import {
  CardActionArea,
  Grid,
  Tab,
  Tabs,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useState } from "react";
import data from "../../../Utils/data";
import "./portfolio.css";
import Banner1 from "../../../asset/images/aboutbanner.jpg";
import Footer from "../../Footer/Footer";
const Portfolio = () => {
  const [tabValue, setTabValue] = React.useState();

  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${Banner1})` }}>
        <Typography variant="h2" className="head">
          Our services
        </Typography>
      </div>
      <div className="service-intro">
        <Typography variant="h5">
          Book Our Services and discover ultimate luxurious relaxation,
          rejuvenating parley, and reinvigorating experience from the moment you
          walk through the gates, you'll be treated like royalty, with every
          detail designed to provide the ultimate in comfort and luxury during
          your stay.
        </Typography>
      </div>

      <Grid container spacing={1} className="section pb_45 pt_45">
        {/**tabs */}
        <Grid Item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="customTab"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              /*label="All"*/
              className={
                tabValue == "All" ? "customTab_item active" : "customTab_item"
              }
            />
            {[...new Set(data.services.map((item) => item.tag))].map((tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTab_item active" : "customTab_item"
                }
              />
            ))}
          </Tabs>
        </Grid>
        {/**projects */}
        <Grid Item xs={12}>
          <Grid container spacing={3}>
            {data.services.map((services) => (
              <>
                {tabValue == services.tag || tabValue == "All" ? (
                  <Grid Item className="projbox" className="service-wrapper">
                    <Card className="customCard" xs={12}>
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={services.image}
                          title={services.title}
                        />
                        <CardContent>
                          <Typography variant="h5" className="customCard_title">
                            {services.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.caption}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist1}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist2}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist3}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist4}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist5}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.captionlist6}
                          </Typography>
                          <Typography variant="h5" className="subservice-head">
                            {services.subservicehead}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext}
                          </Typography>
                          <Typography variant="h5" className="subservice-head">
                            {services.subservicehead2}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext2}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext22}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext222}
                          </Typography>
                          <Typography variant="h5" className="subservice-head">
                            {services.subservicehead3}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext3}
                          </Typography>
                          <Typography variant="h5" className="subservice-head">
                            {services.subservicehead4}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext4}
                          </Typography>
                          <Typography variant="h5" className="subservice-head">
                            {services.subservicehead5}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext5}
                          </Typography>
                          <Typography variant="h5" className="subservice-head">
                            {services.subservicehead6}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {services.subservicetext6}
                          </Typography>
                          <Typography variant="h6" className="service-link">
                            <a
                              href="https://beautysecretskincarespa.com/"
                              target="_blank"
                            >
                              {services.link}
                            </a>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>{" "}
      </Grid>
      <Footer />
    </>
  );
};

export default Portfolio;
