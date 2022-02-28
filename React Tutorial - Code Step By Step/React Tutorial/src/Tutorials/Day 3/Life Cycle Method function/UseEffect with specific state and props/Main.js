//useefect with specific state and props

import React, { useState } from "react";
import Users from "./Users";

function Main() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  //   useEffect(() => {
  //     console.warn("useffect called with data state");
  //   }, [data]); // only called when ,this parameter passed here is updated

  //   useEffect(() => {
  //     console.warn("useffect called with count state");
  //     // alert("count is " + count);
  //   }, [count]);

  return (
    <div>
      {/* <h1>count : {count}</h1>
      <h1>data : {data}</h1> */}

      <Users count={count} data={data} />

      <br />
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update data</button>
    </div>
  );
}

export default Main;
