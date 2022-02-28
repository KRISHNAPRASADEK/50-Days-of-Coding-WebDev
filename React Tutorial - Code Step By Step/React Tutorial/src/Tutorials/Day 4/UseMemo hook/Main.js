// in class we use purecomponent, instead in function we use usememo hook

//enhance performance

import React, { useState, useMemo } from "react";

function Main() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.warn("multicount");
      return count * 5;
    },
    [count] // this fn is called only when passed parameter changes,
  );

  return (
    <div>
      <h1>useMemo in react</h1>
      <h2>count : {count}</h2>
      <h2>item : {item}</h2>

      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setItem(item * 10)}>update item</button>
    </div>
  );
}

export default Main;
