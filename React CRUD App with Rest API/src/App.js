import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
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
        setEmail(result[0].email);
        setMobile(result[0].mobile);
        setId(result[0].id);
      })
    );
  }

  function deleteUser(userId) {
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: "DELETE",
    }).then((res) =>
      res.json().then((result) => {
        console.warn(result);
        getUsers();
      })
    );
  }

  function selectUser(userId) {
    let item = users[userId];

    setName(item.name);
    setEmail(item.email);
    setMobile(item.mobile);
    setId(item.id);
  }

  function updateUser() {
    let item = { id, name, email, mobile };

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

  function clearFields() {
    setName("");
    setEmail("");
    setMobile("");
    setId(null);
  }

  function saveUser() {
    if (id == null && name !== "" && email !== "" && mobile !== "") {
      let item = { name, email, mobile };
      fetch("http://localhost:4000/todo/", {
        method: "POST",
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
    } else if (id !== null) {
      alert("Already Added");
    } else {
      alert("field are empty");
    }
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
                <span> </span>
                <button onClick={() => selectUser(i)}>update</button>
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
        <br /> <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br /> <br />
        <button onClick={() => updateUser()}>Update User</button>
        <span> </span>
        <button onClick={() => clearFields()}>Clear</button>
        <br />
        <br />
        <div>
          <button onClick={() => saveUser()}>Save New User</button>
        </div>
      </div>
    </div>
  );
}

export default App;
