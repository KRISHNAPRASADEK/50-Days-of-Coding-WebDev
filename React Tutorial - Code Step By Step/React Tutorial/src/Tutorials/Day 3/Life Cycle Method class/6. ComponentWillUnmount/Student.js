import React, { Component } from "react";

export class Student extends Component {
  //when component removed from it is called.
  componentWillUnmount() {
    // alert("componentwillunmount called");
    console.warn("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <h1>Student Component</h1>
      </div>
    );
  }
}

export default Student;
