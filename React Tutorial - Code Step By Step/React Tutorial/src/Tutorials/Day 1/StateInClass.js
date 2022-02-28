import React, { Component } from "react";

//state is data container

// we cannot use state outside component

//state is public ,not private

class StateInClass extends Component {
  constructor() {
    super();
    this.state = { data: 0 };
  }

  Update() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.Update()}>Update data</button>
      </div>
    );
  }
}

// we cannot use usestae in class component
export default StateInClass;
