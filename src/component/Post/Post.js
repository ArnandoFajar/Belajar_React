import React from "react";

const Post = (props) => {
  return (
    <div className="card mt-4" style={{ width: 18 + "rem" }}>
      <img
        src="https://media.istockphoto.com/photos/professional-blogger-working-on-his-new-post-for-social-media-at-home-picture-id1252684502?b=1&k=20&m=1252684502&s=170667a&w=0&h=3kK22loPkc8S4_iJdVZ4_IpoOeIKI5zVe4LbqzhD9bM="
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  );
};

export default Post;
