import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState(false);

  function getInputData(e) {
    e.preventDefault();
    console.warn(name, interest, tnc);
  }
  return (
    <div>
      <form onSubmit={getInputData}>
        <h1>form</h1>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>select options</option>
          <option>dc</option>
          <option>marvel</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>accept terms and conditions</span>
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
