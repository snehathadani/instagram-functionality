import React from 'react';
import PropTypes from "prop-types";
const Post = (props)=> {
    return (<img> src={props.post.imageUrl} alt="" </img>)
    
}


post.PropTypes= {

post:PropTypes.shape({
    id: PropTypes.number,
    comments:string
})
};

export default Post;