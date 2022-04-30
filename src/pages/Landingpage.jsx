import React from 'react'
import Blog from '../Components/Blog';
import Header from '../Components/Header';
import main from '../Images/main.jpg'

const Landingpage = () => {

  const head={

    alignItem:"center",
    textAlign: "center",

  }
  const img = { width:"100%"}
  return (
      <div class="container-fluid">
          <div class="h1" style={head} >Blog-Nation</div>
          <Header/>
          <img style={img}src={main}  alt="Main image"/>  
          <Blog />
          
      </div>
    
  )
}

export default Landingpage;