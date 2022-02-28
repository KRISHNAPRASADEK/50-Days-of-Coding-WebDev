import React, { PureComponent } from "react";

class User extends PureComponent {
  render() {
    console.warn("user component rerendering");
    return (
      <div>
        <h1>User Component {this.props.count}</h1>
      </div>
    );
  }
}

export default User;
