//useref is a hook , which is ref in component, it is used for direct dom manipulation

// when compare to usestate , useref not cause rerendering, but it use less , because it is good for code
import React, { useRef } from "react";

function Main() {
  let inputRef = useRef();
  function handleInput() {
    console.warn("test");
    // inputRef.current.value = 1000;
    // inputRef.current.focus();
    // inputRef.current.style.color = "red";
    inputRef.current.style.display = "none";
  }
  console.warn("rerender");
  return (
    <div>
      <h1>useref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle input</button>
    </div>
  );
}

export default Main;
