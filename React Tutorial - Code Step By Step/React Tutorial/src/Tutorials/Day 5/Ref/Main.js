// only use in emergency cases . for dom manipulation

import React, { Component, createRef } from "react";

class Main extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {
    // console.warn((this.inputRef.current.value = 1000));
  }

  getVal() {
    console.warn(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "black";
  }
  render() {
    return (
      <div>
        <h1>Ref in react</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getVal()}>check ref</button>
      </div>
    );
  }
}

export default Main;
