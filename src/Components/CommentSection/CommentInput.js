import React from 'react';

class CommentInput extends React.Component {
  constructor(props){
    super(props);
    this.state={
      comment: '',
    }
  }
  render(){
    return <div>
      <form onSubmit= {(e)=> {e.preventDefault(); this.props.onAddComment(this.state.comment)}}>
      <input 
      type = "text"
      name="comment"
      placeholder= "Add a Comment"
      onChange ={(e)=> this.setState({comment:e.target.value})}
      />
      </form>
    </div>
  }
    
}


export default CommentInput;