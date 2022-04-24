import React from "react";
import "../../components/header/headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function HeaderPrimary() {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
        
        </div>
        <div className="categoriesDiv">
          <span className="categories">Avaliable Courses</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for Professors"></input>
      </div>
      <div className="right part">
        <div className="businessDiv">
          <span className="business">Your Courses</span>
        </div>
        <div className="businessDiv">
          <span className="business">Suggest Courses</span>
        </div>
        <div className="businessDiv">
          <span className="business">Credit Information</span>
        </div>
        <div className="login button">Contact Admin</div>
       
      </div>
    </div>
  );
}

export default HeaderPrimary;