import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/about">About Page</Link>
      <br />

      {/* <a href="/about"> another about link</a> */}
    </div>
  );
}

export default Nav;
