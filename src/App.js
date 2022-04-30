import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage';
import Login from './pages/Login'
import AddBlog from './Components/AddBlog';
import {useState, useEffect} from 'react';
import Edit from './Components/Edit';
import AuthContext  from './Components/AuthContext';
import Logout from './Components/logout';

function App() {
    
  const [name,setName] = useState("");
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [status,setStatus] = useState("false");

  const LoginHandler = (name,status) => {
      console.log(name);
      console.log(status);
      setName(name);
      setStatus(status);
  }  

  console.log(name);
  console.log(status);

  return (
    <div > 
    <AuthContext.Provider value={{login : status}}>
     <Router>
      <Routes>
      <Route exact path="/"  element={<Landingpage/>}/>

      <Route path="/login"
       element={<Login 
      LoginHandler={LoginHandler}
     
       />}/>

      <Route path="/addblog"
       element={<AddBlog  name = {name} 
       />}
      
       />

       <Route path="/edit" element={<Edit/>}/>

       <Route path="/logout" element={<Logout/>}/>
      </Routes>
     </Router>   
    </AuthContext.Provider>             
    
    </div>
  );
}

export default App;