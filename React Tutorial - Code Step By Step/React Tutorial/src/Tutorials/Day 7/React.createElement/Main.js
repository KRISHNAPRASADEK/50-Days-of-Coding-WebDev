import React from "react";

const List = (props) =>
  React.createElement("div", { className: "style" }, `hello ${props.name}`);

function Main() {
  return (
    <div>
      <h1>react create element</h1>
      <List name="anil" />
    </div>
  );
}

// const List = () => {
//   return <div>hello kabir</div>;
// };

export default Main;
