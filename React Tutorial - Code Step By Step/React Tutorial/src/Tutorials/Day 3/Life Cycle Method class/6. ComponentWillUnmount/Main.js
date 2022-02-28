// componentwillmount - is called when component is removed from dom

//componentwillunmount will be called first,then component removed from dom.

//parent is functional component, child is class omponent, and also componentwillunmount in class will be called without any problem.
// only matters is component on which "componentwillunmount" is called must be class component. It doesn't matter with parent is fn or class.

import React, { Component } from "react";
import Student from "./Student";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        <h1>Component will unmount</h1>
        <br />
        {this.state.show ? <Student /> : <h1>child component removed</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle child component
        </button>
      </div>
    );
  }
}

export default Main;
