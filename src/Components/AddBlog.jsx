import React, { useState,useContext} from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import AuthContext from './AuthContext';


const AddBlog = (props) => {
  

  const value = useContext(AuthContext);

  console.log(props.name);

  const[title,setTitle] = useState("");  
  const[date,setDate] = useState("");
  const [article,setArticle] = useState("");

  const navigate = useNavigate();


  const NewBlog = (e) =>{    
    localStorage.setItem('Author',props.name);
    localStorage.setItem('Title',title)
    localStorage.setItem('Published Date',date)    
    localStorage.setItem('Article',article);

    navigate("/");
    }

    if(value.login==true)
    {    
    return (
      
      <div className='ui main'>
          <form className='ui form' onSubmit={NewBlog}>
            <div className='ui field'>

              <label> Author: {props.name} </label>
              
              <label> Title </label>
              <input 
              type="text" 
              name="title" 
              placeholder='Title of the article'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}/>

              <label> Date </label>
              <input 
              type="date" 
              name="date" 
              placeholder='Date'
              value={date}
              onChange={(e)=>setDate(e.target.value)}/>


              <label className='ui vertical segment'> Article </label>
              <textarea 
              type="text" name="article" placeholder='Enter article here'
              minLength={100} height = {5} width= "10px" rows="12"
              value={article}
              onChange={(e)=>setArticle(e.target.value)}
              />            

              <br/>
              <button  className='ui button'> Submit my article </button>
            </div>
          </form>
      </div>
      )
    }

   else    
       return(       
         <div class="container-fluid">
         <p class="alert alert-danger">You are not Logged in</p>
         <div>Login to continue</div>
         <button > <Link to="/login"> Take me to Login </Link> </button>
          </div>
        );  
}

export default AddBlog;