//  HOC - a component which takes a component as input and gives a component as output
import React, { useState } from "react";

function Main() {
  return (
    <div>
      <h1>higher order component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: "100px" }}>
      Red
      <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: "100px" }}>
      Green
      <props.cmp />
    </h2>
  );
}

function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: "100px" }}>
      Blue
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>update counter</button>
    </div>
  );
}

export default Main;
