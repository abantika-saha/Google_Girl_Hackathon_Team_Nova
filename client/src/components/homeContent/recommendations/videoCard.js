import React from "react";
import "./videoCard.css";
import StarIcon from "@material-ui/icons/Star";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function VideoCard(props) {
  return (
    <div className="videoCard">
     
      <h3>{props.courseTitle}</h3>
      <p>{props.instructor}</p>
    <div className="bestsellerBadge">Enroll here</div>
    <br>
    </br>
    
    <div className="information">More Information</div>
    </div>
  );
}

export default VideoCard;
