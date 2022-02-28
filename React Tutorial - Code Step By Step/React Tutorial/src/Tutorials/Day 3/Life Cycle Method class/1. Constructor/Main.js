import React, { Component } from "react";

export default class Main extends Component {
  constructor() {
    super();
    // console.warn("constructor"); // constructor always called before render

    this.state = {
      data: "anil",
    };
  }
  render() {
    // console.warn("render");
    return (
      <div>
        <h1>Life cycle method in class</h1>
        <h1> Hello {this.state.data}</h1>
      </div>
    );
  }
}

// when we unmount a component, and mount it ,then another new life cycle method is created.

// in class component, we can use life cycle method(LCM) directly.

// LCM are events that happens from birth of component to death. 3 phases - mount,update,unmount

//life cycle method cannot be directly used in functional component, we need hooks to use it.
