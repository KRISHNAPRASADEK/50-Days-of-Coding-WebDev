// // modules in js
// // import { message, user as us, test } from "./library.js";
// import * as yahoo from "./library.js";
// // import { default as def } from "./library.js";
// import def from "./library.js";
// // console.log(m);

// document.body.innerHTML = yahoo.message;

// // user("krish");
// // us("krish");
// yahoo.user("kabali");

// let a = new yahoo.test();

// yahoo.default();

// def();

/////////////////////// end //////////////////////////////////////

//aggregate modules
import { user } from "./bridge.js";

user("krish");
