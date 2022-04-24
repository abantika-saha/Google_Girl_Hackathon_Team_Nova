import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import AuthStudent from './components/AuthStudent/AuthStudent'
//<Route exact path="/auth/teacher" component={AuthTeacher} />  
//import AuthTeacher from './components/AuthTeacher/AuthTeacher'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import MyCourses from './components/MyCourses/MyCourses'
import CoursePopup  from './components/MyCourses/CoursePopup'



const App = () => {
    const [open,setOpen]=useState(false);
    return (
        <BrowserRouter>
            <Navbar open={open} setOpen={setOpen}/>
            <Switch>
                <Route exact path="/" render={()=><Home open={open}/>} />
                <Route exact path="/auth" component={Auth} /> 
                <Route exact path="/auth/student" component={AuthStudent} />
                <Route exact path="/my-courses" component={MyCourses}/> 
                <Route exact path="/add-course" component={CoursePopup}/> 

            </Switch>
        </BrowserRouter>
    )
}

export default App;