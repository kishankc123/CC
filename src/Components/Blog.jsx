import React from 'react'

import { NavLink } from 'react-router-dom';

const Blog = () => {


    function remove(){

    localStorage.removeItem('Author');
    localStorage.removeItem('Date');
    localStorage.removeItem('Title');
    localStorage.removeItem('Article');
  }
  return (
    <div class="ui segment">


      <a class="ui red ribbon label">Article</a>
      
      <h2  class="ui  header">{localStorage.getItem('Title')}</h2>

      <h4 class="ui header">
      Author: <p>{localStorage.getItem('Author')}</p>
      </h4>


      <div class="ui label">
      Published Date: <p>{localStorage.getItem('Published Date')}</p>
      </div>

      <h4 class="ui header"> Article </h4>

      <div class="ui segment">
      <p>{localStorage.getItem('Article')}</p>
      </div>

      <button class="ui secondary basic button" ><NavLink to="/edit"> Edit </NavLink></button>
      <button class="ui negative basic button" onClick={remove}>Delete</button>
    </div>
  )
}

export default Blog