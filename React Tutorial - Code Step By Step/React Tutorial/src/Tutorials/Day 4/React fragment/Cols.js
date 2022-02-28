import React from "react";

//  <div>
//    <td>Anil</td>
//    <td>Sidhu</td>
//  </div>;

// we cannot use like this, because <td> cannot be child of <div>, it will cause error.
// so we use fragments

function Cols() {
  return (
    <>
      <td>Anil</td>
      <td>Sidhu</td>
    </>
  );
  //  now no error
}

export default Cols;
