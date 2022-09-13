import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";

export class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  alert = () => {
    alert("Data Berhasil dihapus");
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({ post: res.data });
      });
  };

  postDataToAPI = () => {
    console.log(this.state.formBlogPost.id);
    if (this.state.formBlogPost.id == 1) {
      return alert("Gagal");
    }
    axios.post("http://localhost:3004/posts/", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
      this.alert();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({ formBlogPost: data, isUpdate: true });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = {
      ...this.state.formBlogPost,
    };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({ formBlogPost: formBlogPostNew });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleDetail = (id) => {
    this.props.history.push(`detail-post/${id}`);
    console.log("test", id);
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <h1>Halaman BlogPost</h1>
        <hr />
        <p>BlogPost</p>
        <div className="border">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={this.state.formBlogPost.title}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Masukkan Title"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Blog Konten</label>
            <textarea
              className="form-control"
              name="body"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.formBlogPost.body}
              placeholder="Masukkan Kontennya"
              onChange={this.handleFormChange}
            ></textarea>
          </div>
          <button onClick={this.handleSubmit} className="mb-4 btn btn-primary">
            Simpan
          </button>
        </div>

        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
