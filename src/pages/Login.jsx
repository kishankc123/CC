import React from 'react'

class Login extends React.Component{

    state={

        name : " ",
        email : " ",
        password:"",
    }

    add=(e)=>{

        e.preventDefault();

        if(this.state.name== "" || this.state.email == "" || this.state.password==""){
        alert("All the fields are mandatory");
        return;
        }

        console.log(this.state); 
        this.props.LoginHandler(this.state);
        this.setState({name: " " , email: " ",password: ''})
        
   
    }

    render()
    {
        return(
            <div className='ui main'>
            <h2> Login</h2>
            
            <form className='ui form' onSubmit={this.add}>
                <div className='field'>
                
                <label> Name </label>
                <input 
                type ="text" 
                name= "Name"
                placeholder='Name'
                value = {this.state.name}
                onChange={(e)=>this.setState({name:e.target.value})} />
              
                <label> Email </label>
                <input 
                type ="email" 
                name= "Email"
                placeholder='Email'
                value = {this.state.email}
                onChange={(e)=>this.setState({email:e.target.value})}/>

                <label>Password </label>
                <input 
                type="password" 
                name="Password" 
                placeholder='Password'
                value = {this.state.password}
                onChange={(e)=>this.setState({password:e.target.value})}/>

                <button> Add </button>                             
                </div>
        </form>
            </div>
        );
    }
}

export default Login;
