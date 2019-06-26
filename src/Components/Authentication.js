import React from "react";



const withAuthenticate= WrappedComponent => LoginComponent => 
class extends React.Component {
    constructor(props){
        super(props);
        this.state = {loggedIn: false}
    }

    componentDidMount() {
        const loggedIn = localStorage.getItem("loggedIn")
        if(loggedIn === "true") {
            this.setState({loggedIn: true})
        }
    }
    
    render(){
        if(this.state.loggedIn) {
        return(
            <WrappedComponent {...this.props}/>
        ) } else {
            return(
                <LoginComponent {...this.props}/>
            )
        }

    }
}

export default withAuthenticate;