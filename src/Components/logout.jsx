import React,{useContext} from 'react'
import AuthContext from './AuthContext';
import {useNavigate} from "react-router-dom"


const Logout = (props) => {

  const navigate = useNavigate();

  const value = useContext(AuthContext)

  function out(e){ 

    navigate("/");
    value.login="false";

  }

  return (
    <div class="container-fluid">
      <div class="alert alert-warning"> 
        Are you sure you want to log out?
      </div>
        <div>
         <button onClick={out}> Log Out </button>
        </div>             
    </div>
  )
}

export default Logout