import React, { useState,useEffect } from 'react'

const Edit = (props) => {
  
  console.log(props.name);


  const[title,setTitle] = useState("");  
  const[date,setDate] = useState("");
  const [article,setArticle] = useState("");
  


  const NewBlog = (e) =>{
    
    localStorage.setItem('Name',props.name);
    localStorage.setItem('Title',title)
    localStorage.setItem('Published Date',date)    
    localStorage.setItem('Article',article);
   
    }

  return (
    <div className='ui main'>
        <form className='ui form' onSubmit={NewBlog}>
          <div className='ui field'>

            <label> Author </label>
            <input 
            type="text" 
            name="authorname" 
            value={props.name}
            />

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

            <button  className='ui button'> Done </button>


          </div>

        </form>

    </div>
  )
}

export default Edit;