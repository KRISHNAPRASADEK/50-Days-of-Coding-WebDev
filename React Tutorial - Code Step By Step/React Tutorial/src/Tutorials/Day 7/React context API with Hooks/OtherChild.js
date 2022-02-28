import React, { useContext } from "react";

import { GlobalInfo } from "./Main";

function OtherChild() {
  const { color } = useContext(GlobalInfo);
  return (
    <div>
      <h1 style={{ color: color }}>Other child</h1>
    </div>
  );
}

export default OtherChild;
