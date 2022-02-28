// component did update,

// only calls when state or props is updated, called after render.
// we can update state inside componentDidMount, but with a condition, otherwise infinite lopp times it will called
// if "shouldComponentUpdate()" return false ,then componentdidmount will not be invoked.

// we cannot update state inside render , even with condition, it will cause infinte error
import React, { Component } from "react";

class Main extends Component {
  constructor() {
    console.warn("constructor");
    super();
    this.state = { data: 0 };
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    console.warn("componentdidupdate ", prevStates.data, this.state.data); // it shows old state // {data: 'Krishnaprasad'}

    // if (prevStates.data === this.state.data) {
    //   alert("data is already same");
    // }

    // this.setState({ data: this.state.data + 1 }); // Error: Maximum update depth exceeded.

    // if no condition infinte loop
    // if (this.state.data < 10) {
    //   this.setState({ data: this.state.data + 1 });
    // }

    // console.warn(snapshot); // undefined // because, before it called , we need to call "getSnapshotBeforeUpdate()"" method
  }

  render() {
    console.warn("render");

    return (
      <div>
        <h1>componentDidUpdate</h1>
        <h2>{this.state.data}</h2>
        <button onClick={() => this.setState({ data: 1 })}>update data</button>
      </div>
    );
  }
}

export default Main;

// we can call api in componentdidupdate , with a condition
//componentdidmount is more prefering
