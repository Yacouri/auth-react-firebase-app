import React, {useState, useEffect}from 'react';
import './App.css';
import Routers from './routes/Routers'
import AuthRoutes from './routes/AuthRoutes'
import { auth } from './firebase'

function App() {
    const [user, setUser] = useState(false)
    const [name, setName] = useState('')

    // check if user is authenticated
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          setUser(true)
          setName(user.displayName)
        }
        else{
          setUser(false)
          }
      })
    },[user])
    return (
    <div className="App">
      {user? <AuthRoutes username={name} logged={user}/> : <Routers />}
    </div>
  );
}

export default App;
