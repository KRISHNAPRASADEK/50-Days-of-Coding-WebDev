import React, { useContext } from "react";
import { GlobalInfo } from "./App";

function SuperChild() {
  const { color, getDay } = useContext(GlobalInfo);

  const day = "sunday";

  return (
    <div>
      <h1 style={{ color: color }}>Superchild</h1>
      <button onClick={() => getDay(day)}>click</button>
    </div>
  );
}

export default SuperChild;
