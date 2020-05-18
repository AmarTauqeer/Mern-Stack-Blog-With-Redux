import React from "react";
import { Link } from "react-router-dom";

import "./register.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="container-register">
        <h1>Registeration</h1>

        <input
          type="text"
          name="userName"
          onChange={this.handleChange}
          placeholder="User Name"
        />
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
          type="password"
          name="confirmPassword"
          onChange={this.handleChange}
          placeholder="Confirm Password"
        />
        <input
          name="registerBtn"
          type="submit"
          value="Register"
          className="register-btn"
        />
        <p>
          <br />
          Already hanve an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}
export default Register;
