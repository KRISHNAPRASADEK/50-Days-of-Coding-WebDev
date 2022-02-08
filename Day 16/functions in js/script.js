//functions

// function login(username, password) {
//   //code
//   console.log(`${username},logged in successfully`);
//   console.log(password);
// }

// login("krish");
// login("jane", 111);

//john

// function upperCase(str) {
//   console.log(str.toUpperCase());
// }
// function upperCase(str) {
//   return str.toUpperCase();
// }

// let a = upperCase("abcd");
// console.log(a);

//

// default parameter

function calculateArea(width, height = 1) {
  //  height= height === undefined ? 1 : height;    //ternary operator
  const area = width * height;
  return area;
}

// let a = calculateArea(20); //NaN
// console.log(a);

//

//variable scope
// const filename = "xyz.pdf";

// function download() {
//   console.log(filename);
// }
// download();

//

//   function expression and function declaration

//declaration
// function login() {

// }

//expression
const login = function () {
  console.log("logged in");
};

// login();

//

// callbacks - inside one function pass another fn ass parameter

function formatText(text, formatCb) {
  return typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();
}

let a = formatText("hello", function () {
  return text.charAt(0).toUpperCase() + text.slice(1);
});
console.log(a);

//

//--- IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log("setup done");
// })();

// (function setUp() {
//   console.log("setup done 2");
// })();

//

//-------------Arrrow functions

// hello = (a, b) => a + b;

// let result = hello(3, 8);
// console.log(result);

// Good practise
//1. naming eg:  showUser, getUserName
//2. one function - one action
//3. fn name should be descriptive
// function a(){}   - wrong
// function getUser(){}  - right
