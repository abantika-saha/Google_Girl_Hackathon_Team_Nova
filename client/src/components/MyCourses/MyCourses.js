import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";

import CourseCard from "./CourseCard";
import CoursePopup from "./CoursePopup";
import "./style.css";

function MyCourses(props) {
  const { t, i18n } = useTranslation();
  const Courses = [
    {
      id: "1",
      Name: "Course1",
      SubCode: "601",
      Teacher: "AKS",
    },
    {
      id: "2",
      Name: "Course2",
      SubCode: "602",
      Teacher: "PSB",
    },
    {
      id: "3",
      Name: "Course3",
      SubCode: "603",
      Teacher: "NKR",
    },
    {
      id: "4",
      Name: "Course4",
      SubCode: "604",
      Teacher: "IA",
    },
    {
      id: "5",
      Name: "Course5",
      SubCode: "605",
      Teacher: "SB",
    },

    {
      id: "6",
      Name: "Course6",
      SubCode: "606",
      Teacher: "TKS",
    },
    {
      id: "7",
      Name: "Course7",
      SubCode: "607",
      Teacher: "PA",
    },
    {
      id: "8",
      Name: "Course8",
      SubCode: "608",
      Teacher: "CK",
    },
    {
      id: "7",
      Name: "Course9",
      SubCode: "609",
      Teacher: "SSB",
    },
    {
      id: "8",
      Name: "Course10",
      SubCode: "610",
      Teacher: "JCB",
    },
  ];

  const ListCards = Courses.map((course) => (
    <CourseCard
      Name={course.Name}
      SubCode={course.SubCode}
      Teacher={course.Teacher}
      id={course.id}
      area="list"
    />
  ));

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__heading">{t("Your Courses")}</div>
        <div className="elbtn__type1">
          <Button component={Link} to="/add-course">
            &nbsp;&nbsp;{t("Add Course")}
          </Button>
        </div>
        <div className="dashboard__list">
          <div className="courseCard-group">{ListCards}</div>
        </div>
      </div>
    </>
  );
}
export default MyCourses;
