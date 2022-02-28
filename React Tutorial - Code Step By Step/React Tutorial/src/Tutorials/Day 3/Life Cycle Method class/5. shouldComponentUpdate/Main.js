//shouldcomponentupdate can stop rendering. it can block rendering(default behaviour), depends on returning true or false

//shouldcomponentupdate is called first,componentdidupdate is called.
import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.warn("shouldComponentUpdate", this.state.count);

    //return false;      // by default

    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
    // return true; // state update will show in the component
  }

  render() {
    return (
      <div>
        <h1>shouldcomponentupdate : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          update counter
        </button>
      </div>
    );
  }
}

export default Main;
