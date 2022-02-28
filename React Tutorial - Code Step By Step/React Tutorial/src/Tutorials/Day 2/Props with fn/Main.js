import React, { useState } from "react";
import Student from "./Tutorials/Day 2/Props with fn/Student";

// we cannot use usestate inside class component

function Main() {
  const [name, setName] = useState("Anil");

  return (
    <div className="App">
      <Student name={name} />

      <button
        onClick={() => {
          setName("kabir");
        }}
      >
        update name
      </button>
      {/* <Student
        name={"peter"}
        email="petertest@gmail.com"
        other={{ address: "kolkata", mobile: 7766 }}
      />
      <Student
        name={"preeti"}
        email="preetitest@gmail.com"
        other={{ address: "moroca", mobile: 6633 }}
      /> */}
    </div>
  );
}

export default Main;
