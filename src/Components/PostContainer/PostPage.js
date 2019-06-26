import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


const PostPage = (props)=> {
   return <div>
<SearchBar onSearch={props.onSearch} />
{props.posts.map((post) => {
  return (<PostContainer key={post.id} post={post} />);
})}
<button onClick= {() => {localStorage.setItem("loggedIn", "false"); window.location.reload()} }> Log Out</button>
</div>;
}



export default PostPage;
