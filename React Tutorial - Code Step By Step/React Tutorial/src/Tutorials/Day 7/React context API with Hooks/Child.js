import React, { useContext } from "react";

import { GlobalInfo } from "./Main";
import SuperChild from "./SuperChild";

function Child() {
  const { color } = useContext(GlobalInfo);

  console.warn(color);
  return (
    <div>
      <h1 style={{ color: color }}>Child Page</h1>
      <SuperChild />
    </div>
  );
}

export default Child;
