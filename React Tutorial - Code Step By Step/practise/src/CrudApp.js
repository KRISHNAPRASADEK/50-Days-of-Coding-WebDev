import React, { useEffect, useState } from "react";

function CrudApp() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: "", name: "", email: "", mobile: "" });

  const [edit, setEdit] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("http://localhost:4000/todo/").then((res) =>
      res.json().then((resp) => {
        setUsers(resp);
        setUser({
          id: resp[0].id,
          name: resp[0].name,
          email: resp[0].email,
          mobile: resp[0].mobile,
        });
      })
    );
  }

  function deleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
    }).then((res) =>
      res.json().then((resp) => {
        console.warn(resp);
        getUsers();
      })
    );
  }

  function selectUser(id) {
    let item = users[id];
    setUser({
      id: item.id,
      name: item.name,
      email: item.email,
      mobile: item.mobile,
    });
    setEdit(true);
  }

  function editUser() {
    fetch(`http://localhost:4000/todo/${user.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((resp) => {
        console.warn(resp);
        getUsers();
      })
    );
  }

  function addUser() {
    fetch("http://localhost:4000/todo/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((resp) => {
        console.warn(resp);
        getUsers();
        setEdit(true);
      })
    );
  }

  return (
    <div>
      <h1>Rest API</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>NAEM</td>
            <td>EMAIL</td>
            <td>MOBILE</td>
            <td>OPERATIONS</td>
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
                <button onClick={() => selectUser(i)}>edit</button>
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
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br /> <br />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br /> <br />
        <input
          type="number"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        <br /> <br />
        {edit ? (
          <>
            <button onClick={() => editUser()}>save edit</button>
            <span> </span>
            <button
              onClick={() => {
                setEdit(false);
                setUser({ name: "", email: "", mobile: "" });
              }}
            >
              add new user
            </button>
          </>
        ) : (
          <button onClick={() => addUser()}>save new user</button>
        )}
      </div>
    </div>
  );
}

export default CrudApp;
