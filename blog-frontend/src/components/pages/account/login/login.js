import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="container-login">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input
          name="loginBtn"
          type="submit"
          value="Login"
          className="login-btn"
        />
        <p>
          <br />
          New user? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    );
  }
}
export default Login;
