import React, { useState } from "react";
// usestate is a hook- data container., hooks start with use, there are many hooks in react
// using hooks we can use state,life cycle,pure in react
// for lifecycle we use hooks named useeffects

// we cannot use hooks in class
function Example() {
  const [data, setData] = useState("Anil");
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setData("Sidhu")}>click to update</button>
    </div>
  );
}

export default Example;
