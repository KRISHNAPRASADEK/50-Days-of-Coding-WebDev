import React from "react";
import User from "./User";
import Members from "./Members";

function Main() {
  function getData() {
    alert("hello from Main");
  }
  return (
    <div>
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <div style={{ float: "right" }}>
        <Members data={getData} />
      </div>
    </div>
  );
}

export default Main;
