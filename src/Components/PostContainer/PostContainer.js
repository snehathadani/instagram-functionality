import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likes: props.post.likes 
        }
    }

    render(){
        return (
            <div>
                <div onClick= {()=> this.setState({likes:this.state.likes+1})}
                >
                    Likes {this.state.likes}
                </div>
                <div>
                
                 <div>
                 {this.props.post.username} 
                 <img src={this.props.post.imageUrl} alt="" />
                 <CommentSection comments = {this.props.post.comments}/>
                 </div> 
                 
                 </div>
            </div>
        );
    }
}

export default PostContainer;
