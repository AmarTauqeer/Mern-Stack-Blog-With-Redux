import React from "react";
import { Link } from "react-router-dom";
import "./post.scss";

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <Link to="/create-post" className="create-btn">
          New Feed
        </Link>

        <main>
          <div className="card">
            <div className="info">
              <h2>Title</h2>
            </div>
            <p>
              This is post This is post This is post This is post This is post
              This is post This is post This is post vvvvvvv hhhhhhh mmm
            </p>
            <div class="flex-container">
              <div>
                <Link to="/edit-post" className="edit-btn">
                  Edit
                </Link>
              </div>
              <div>
                <Link to="/delete-post" className="delete-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h2>Title</h2>
            </div>
            <p>
              This is post This is post This is post This is post This is post
              This is post This is post This is post
            </p>
            <div class="flex-container">
              <div>
                <Link to="/edit-post" className="edit-btn">
                  Edit
                </Link>
              </div>
              <div>
                <Link to="/delete-post" className="delete-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h2>Title</h2>
            </div>
            <p>
              This is post This is post This is post This is post This is post
              This is post This is post This is post
            </p>
            <div class="flex-container">
              <div>
                <Link to="/edit-post" className="edit-btn">
                  Edit
                </Link>
              </div>
              <div>
                <Link to="/delete-post" className="delete-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h2>Title</h2>
            </div>
            <p>
              This is post This is post This is post This is post This is post
              This is post This is post This is post
            </p>
            <div class="flex-container">
              <div>
                <Link to="/edit-post" className="edit-btn">
                  Edit
                </Link>
              </div>
              <div>
                <Link to="/delete-post" className="delete-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h2>Title</h2>
            </div>
            <p>
              This is post This is post This is post This is post This is post
              This is post This is post This is post
            </p>
            <div class="flex-container">
              <div>
                <Link to="/edit-post" className="edit-btn">
                  Edit
                </Link>
              </div>
              <div>
                <Link to="/delete-post" className="delete-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h2>Title</h2>
            </div>
            <p>
              This is post This is post This is post This is post This is post
              This is post This is post This is post
            </p>
            <div class="flex-container">
              <div>
                <Link to="/edit-post" className="edit-btn">
                  Edit
                </Link>
              </div>
              <div>
                <Link to="/delete-post" className="delete-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Post;
