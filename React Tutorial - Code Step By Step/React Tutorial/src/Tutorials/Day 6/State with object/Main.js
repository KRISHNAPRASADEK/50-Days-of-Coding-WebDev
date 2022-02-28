import React, { useState } from "react";

function Main() {
  const [data, setData] = useState({ name: "anil", age: 27 });
  return (
    <div>
      <h1>state with object</h1>

      <input
        type="text"
        placeholder="enter name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="enter age"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  );
}

export default Main;
