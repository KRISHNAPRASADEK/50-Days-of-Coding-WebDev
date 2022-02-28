import React, { useState } from "react";

function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function saveUser() {
    console.warn({ name, email, mobile });

    let data = { name, email, mobile };

    fetch("http://localhost:4000/todo/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      //   console.warn("result ", result);

      result.json().then((resp) => {
        console.warn("resp ", resp);
      });
    });
  }

  return (
    <div>
      <h1>POST API Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="name"
      />
      <br />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        name="name"
      />
      <br />
      <br />
      <button type="submit" onClick={saveUser}>
        Save new User
      </button>
    </div>
  );
}

export default Main;
