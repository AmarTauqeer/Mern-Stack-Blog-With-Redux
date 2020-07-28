import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PostMessages.scss";
import * as actions from "../../../actions/postMessage";
import { connect } from "react-redux";

const PostMessages = (props) => {
  // fetch list using redux
  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);

  const onSuccess = () => {
    console.log("Post has been deleted successfully");
  };

  // delete operation with prompt
  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deletePostMessage(id, onSuccess);
  };
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/create-post" className="create-btn">
        New Feed
      </Link>

      <main>
        {props.postMessageList.map((result, index) => {
          return (
            <div className="card" key={index}>
              <div className="info">
                <h2 key={index}>{result.title}</h2>
              </div>
              <p>{result.message}</p>
              <div className="flex-container">
                <div>
                  <Link
                    to={`/edit-post/:${result._id}`}
                    params={{ id: result._id }}
                    className="edit-btn"
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => onDelete(result._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

// map states to props
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

// map action to props
const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
  deletePostMessage: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(PostMessages);
