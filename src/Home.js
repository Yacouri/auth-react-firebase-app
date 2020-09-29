import React from 'react'
import './home.css'
import {Route, Link} from 'react-router-dom'
import Login from './Login'

function Home() {
    const handleRoute = () =>{
        return (
            <Route exact path="/login">
                <Login />
            </Route>
            )
    }
    return (
        <div>
            <h1 className="title mt-5">Beep beep,<br/>simple auth-application.</h1>
            <Link to="/login"><button className="btn btn-primary mt-3 get-started" onClick={handleRoute}>Get started</button></Link>
        </div>
    )
}

export default Home
