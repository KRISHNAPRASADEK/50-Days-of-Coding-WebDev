import React, { useMemo, useState } from "react";

// useffect for entire component, usememo paricular specific componnt render check

function Main() {
  const [count, setCount] = useState(0);

  const noRender = useMemo(() => {
    return (
      <>
        <h1 style={{ color: "red" }}> no rerender this part : {count}</h1>
        <h1 style={{ color: "red" }}>useffect vs usememo</h1>
      </>
    );
  }, []);

  return (
    <div>
      {/*  */}
      {noRender}
      {/*  */}

      <br />
      <br />

      {/*  */}

      <h1>render it again {count}</h1>
      <h1>useffect vs usememo</h1>

      <button onClick={() => setCount(count + 1)}>update counter</button>
    </div>
  );
}

export default Main;
