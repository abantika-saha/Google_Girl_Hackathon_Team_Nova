import React from "react";
import "./recommendations.css";
import RecommendedVideos from "./recommendedVideos";

function Recommendations() {
  return (
    <div className="recommendationsDiv">
      <div className="recommendations">
        <h3>Choose courses according to your need</h3>
        <p>
          These courses are offered by your instituition. For credit contact Admin
        </p>
        <br></br><br></br>
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default Recommendations;
