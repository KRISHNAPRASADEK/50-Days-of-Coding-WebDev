import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Nav";
function Main() {
  return (
    <div>
      {/* <h1>routing</h1> */}
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>

        <Route path="/" exact={true} element={<Home />}></Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
              <h1>Page not found</h1>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Main;
