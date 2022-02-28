// component did mount - it can be used in api calling.
// it called after render, when the component is fully mounted, then componentdidmount is called
// no effect of state and props

// when state is updated, only re render happened, componentdidmount not called again on state update.
import React, { Component } from "react";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      name: "anil",
    };

    console.warn("constructor");
  }

  componentDidMount() {
    console.warn("componentDidMount");

    // this.setState({ name: "hello" }); // state is updated to hello, no error
  }

  render() {
    console.warn("render");

    // this.setState({ name: "hello" });
    //Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

    return (
      <div>
        <h1>component did mount</h1>
        <h2>{this.state.name}</h2>
        {/* <button onClick={() => this.setState({ name: "Sidhu" })}>
          update data
        </button> */}
      </div>
    );
  }
}
