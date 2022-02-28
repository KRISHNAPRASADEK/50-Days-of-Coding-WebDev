import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function UpdateCounter() {
    setCount(++count);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={UpdateCounter}>update</button>
      <Test />
    </div>
  );

  // normal variable update not work well, because no component rendering occures, but when using state rerender occures , uso it update everywhere
}

function Test() {
  return (
    <>
      <h1>hello </h1>
    </>
  );
}

export default Counter;
