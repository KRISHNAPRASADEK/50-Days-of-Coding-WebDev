// controlled components is when input fields are controlled using states.

//controlled component can be used in class

//uncontrolled - directly dom manipulation //  for eg using getelementbyid or ref
import React, { useState } from "react";

function Main() {
  let [val, setVal] = useState("hello");
  return (
    <div>
      <h1>controlled component</h1>
      <input
        type="text"
        value={val}
        // defaultValue={"hello"}
        onChange={(e) => setVal(e.target.value)}
      />

      <h1>{val}</h1>
    </div>
  );
}

export default Main;
