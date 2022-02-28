// react fragment used to handle multiple components , elements

// 3 ways using we can remove the parent extra div from dom,
// 1. by using <React.Fragment> tag
// 2. by using <Fragment> tag , need to import {Fragment} from "react"
// 3. by using <></> empty tag

//

//its always better to define function in parent rather than child

// we can use fragment in parent also, but we cannot assign classname to fragment,
// but we can assign key value to fragment.

import React from "react";
import Cols from "./Cols";

function Main() {
  return (
    <>
      <h1>React fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Main;
