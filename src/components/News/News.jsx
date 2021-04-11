import React from "react";
import Breaker from "../Breaker/Breaker";
import {
  CardActionArea,
  Grid,
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
import "./news.css";
import Data from "../../Utils/data";

const News = () => {
  return (
    <>
      <div>
        <Breaker
          head="BLOG POSTS"
          paragraph="Latest news from us. we keep you updated on recent trends about skin care and beauty"
        />
      </div>

      <Grid Item xs={12}>
        <Grid container className="news-cont">
          {Data.news.map((item) => (
            <>
              <Grid Item md={4} sm={6} xs={12} className="news-card">
                <Card>
                  <CardActionArea className="card-action">
                    <CardMedia className="customCard_image">
                      <img src={item.image} alt="" />
                    </CardMedia>
                    <CardContent>
                      <Typography variant={"body2"} className="customCard_date">
                        {item.date}
                      </Typography>
                      <Typography variant="h6" className="customCard_title">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" className="customCard_text">
                        {item.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default News;
