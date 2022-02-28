import React, { useRef, useEffect } from "react";

function User(props) {
  const lastVal = useRef();

  useEffect(() => {
    lastVal.current = props.count;
  });

  const prevProps = lastVal.current;

  return (
    <div>
      <h1>COUNT : {props.count}</h1>
      <h1>Previous Count : {prevProps}</h1>
    </div>
  );
}

export default User;
