import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage';
import Login from './pages/Login'
import AddBlog from './Components/AddBlog';
import {useState} from 'react';
import Edit from './Components/Edit';

function App() {
    
  const [name,setName] = useState("");
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const LoginHandler = (name,email,password) => {
    console.log(name,email,password);
    
  }   

  return (
    <div > 
    <Router>
      <Routes>
      <Route exact path="/"  element={<Landingpage/>}/>

      <Route path="/login"
       element={<Login 
      LoginHandler={LoginHandler}
       setName={setName} 
       setEmail={setEmail} 
       setPassword={setPassword}
       />}/>

      <Route path="/addblog"
       element={<AddBlog name={name}/>}
      
       />

       <Route path="/edit" element={Edit  }/>
      </Routes>
    </Router>                 
    
    </div>
  );
}

export default App;
