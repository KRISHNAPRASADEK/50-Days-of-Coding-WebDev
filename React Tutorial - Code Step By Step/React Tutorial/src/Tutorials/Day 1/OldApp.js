import React, { useState } from "react";
// import User from "./User"; //  calling component  from another file

// usestate is hook -datacintainer
function OldApp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data2, setData2] = useState("oldvalue");

  let data = "krishna prasad"; // when varaible directly used, it will cause many problems( check data used lines and see output), thats why we use stae and props

  function updateData() {
    setData2("new value");
  }
  console.warn(".........."); // component re render check

  function Apple() {
    // alert("fn called, btn clicked");

    data = "peter"; // data changed

    alert(data);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User />
      {User()}
      <button onClick={Apple}>click me</button>
      {/* <button onClick={() => Apple()}>click me</button> */}
      {/* instead Apple() write  just  Apple */}
      {/* instead alert() call it inside  arrow fn */}
      {/* <button onClick={() => alert("hello")}>click me</button> */}
      <h1>{data2}</h1>
      <button onClick={updateData}>update data</button>
    </div>
  );

  // nested fn component- one component inside another // we cannot use it directly in outside

  function User() {
    return (
      <div>
        <h1>hello {data}</h1>
        {/* data value updated but here value is not changed
          that is why we state and props*/}
        <h1>{10 + 20}</h1> {/*here we can write also some small operations */}
      </div>
    );
  }

  //  we cannot use class component inside fn'al component
}

// fn component in same file

// function User() {
//   return (
//     <div>
//       <h1>User component</h1>
//       <h1>hello</h1>
//     </div>
//   );
// }

//

// class component in same file

// class User extends Component {
//   render() {
//     return <h1>hello from class</h1>;
//   }
// }

export default OldApp;
