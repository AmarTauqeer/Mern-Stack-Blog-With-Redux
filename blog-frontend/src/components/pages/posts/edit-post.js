import React from "react";

import "./edit-post.scss";

class EditPostFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      post: "",
    };
  }
  // get post from database
  //----------------------

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="post-feed">
        <h1>Edit Feed</h1>

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
export default EditPostFeed;
