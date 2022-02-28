//React context api with hooks

//redux is an external library, we need instal; it additionl.
//but context api is inbuilt
import React, { createContext, useState } from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";

export const GlobalInfo = createContext();

function Main() {
  const [color, setColor] = useState("red");

  const [day, setDay] = useState("Monday");

  const getDay = (item) => {
    console.warn(item);
    setDay(item);
  };

  return (
    <GlobalInfo.Provider value={{ color, getDay }}>
      <div>
        <h1>Main Page {day}</h1>
        <Child />
        <OtherChild />
      </div>
    </GlobalInfo.Provider>
  );
}

export default Main;
