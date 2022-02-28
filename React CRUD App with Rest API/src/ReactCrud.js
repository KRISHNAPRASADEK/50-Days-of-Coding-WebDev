import React, { useEffect, useState } from "react";
import "./App";

export default function ReactCrud() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("http://localhost:4000/todo/").then((res) =>
      res.json().then((result) => {
        setUsers(result);
        setName(result[0].name);
        setMobile(result[0].mobile);
        setEmail(result[0].email);
        setId(result[0].id);
      })
    );
  }

  function deleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
    }).then((res) =>
      res.json().then((result) => {
        console.warn(result);
        getUsers();
      })
    );
  }

  function selectUser(id) {
    let item = users[id - 1];

    setName(item.name);
    setMobile(item.mobile);
    setEmail(item.email);
    setId(item.id);
  }

  function updateUser() {
    let item = { name, email, mobile, id };

    fetch(`http://localhost:4000/todo/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) =>
      res.json().then((result) => {
        console.warn(result);
        getUsers();
      })
    );
  }

  return (
    <div className="App">
      <h1>FORM</h1>

      <table border="1">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>delete</button>
                <button onClick={() => selectUser(item.id)}>update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />

        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}
