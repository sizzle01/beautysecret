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

const Portfolio = () => {
  const [tabValue, setTabValue] = React.useState();
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/**tabs */}
      <Grid Item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            /*label="Services"*/
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(data.services.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                tabValue == tag ? "customTabs_item active" : "customTabs_item"
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
  );
};

export default Portfolio;
