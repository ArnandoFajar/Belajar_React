import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";

export class BlogPost extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //     console.log(json);
    //   });

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <p>BlogPost</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
