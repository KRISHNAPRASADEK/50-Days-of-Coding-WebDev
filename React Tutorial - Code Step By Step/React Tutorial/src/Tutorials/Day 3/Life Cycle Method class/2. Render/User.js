import React, { Component } from "react";
class User extends Component {
  constructor() {
    super();
    this.state = {
      email: "abc@gmail.com",
    };
    // console.warn(this.state);
  }
  render() {
    console.warn("render method " + this.props.name);

    return (
      <div>
        <h1>User component {this.props.name}</h1>
        <h1>Email {this.state.email}</h1>
        <button onClick={() => this.setState({ email: "xyz@gmail.com" })}>
          Update Email
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default User;
