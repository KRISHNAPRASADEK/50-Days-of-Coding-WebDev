// render means execute and represent the code
// if any  changes occur in component (state, props update), it will re render
import React, { useState } from "react";
import User from "./User";

function Main() {
  const [name, setName] = useState("Anil");
  return (
    <div>
      <h1>render method in react</h1>
      <User name={name} />
      <button onClick={() => setName("Sidhu")}>Update Name</button>
    </div>
  );
}

export default Main;
