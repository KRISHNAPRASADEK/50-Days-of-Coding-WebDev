import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
function Main() {
  return (
    <div>
      {/* <h1>routing</h1> */}
      <Router>
        <Link to="/home">Home Page</Link>

        <Link to="/about">About Page</Link>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p> This is Home page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About page</h1>
      <p> This is About page</p>
    </div>
  );
}

export default Main;
