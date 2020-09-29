import React, {useState} from 'react'
import {auth, storage} from './firebase'

function Register() {

    // handle form inputs
    const handleUsername =(e)=>{
        setUsername(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }

    //handle form on submit
    const handleSubmit = (e) =>{
        e.preventDefault();
        // create new user with email and password
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            return auth.user.updateProfile({
                displayName : username
            },
            // this will fire when user register
            setResponse('Beep beep!!! Your account is ready to login.'),
            setAlert('alert alert-success mt-2'),
            storage.collection('users').doc().set({
                username : username,
                email : email,
                password : password
            })
            )
        })
        .catch((error=>{
            // this will fire when we have a registration error
            setResponse(error.message)
            setAlert('alert alert-danger mt-2')
        }));
    }

    //  hooks
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [alert, setAlert] = useState('');

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <p className={alert}>{response}</p>
                <input 
                    className="form-control mt-2" 
                    type="text" 
                    placeholder="Username" 
                    onChange={handleUsername} 
                />
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
                <button className="btn btn-primary mt-2 log-btn">Register</button>
            </form>
        </div>
    )
}

export default Register
