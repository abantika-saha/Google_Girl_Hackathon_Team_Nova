import React from "react";
import "../../components/homeContent/becomeInstructor.css";

function BecomeInstructor() {
  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
        <h2 className="heading">Make a course</h2>
        <p className="about">
          Apart from teaching your normal classes, upload your other courses here to enrich learning{" "}
        </p>
        <div className="startTeching button">Start here</div>
      </div>
    </div>
  );
}

export default BecomeInstructor;
