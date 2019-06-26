import React from 'react';

import CommentInput from '../CommentSection/CommentInput';


class CommentSection extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        };
       // componentDidMount()
        //{console.log(this.props);}
        //console.log(props);
    }
    handleAddComment= (comment)=> {
        const newComment= {username:"Sneha", text:comment}
        const newComments=[...this.state.comments, newComment]
        this.setState({comments:newComments})

    }




    render() {
        return (
          
            <div>
                {this.state.comments && this.state.comments.map((c,i)=>  { 
                    return (
                <li> 
                    <div key={i} > {c.username}- {c.text} </div> 
                </li>
                )})}
              <CommentInput onAddComment ={this.handleAddComment}/>
            </div>
          );
    
}
}
export default CommentSection;