import React from 'react'

class Login extends React.Component{


    state={

        name : " ",
        email : " ",
        password:"",
        login:"false"
    }

    add=(e)=>{

        e.preventDefault();

        if(this.state.name==="" || this.state.email ==="" || this.state.password===""){
        alert("All the fields are mandatory");
        return;
        }
        this.state.login="true";
        this.props.LoginHandler(this.state.name,this.state.login);
        this.setState({name: " " , email: " ",password: ''})   
        console.log(this.state); 
    
        }

        out=(e)=>{

            this.state.login="false";
            this.setState({name: " " , email: " ",password: ''})
            console.log(this.state); 
      

        }

    render()
    {
        if (this.state.login==="false")
            {
                return(
                    <div className='ui main'>
                        <h2> Login</h2>            
                <form className='ui form' >
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

                    <button onClick={this.add}>Login</button>                                            
                            
                    </div>
                </form>
                    
                    </div>
                );
            }

            else
            {
                return(
                <div>
                <button onClick={this.out}> Log Out </button>
                </div>
                );
            }
    }
}

export default Login;