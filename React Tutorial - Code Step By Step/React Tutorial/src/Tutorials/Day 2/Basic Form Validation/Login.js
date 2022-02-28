import React, { useState } from "react";

function Login() {
  let [user, setUser] = useState("");
  let [userErr, setUserErr] = useState(false);
  let [password, setPassword] = useState("");
  let [passwordErr, setPasswordErr] = useState(false);

  function getFormData(e) {
    if (user.length < 3 || password.length < 3) {
      alert("invalid submit");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={userHandler} />
        {userErr ? <span>user id invalid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="enter name"
          onChange={passwordHandler}
        />
        {passwordErr ? <span>password invalid</span> : ""}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login;
