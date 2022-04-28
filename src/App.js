import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage';
import Login from './pages/Login'
import AddBlog from './Components/AddBlog';
import {useState, useEffect} from 'react';
import Edit from './Components/Edit';

function App() {
    
  const [name,setName] = useState("");
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [login,setLogin] = useState("");

    const LoginHandler = (name,login) => {
      console.log(name);
      console.log(login);
      setName(name);
      setLogin(login);
  }  

  console.log(name);
  console.log(login);

  const AuthContext = React.createContext(login);
  
  return (
    <div > 
    <AuthContext.Provider value='login'>
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

       <Route path="/edit" element={Edit}/>
      </Routes>
     </Router>   
    </AuthContext.Provider>             
    
    </div>
  );
}

export default App;