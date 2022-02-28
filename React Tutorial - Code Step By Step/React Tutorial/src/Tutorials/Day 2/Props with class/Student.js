import React, { Component } from "react";

export default class Student extends Component {
  render() {
    console.log(this.props);

    return (
      <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
        <h1>student {this.props.name}</h1>
        <h1>email {this.props.email}</h1>
      </div>
    );
  }
}
