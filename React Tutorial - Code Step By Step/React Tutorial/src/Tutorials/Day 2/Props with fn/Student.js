import React from "react";

function Student(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: "skyblue", margin: "10px" }}>
      <h1>hello {props.name}</h1>
      <h1>{this.props.children}</h1>
      {/* <h2>Email : {props.email}</h2> */}

      {/* <h4>address : {props.other.address}</h4> */}
    </div>
  );
}

export default Student;
