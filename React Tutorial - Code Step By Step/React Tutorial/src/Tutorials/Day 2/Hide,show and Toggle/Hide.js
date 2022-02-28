import React, { useState } from "react";

export default function Hide() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status ? <h1>hello</h1> : false}
      <button onClick={() => setStatus(true)}>show</button>
      <button onClick={() => setStatus(false)}>hide</button>

      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
}
