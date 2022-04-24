import React from "react";
import "../../components/homeContent/adImage.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function AdImage() {
  return (
    <div className="adImageDiv">
      <div className="offerDiv">
        <h2>Elective Courses</h2>
        <p>
         This has been made keeping in mind the growth of all students. Study courses outside of your curriculum at your own pace
        </p>
        <div className="searchBarDiv">
          <input
            className="searchBar"
            placeholder="What do you want to learn?"
          ></input>
          <div className="searchIconDiv">
            <SearchOutlinedIcon className="searchIcon" />
          </div>
        </div>
      </div>
      <img
        className="adImage"
        src="https://images.pexels.com/photos/583475/pexels-photo-583475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=1"
        alt="AdImage"
      />
    </div>
  );
}

export default AdImage;
