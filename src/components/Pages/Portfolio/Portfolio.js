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
  const [tabValue, setTabValue] = React.useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/**Title */}
      <Grid item className="section_title mb_20 ">
        <span></span>
        <h6 className="section_title_text" variant="h6">
          My work
        </h6>
      </Grid>
      {/**tabs */}
      <Grid Item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="Services"
            value="All"
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
                        <Typography
                          variant={"body2"}
                          className="customCard_title"
                        >
                          {services.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          className="customCard_caption"
                        >
                          {services.caption}
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
