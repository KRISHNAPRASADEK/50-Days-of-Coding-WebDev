import React from "react";
import Users from "./Users";
import "./Reuse.css";

function Reuse() {
  const users = [
    {
      name: "Anil",
      email: "anil@test.com",
      contact: "111",
    },
    {
      name: "Bruce",
      email: "Bruce@test.com",
      contact: "222",
    },
    {
      name: "Peter",
      email: "peter@test.com",
      contact: "333",
    },
    {
      name: "Sam",
      email: "Sam@test.com",
      contact: "444",
    },
  ];
  return (
    <div>
      <h1>Reuse component in Loop</h1>
      {users.map((item, i) => (
        <Users data={item} />
      ))}
    </div>
  );
}

export default Reuse;
