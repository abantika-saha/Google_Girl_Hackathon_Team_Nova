import React from "react";
import "./topCategories.css";
import CategoryCard from "./categoryCard";

function TopCategories() {
  return (
    <div className="topCategories">
      <h2 className="categoryHeading">Topics Available</h2>
      <div className="categories">
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1"
          }
          
          title={"Development"}
        />
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/3828833/pexels-photo-3828833.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1"
          }
          title={"World Heritage"}
        />
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1"
          }
          title={"Humanities"}
        />
        <CategoryCard
          imgSrc={
          "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1"
          }
          title={"Personal Development"}
        />
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1"
          }
          title={"Entrepreneurship"}
        />
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1g"
          }
          title={"Trade and Commerce"}
        />
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=350&w=300"
          }
          title={"History"}
          ></CategoryCard>
          <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=350&w=300"
          }
          title={"Nature"}
        />
        <CategoryCard
          imgSrc={
            "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=350&dpr=1"
          }
          title={"STEM"}
        />
      </div>
    </div>
  );
}

export default TopCategories;
