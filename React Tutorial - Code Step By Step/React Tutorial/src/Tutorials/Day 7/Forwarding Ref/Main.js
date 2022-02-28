// import React, { Component } from "react";
import React from "react";
import Child from "./Child";

// export default class Main extends Component {
//   constructor() {
//     super();
//     this.inputRef = React.createRef();
//   }
//   render() {
export default function Main() {
  let inputRef = React.createRef();
  return (
    <div>
      <Child ref={inputRef} />
      {/* <button onClick={() => this.inputRef.current.focus()}> */}
      <button onClick={() => (inputRef.current.style.color = "red")}>
        Update Child
      </button>
    </div>
  );
}
