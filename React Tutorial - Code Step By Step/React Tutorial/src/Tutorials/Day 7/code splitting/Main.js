import React, { lazy, Suspense } from "react";
// import About from "./About";

// import { add } from "./math";

//console.warn(add(10, 20));
import("./math").then((result) => {
  console.warn("result ", result.add(12, 56));
});

const About = lazy(() => import("./About"));

function Main() {
  return (
    <Suspense fallback={<div>Wait</div>}>
      <h1>CodeSplitting</h1>
      <About />
    </Suspense>
  );
}

export default Main;
