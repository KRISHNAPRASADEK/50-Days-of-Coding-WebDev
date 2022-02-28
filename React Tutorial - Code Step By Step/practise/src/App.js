import React, { lazy, Suspense } from "react";

// import { add } from "./Math";
// console.warn(add(7, 8));

// code splitting

// import("./Math").then((res) => {
//   console.warn(res.default(9, 9));
// });

//

// import About from "./About";

// or

let About = lazy(() => import("./About"));
console.warn(About);

function App() {
  return (
    <Suspense fallback={<h1>wait</h1>}>
      App
      <About />
    </Suspense>
  );
}

export default App;
