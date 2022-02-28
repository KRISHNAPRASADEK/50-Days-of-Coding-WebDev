import React, { useEffect, useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("useffect works");

    // on every time state updates its called useeffect()
  });

  // useeffect can be used any no of times..

  useEffect(() => {
    console.warn("useffect 2");

    // we can write fn here, but that fn can only call indside here...
  });

  // we can write a useEffect inside a fn

  return (
    <div>
      <h1>Useeffect in react {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default Main;
