import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();

  return (
    <div>
      <h1>My no is {params.id}</h1>
      <h1>Hello my name is {params.name}</h1>
    </div>
  );
}

export default User;
