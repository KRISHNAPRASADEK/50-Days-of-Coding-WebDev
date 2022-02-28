import React, { Component } from "react";
import Student from "./Student";

class Main extends Component {
  constructor() {
    super();
    this.state = { name: "anil" };
  }
  render() {
    return (
      <div>
        <Student name={this.state.name} email={"anil@gmail.com"} />
        <button onClick={() => this.setState({ name: "abhilash" })}>
          update name
        </button>

        <Student name="peter" email={"peter@gmail.com"} />
      </div>
    );
  }
}

// we can only change props in parent component, we cannot change it receiving component

// we can pass fn as props

export default Main;
