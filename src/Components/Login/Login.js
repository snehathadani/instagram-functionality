import React from 'react';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            userName: "",
            rememberMe:false,
            password: "sneha"
        }
    }
    handleChange= (event)=>{
       const input= event.target;
       const value= input.type=== "checkbox" ? input.ticked : input.value;
       this.setState({ [input.name]: value})
       
    }
  
    handleSubmit= (e)=> {
        localStorage.setItem("rememberMe", this.state.rememberMe);
        localStorage.setItem("userName",this.state.rememberMe ? this.state.userName :"");
        localStorage.setItem("password", this.state.password);
        localStorage.setItem("loggedIn", "true")
        window.location.reload();
    }
    render(){
        return(
           <div>
                <label>
                    <input 
                    name="userName"
                    value={this.state.userName}
                    onChange= {this.handleChange}
                   />
                
                </label>
                <label>
                    <input
                    name="password"
                    value={this.state.password}/>
                </label>

                <label>
                    <input
                    name="rememberMe"
                    type="checkbox"
                    ticked={this.state.rememberMe}
                    onChange={this.handleChange}
                    />
                </label>
                <button  onClick={this.handleSubmit}> Log In</button>
           </div>
        );
    }
}

export default Login;