import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact/contact";

import Register from "./components/pages/account/Register/registration";
import Login from "./components/pages/account/login/login";

import Post from "./components/pages/posts/post";
import PostFeed from "./components/pages/posts/create-post";
import EditPostFeed from "./components/pages/posts/edit-post";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/create-post" component={PostFeed} />
          <Route path="/edit-post" component={EditPostFeed} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
