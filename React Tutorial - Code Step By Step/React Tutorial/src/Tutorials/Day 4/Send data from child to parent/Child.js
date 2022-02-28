import React from "react";

function Child(props) {
  // const data = "krishna prasad";
  const data = { name: "krishnaprasda", email: "krish@gmail" };
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => props.alert(data)}>click me</button>
    </div>
  );
}

export default Child;
