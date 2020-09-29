import React, {useState} from 'react'
import './login.css'
import {auth} from './firebase'
import { Redirect } from 'react-router'

function Login() {

    // handle form inputs
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    //handle form on submit
    const handleSubmit = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            return (<Redirect from="/login" to="/welcome" />);
        })
        .catch((error)=>{
            setResponse(error.message)
            setAlert('alert alert-danger mt-2')
        })
    }
    // hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [alert, setAlert] = useState('');
    //const [logged, setLogged] = useState('');

    return (
        <div>
            <form  onSubmit={handleSubmit}>
            <p className={alert}>{response}</p>
            <input 
                    className="form-control mt-2" 
                    type="email" 
                    placeholder="Email"
                    onChange={handleEmail}
                />
                <input 
                    className="form-control mt-2" 
                    type="password" 
                    placeholder="password" 
                    onChange={handlePassword}
                />
                <button className="btn btn-primary mt-2 log-btn">Login</button>
            </form>
        </div>
    )
}

export default Login
