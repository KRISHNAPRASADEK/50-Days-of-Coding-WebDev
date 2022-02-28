import React, { useState } from "react";
import { CommonContext } from "./CommonContext";
import Footer from "./Footer";
import Header from "./Header";
import Main2 from "./Main2";
import UpdateButton from "./UpdateButton";

function Main() {
  const updateColor = (color) => {
    setState({ ...state, color: color });
  };
  const [state, setState] = useState({
    color: "green",
    updateColor: updateColor,
  });

  //

  // export class Main extends Component {
  //   constructor() {
  //     super();

  //     this.updateColor = (color) => {
  //       this.setState({
  //         color: color,
  //       });
  //     };

  //     this.state = {
  //       color: "green",
  //       updateColor: this.updateColor,
  //     };
  //   }
  //   render() {

  return (
    <div>
      <CommonContext.Provider value={state}>
        <Header />

        <CommonContext.Consumer>
          {({ color }) => (
            <h1 style={{ backgroundColor: color }}>Main 1 Page</h1>
          )}
        </CommonContext.Consumer>

        <Main2 />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    </div>
  );
}

export default Main;
