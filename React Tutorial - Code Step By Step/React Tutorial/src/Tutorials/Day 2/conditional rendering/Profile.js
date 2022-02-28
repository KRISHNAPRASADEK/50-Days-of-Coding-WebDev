import React, { useState } from "react";

function Profile() {
  let [login, setLogin] = useState(1);

  //setLogin(2);  cannot use here
  // login = "b";// can use here

  return (
    <div>
      {login === "a" ? (
        <h1>abhi</h1>
      ) : login === "b" ? (
        <h1>bibin</h1>
      ) : login === 1 ? (
        <h1>user 1</h1>
      ) : (
        <h1>welcom guest</h1>
      )}
    </div>
  );
}

export default Profile;
