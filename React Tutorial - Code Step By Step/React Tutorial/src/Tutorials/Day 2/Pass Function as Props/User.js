import React from "react";

function User(props) {
  return (
    <div>
      <h1>User Component</h1>
      <button onClick={props.data}>call data function</button>
    </div>
  );
}

export default User;
