import React, { useState } from "react";

import "../../../App.css";
import User from "./User";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>prev props with hooks</h1>
      <br />
      <User count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>
        update counter
      </button>
    </div>
  );
}

export default Main;
