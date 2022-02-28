import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import User from "./User";

function Main() {
  let users = [
    { id: 1, name: "Krishna", email: "Krishna@test.com" },
    { id: 2, name: "Prasad", email: "Prasad@test.com" },
    { id: 3, name: "Anil", email: "Anil@test.com" },
    { id: 4, name: "Sidhu", email: "Sidhu@test.com" },
    { id: 5, name: "CVramana", email: "CVramana@test.com" },
    { id: 6, name: "ramana", email: "CVramana@test.com" },
  ];
  return (
    <div>
      <h1>React dynamic routing</h1>
      <br />

      <Router>
        {users.map((item, i) => (
          <div key={i}>
            <Link to={"/user/" + item.id + "/" + item.name}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}

        <Routes>
          <Route path="/user/:id/:name" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
