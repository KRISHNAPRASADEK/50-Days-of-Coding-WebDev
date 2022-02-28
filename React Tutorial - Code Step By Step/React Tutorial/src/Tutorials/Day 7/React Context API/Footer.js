import React, { Component } from "react";
import { CommonContext } from "./CommonContext";

class Footer extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h1
            style={{
              backgroundColor: color,
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            Hello, this is Footer page
          </h1>
        )}
      </CommonContext.Consumer>
    );
  }
}

export default Footer;
