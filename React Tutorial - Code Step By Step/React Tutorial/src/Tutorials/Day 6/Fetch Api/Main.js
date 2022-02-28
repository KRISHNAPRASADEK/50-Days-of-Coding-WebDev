import React, { useEffect, useState } from "react";

function Main() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      res.json().then((resp) => {
        // console.warn("Result", resp);

        setData(resp);
      });
    });
  }, []);

  console.warn(data);

  return (
    <div>
      <h2>Call Get Method Api</h2>
      <table border="2">
        <tr>
          <td>ID</td>
          <td>TITLE</td>
          <td>BODY</td>
        </tr>

        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Main;
