// forwardRef is an advanced version of ref.

// when input in child, and button in parent component, and we need to change dom input //her we use forwardref

import React, { useRef } from "react";
import User from "./User";

function Main() {
  const inputRef = useRef();

  function updateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>forwardrf</h1>
      <User ref={inputRef} />
      <br />
      <button onClick={updateInput}>handle input</button>
    </div>
  );
}

export default Main;
