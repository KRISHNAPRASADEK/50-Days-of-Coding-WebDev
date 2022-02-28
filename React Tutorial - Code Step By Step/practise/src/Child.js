import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";

function Child() {
  const { color } = useContext(GlobalInfo);
  return (
    <div>
      <h1 style={{ color: color }}>Child</h1>
      <SuperChild />
    </div>
  );
}

export default Child;
