import React from "react";
import "./contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      <div className="contact-container">
        <h1>Contact Us</h1>

        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
        />
        <textarea placeholder="Message" name="message"></textarea>
        <input
          name="contactBtn"
          type="submit"
          value="Send"
          className="contact-btn"
        />
      </div>
    );
  }
}
export default Contact;
