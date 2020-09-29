import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Login from '../Login'
import { auth } from '../firebase'

function AuthRoutes({username, logged}) {
    const logout = () => {
        auth
        .signOut()
        .then(()=>{
            return <Redirect to="/login" />
        })
        .catch(function(error) {
            console.log(error.message)
        });
    }
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/welcome">Home</Link>
                        </li>
                        <li>
                            <button className="btn btn-primary" onClick={logout}>Log out</button>
                        </li>
                    </ul>
                </nav>
                
                <div className="cmps">
                    <Switch>
                        <Route exact path="/login">
                            <Redirect to="/welcome" />
                        </Route>
                        <Route exact path="/welcome" render={() => (
                            logged ? <h1>Beep beep ! welcome back {username}</h1> : <Login />
                        )} />
                        <Route exact path="/" render={() => (
                            logged ? <h1>Beep beep ! welcome back {username}</h1> : <Login />
                        )} />
                    </Switch>
                    
                </div>
                
            </div>
        </Router>
    )
}

export default AuthRoutes
