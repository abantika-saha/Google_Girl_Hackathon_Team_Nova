import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import AuthStudent from './components/AuthStudent/AuthStudent'
import AuthTeacher from './components/AuthTeacher/AuthTeacher'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'



const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} /> 
                <Route exact path="/auth/student" component={AuthStudent} />  
                <Route exact path="/auth/teacher" component={AuthTeacher} />   
            </Switch>
        </BrowserRouter>
    )
}

export default App;