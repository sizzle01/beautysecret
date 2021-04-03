import React from "react";
import "./Gallery.css";
import { useState } from "react";
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
import Data from "../../Utils/data";
import Breaker from "../Breaker/Breaker";

export const Gallery = () => {
  const [tabValue, setTabValue] = React.useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <>
      <div>
        <Breaker
          head="GALLERY"
          paragraph=" check out from a range of our work"
        />
      </div>
      <div className="Gallery-cont">
        <Grid container>
          <Grid item xs={12}>
            <Tabs
              value={tabValue}
              indicatorColor="white"
              className="customTabs"
              onChange={(event, newValue) => setTabValue(newValue)}
            >
              <Tab
                label="All"
                value="All"
                className={
                  tabValue == "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
              {[...new Set(Data.projects.map((item) => item.tag))].map(
                (tag) => (
                  <Tab
                    label={tag}
                    value={tag}
                    className={
                      tabValue == tag
                        ? "customTabs_item active"
                        : "customTabs_item"
                    }
                  />
                )
              )}
            </Tabs>
          </Grid>
          {/**IMAGES */}
          <Grid Item xs={12}>
            <Grid container className="image-cont">
              {Data.projects.map((project) => (
                <>
                  {tabValue == project.tag || tabValue == "All" ? (
                    <Grid Item className="projbox" sm={6} md={4} xs={12}>
                      <Grow in timeout={1000}>
                        <Card
                          className="customCard"
                          onClick={() => setProjectDialog(project)}
                        >
                          <CardActionArea>
                            <CardMedia
                              className="customCard_image"
                              image={project.image}
                            />
                            <CardContent>
                              <Typography
                                variant={"body2"}
                                className="customCard_title"
                              ></Typography>

                              <Typography
                                variant="body2"
                                className="customCard_caption"
                              ></Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grow>
                    </Grid>
                  ) : null}
                </>
              ))}
            </Grid>
          </Grid>
          <Dialog
            open={projectDialog}
            onClose={() => setProjectDialog(false)}
            className="projectDialog"
          >
            <img
              src={projectDialog.image}
              alt=""
              className="projectDialog_image"
            />
          </Dialog>
        </Grid>
      </div>
    </>
  );
};
export default Gallery;
