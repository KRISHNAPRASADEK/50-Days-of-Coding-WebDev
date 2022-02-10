import myFileName from "./helper.js";

export const libName = "es6-lib";

const login = () => {
  console.log("login success " + myFileName);
};

export default login;
// export default libname;  //error-only one export default is poosible

// console.log(libName);
