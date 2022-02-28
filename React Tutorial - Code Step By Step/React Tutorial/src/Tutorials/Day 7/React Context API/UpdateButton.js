import React from "react";
import { CommonContext } from "./CommonContext";
export default function UpdateButton() {
  return (
    <CommonContext.Consumer>
      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor("yellow")}>Yellow</button>
          <button onClick={() => updateColor("blue")}>Blue</button>
          <button onClick={() => updateColor("red")}>Red</button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}
