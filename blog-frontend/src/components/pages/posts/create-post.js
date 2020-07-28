import React, { useEffect, useState } from "react";
import "./create-post.scss";
import * as actions from "../../../actions/postMessage";
import { connect } from "react-redux";

const PostFeed = (props) => {
  // initial state
  const initialFieldValues = {
    title: "",
    message: "",
  };

  // using hooks
  const [values, setValues] = useState(initialFieldValues);

  const onSuccess = () => {
    console.log("Post has been created successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);
    props.createPostMessage(values, onSuccess);
    props.history.push("/postmessages");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="post-feed">
      <h1>New Post</h1>

      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <textarea
        name="message"
        placeholder="Post text"
        onChange={handleInputChange}
        value={values.message}
      ></textarea>
      <input
        name="postFeedBtn"
        type="submit"
        value="Save"
        onClick={handleSubmit}
        className="postFeed-btn"
      />
    </div>
  );
};

// map states to props
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

// map actions to props
const mapActionToProps = {
  createPostMessage: actions.create,
};

export default connect(mapStateToProps, mapActionToProps)(PostFeed);
