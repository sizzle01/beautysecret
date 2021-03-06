import React from "react";
import "./player.css";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Breaker from "../Breaker/Breaker";
const Player = () => {
  return (
    <div className="video">
      <Breaker paragraph="Check out Videos From Our Channel" />
      <Grid container xs={12} className="player-cont">
        <Grid item xs={12} sm={6} md={4} className="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/ICy2riEDG-8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/_3FjqzGsMR4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Player;
