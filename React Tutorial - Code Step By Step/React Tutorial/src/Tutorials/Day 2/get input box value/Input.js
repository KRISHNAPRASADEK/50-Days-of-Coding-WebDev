import React, { useState } from "react";

function Input() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getInput(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
      {print ? <h1>{data}</h1> : false}
      <input onChange={getInput} />
      <button onClick={() => setPrint(true)}>print</button>
    </div>
  );
}

export default Input;
