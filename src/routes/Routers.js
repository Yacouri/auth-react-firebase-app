import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import './routers.css'
import { auth } from '../firebase'
import AuthRoutes from './AuthRoutes'

function Routers() {
    const [user, setUser] = useState(false)
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
            setUser(true)
            }
            else{
            setUser(false)
            }
        })
    },[user])
    return (
        <Router>
            <div className="rt">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>    
                            <Link to="/register">register</Link>
                        </li>
                    </ul>
                </nav>
                
                <div className="cmps">
                    <Switch>
                        <Route exact path="/" render={() => (
                            user ? <AuthRoutes /> : <Home />
                        )} />
                        <Route exact path="/login" render={() => (
                            user ? <AuthRoutes /> : <Login />
                        )} />
                        <Route exact path="/register" render={() => (
                            user ? <AuthRoutes /> : <Register />
                        )} />
                        <Route render={
                            ()=> <h2>Oops! page not found.</h2>
                        } />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Routers
