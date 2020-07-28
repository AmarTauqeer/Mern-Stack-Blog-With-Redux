import React, { useEffect, useState } from "react";
import * as actions from "../../../actions/postMessage";
import { connect } from "react-redux";
import "./edit-post.scss";

const EditPostFeed = (props) => {
  let currentId = props.match.params.id;
  // to remove ":" at first position
  currentId = currentId.substr(1);

  // initial state
  const initialFieldValues = {
    title: "",
    message: "",
  };

  // using hooks
  const [values, setValues] = useState(initialFieldValues);

  // functional base component if class base we can use DidMount lifecycle
  useEffect(() => {
    if (currentId !== "undefined" || currentId !== null) {
      //console.log(currentId);
      setValues({ ...props.postMessageList.find((x) => x._id === currentId) });
    }
  }, [currentId]);

  // on success
  const onSuccess = () => {
    console.log("Post has been edit successfully");
  };

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // update redux states and store
    props.updatePostMessage(currentId, values, onSuccess);
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
      <h1>Edit Feed</h1>
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <textarea
        name="message"
        value={values.message}
        onChange={handleInputChange}
        placeholder="Post"
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

// map state to props
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

// map actions to props
const mapActionToProps = {
  updatePostMessage: actions.update,
};

// finally export component with connect to redux
export default connect(mapStateToProps, mapActionToProps)(EditPostFeed);
