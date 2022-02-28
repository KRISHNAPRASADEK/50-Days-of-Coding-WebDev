import React from "react";
import { Table } from "react-bootstrap";

function Array() {
  //   const students = ["anil", "sidhu", "sam", "peter"];

  let q = 0;

  const students = [
    {
      name: "anil",
      email: "anil@test.com",
      contact: 890,
    },
    {
      name: "kabir",
      email: "kabirsaw@test.com",
      contact: 111,
    },
    {
      name: "sidhu",
      email: "sidhu@test.com",
      contact: 780,
    },
    {
      name: "bhrj",
      email: "bhirj@test.com",
      contact: 78880,
    },
    {
      name: "sam",
      email: "sam@test.com",
      contact: 111,
    },
    {
      name: "sankar",
      email: "sankar@test.com",
      contact: 980,
    },

    {
      name: "fabi",
      email: "fabi@test.com",
      contact: 111,
    },
  ];

  //   //map looping
  //   students.map((item) => console.warn("my name is", item));

  //   //for loop
  //   for (let i = 0; i < students.length; i++) {
  //     console.log(students[i]);
  //   }

  // for loop cannot be used inside return()
  return (
    <div>
      <h1>handle array with list</h1>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>address</td>
          </tr>
          {students.map((data, i) =>
            data.contact === 111 ? (
              <tr key={q++}>
                <td>{q}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Array;
