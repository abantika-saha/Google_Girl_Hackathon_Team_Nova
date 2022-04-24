import React from "react";
import {Link} from "react-router-dom";
import { Button  } from "@material-ui/core";

import CourseCard from './CourseCard'
import CoursePopup  from "./CoursePopup";
import './style.css'


function MyCourses(props) {

   const  Courses=[
        {
            "id":"1",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"2",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"3",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"4",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"5",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
    
        {
            "id":"6",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"7",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"8",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"7",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
        {
            "id":"8",
            "Name":"Course1",
            "SubCode":"602",
            "Teacher":"AK Shinha"
    
        },
    ]
    
    const ListCards = Courses.map((course) => (
        <CourseCard
            Name={course.Name}
            SubCode={course.SubCode}
            Teacher={course.Teacher}
            id={course.id}
            area="list"
        />  
    ))
   
    

    return (
        <>
            <div className="dashboard">
                
                <div className="dashboard__heading">Your Courses</div>
                <div className="elbtn__type1">
                <Button component={Link}to="/add-course">
                &nbsp;&nbsp;Add Course
                </Button>
                </div>
                <div className="dashboard__list">
                    <div className="courseCard-group">{ListCards}</div>
                </div>
                
                
            </div>
        
        </>
    )
}
export default MyCourses;
        