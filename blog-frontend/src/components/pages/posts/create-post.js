import React from "react";

import "./create-post.scss";

class PostFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      post: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="post-feed">
        <h1>New Feed</h1>

        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
        />
        <textarea name="post" placeholder="Post"></textarea>
        <input
          name="postFeedBtn"
          type="submit"
          value="Save"
          className="postFeed-btn"
        />
      </div>
    );
  }
}
export default PostFeed;
