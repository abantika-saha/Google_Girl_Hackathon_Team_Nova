import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"Analog Electronics"}
        instructor={"Instructor Name, Designation"}
        rating={4.6}
        noOfStudents={"(166,042)"}
        price={"₹8,640"}
      />
      
      <VideoCard
        courseTitle={"Data Structures"}
        instructor={"Instructor Name, Designation"}
        rating={4.4}
        noOfStudents={"(116,637)"}
        price={"₹8,640"}
      />
      <VideoCard
        courseTitle={
          "Introduction to Humanities"
        }
        instructor={"Instructor Name, Designation"}
        rating={4.8}
        noOfStudents={"(49,923)"}
        price={"₹8,960"}
      />
      <VideoCard
        courseTitle={
          "Course of Nature"
        }
        instructor={"Instructor Name, Designation"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        price={"₹1,280"}
      />
      <VideoCard
        courseTitle={
          "Engineering Physics"
        }
        instructor={"Instructor Name, Designation"}
        rating={4.8}
        noOfStudents={"(25,064)"}
        price={"₹8,640"}
      />
    </div>
  );
}

export default RecommendedVideos;
