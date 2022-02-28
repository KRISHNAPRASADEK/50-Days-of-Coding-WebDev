import React from "react";
import Child from "./Child";

function Parent() {
  // let data = "krishna prasad";

  // we can pass data from superchild component to superparent component, its possible

  function parentAlert(data) {
    console.log(data);

    alert(data.name);
  }
  return (
    <div>
      <h1>Lifting state up</h1>
      <Child alert={parentAlert} />
    </div>
  );
}

export default Parent;
