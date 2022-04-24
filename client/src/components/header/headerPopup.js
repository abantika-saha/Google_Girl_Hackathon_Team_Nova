import React, { useState } from "react";
import "../../components/header/headerPopup.css";
import ClearIcon from "@material-ui/icons/Clear";

function HeaderPopup() {
  const [hidePopup, setHidePopup] = useState(false);

  return (
    <div className={`headerPopup ${hidePopup ? "hide" : ""}`}>
      <div className="dialogueBox">
        <span className="title">Welcome to your Elective Courses </span>
        <span className="offer">
         Choose courses beyond your curriculum to boost your learning
        </span>
      </div>
      <div
        className="cross"
        onClick={() => {
          setHidePopup(true);
        }}
      >
        <ClearIcon className="popupClearIcon" />
      </div>
    </div>
  );
}

export default HeaderPopup;