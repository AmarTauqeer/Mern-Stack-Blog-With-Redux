import React from "react";

import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="contact-form">
        <h1>Contact Page</h1>
        <div className="txtb">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            onChange={this.handleChange}
            placeholder="Enter full name"
          />
        </div>
        <div className="txtb">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="txtb">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="txtb">
          <label>Message:</label>
          <textarea onChange={this.handleChange}></textarea>
        </div>
        <a className="btn">Send</a>
      </div>
    );
  }
}
export default Contact;
