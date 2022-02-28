import React, { Component } from "react";

//    functional component

// function User() {
//   return (
//     <div>
//       <h1>User component</h1>
//       <h1>hello</h1>
//     </div>
//   );
// }

//

//  class component
class User extends Component {
  render() {
    return <h1>hello from class component</h1>;

    //without jsx
    // return React.createElement("div", "app", "hello"); // react without jsx we have to wrie like this
    // return React.createElement("div","app",React.createElement("h1","heading","hello world"));
  }
}

//
export default User;
