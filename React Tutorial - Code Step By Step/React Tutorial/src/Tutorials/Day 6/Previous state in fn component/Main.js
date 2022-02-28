import React, { useState } from "react";
import "../../../App.css";

function Main() {
  const [count, setCount] = useState(1);
  function updateCounter() {
    // let rand = Math.floor(Math.random() * 10);
    // setCount((prev) => {
    //   console.warn(prev);
    //   if (prev < 5) {
    //     alert("low value");
    //   }
    //   return rand;
    // });

    for (let i = 0; i < 5; i++) {
      setCount((pre) => {
        return pre + 1;
      });
    }
  }

  return (
    <div className="App">
      <h1>{count}</h1>

      <button onClick={() => updateCounter()}>
        Click Me to update counter
      </button>
    </div>
  );
}

export default Main;
