import React, { useEffect, useState } from "react";

function Main() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}

// function Main() {
//   const [resourceType, setResourceType] = useState("posts");

//   const [item, setItem] = useState([]);

//   console.log("render");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}/`)
//       .then((res) => res.json())
//       .then((result) => setItem(result));
//   }, [resourceType]);

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>posts</button>
//         <button onClick={() => setResourceType("users")}>users</button>
//         <button onClick={() => setResourceType("comments")}>comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//     </>
//   );
// }

export default Main;
