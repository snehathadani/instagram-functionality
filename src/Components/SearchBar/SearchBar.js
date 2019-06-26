import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            
            
        }
    }
   // handleuserInput= (event)=> {
     //   this.setState({input:event.target.value});
   // }
 
    
    
    render() {
        return(
                <div>
                <form onSubmit= {(event)=> {event.preventDefault();this.props.onSearch(this.state.input)}}> 
                <input
                type = ""
                placeholder= "enter search term here"
                onChange= {(event)=> {this.setState({input:event.target.value})}}
                />
                </form>
                </div>
        )
    }
}


export default SearchBar;