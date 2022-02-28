import React, { useEffect, useState } from "react";

function Main() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("http://localhost:4000/todo/").then((res) => {
      res.json().then((res) => {
        setUsers(res);

        setName(res[0].name);
        setEmail(res[0].email);
        setMobile(res[0].mobile);
      });
    });
  }

  //   console.warn(users);
  console.warn(name);
  console.warn(email);
  console.warn(mobile);

  function deleteUsers(id) {
    // console.warn(id);

    fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  }

  function selectUsers(id) {
    // console.warn(users[id - 1]);
    let item = users[id - 1];
    setName(item.name);
    setEmail(item.email);
    setMobile(item.mobile);
  }

  return (
    <div>
      <h1>Rest Api Delete Method</h1> <br />
      <table border="1">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operation</td>
          </tr>

          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => deleteUsers(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUsers(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" value={name} />
        <br />
        <br />
        <input type="text" value={email} />
        <br />
        <br />
        <input type="text" value={mobile} />
        <br />
        <br />
        <button type="submit">Update User</button>
      </div>
    </div>
  );
}

export default Main;
