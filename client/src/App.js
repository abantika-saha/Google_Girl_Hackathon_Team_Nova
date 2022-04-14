import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar'



const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} />  
            </Switch>
        </BrowserRouter>
    )
}

export default App;