import React from "react";
import User from "./User";
//pure component only rerender when any change occures

// eve if the same value is assigned, wheck clicking update button every time rerendering happening.

// when component is PureComponent , re rendering stopped, if updating same value again and again
class Pure extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <User count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          update count
        </button>
      </div>
    );
  }
}

export default Pure;
