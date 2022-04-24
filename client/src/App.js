import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import AuthStudent from './components/AuthStudent/AuthStudent'
import AuthTeacher from './components/AuthTeacher/AuthTeacher'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import Discussion from './components/Discussion/Discussion'
import DoubtDetails from './components/DoubtDetails/DoubtDetails'



const App = () => {
    const [open,setOpen]=useState(false);
    return (
        <BrowserRouter>
            <Navbar open={open} setOpen={setOpen}/>
            <Switch>
                <Route exact path="/" render={()=><Home open={open}/>} />
                <Route exact path="/auth" component={Auth} /> 
                <Route exact path="/auth/student" component={AuthStudent} />  
                <Route exact path="/auth/teacher" component={AuthTeacher} /> 
                <Route exact path="/discussion" component={Discussion} /> 
                <Route exact path="/discussion/:id" component={DoubtDetails} />  
            </Switch>
        </BrowserRouter>
    )
}

export default App;