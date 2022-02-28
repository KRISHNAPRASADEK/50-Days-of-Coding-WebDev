import React, { useContext } from "react";

import { GlobalInfo } from "./Main";

function SuperChild() {
  const { color, getDay } = useContext(GlobalInfo);

  const day = "sunday";

  return (
    <div>
      <h1 style={{ color: color }}>Super child</h1>

      <button onClick={() => getDay(day)}>Click Me</button>
    </div>
  );
}

export default SuperChild;
