import React, { useEffect, useRef } from "react";

function User(props) {
  let lastVal = useRef();

  useEffect(() => {
    lastVal.current = props.count;
  });

  let prevProps = lastVal.current;
  return (
    <div>
      <h1>current count {props.count}</h1>
      <h1>previous count {prevProps}</h1>
    </div>
  );
}

export default User;
