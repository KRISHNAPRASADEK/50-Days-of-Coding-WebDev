import React, { Component } from "react";
import { CommonContext } from "./CommonContext";

class Main2 extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h1 style={{ backgroundColor: color }}>Hello, this is main page</h1>
        )}
      </CommonContext.Consumer>
    );
  }
}

export default Main2;
