import React from 'react';

import dummyData from './dummy-data';

import './App.css';
import PostPage from './Components/PostContainer/PostPage';
import withAuthenticate from './Components/Authentication';
import Login from './Components/Login/Login';



const ComponentFromWithAuthenticate= withAuthenticate(PostPage)(Login);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData,
      
    };

  }

  searchHandler = (input) => {
    if (input.length === 0) {
      this.setState({ posts: dummyData });
    } else {
      const newPosts = this.state.posts.filter((d) => d.username === input)
      this.setState({ posts: newPosts });
      console.log(this.state.input);
    }
  }


  //componentDidMount() {
  //console.log("dd" ,dummyData);
  //this.setState({posts: dummyData});
  //}
  // {this.state.posts.length > 0 && <CommentSection comments = {this.state.posts[0].comments}/>
  componentDidMount() {
    const a= localStorage.getItem("rememberMe")===true;
    const b = a ? localStorage.getItem("userName"):"";
    const c = localStorage.getItem("password")===true;
    this.setState({a,b,c});
  }
  render() {
    console.log("render");
    return (
      <div className="App">
    <ComponentFromWithAuthenticate onSearch={this.searchHandler} posts={this.state.posts}  />

      </div>
    );
  }
}
export default App;
