import React, { useEffect } from "react";

function Users(props) {
  useEffect(() => {
    console.warn("use effect " + props.count);
  }, [props.count]); //only specific props updated, then invoked

  return (
    <div>
      <h1>count props : {props.count}</h1>
      <h1>data props : {props.data}</h1>
    </div>
  );
}

export default Users;
