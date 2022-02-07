/*
const num=20;
num=0;

//uncaught type error - assignment to constant variable

*/

//    1. SCOPE

//var - function scope
//var lang1 = "JavaScript";

//let, const - block scope
function hello() {
  var lang1 = "JavaScript";
  let lang2 = "JavaScript";
  const lang3 = "JavaScript";
}

if (true) {
  var age = 20;
}

//console.log(lang1); //not accesible - uncaught referne error - not defined

//console.log(age); //accesible

//console.log(lang2); //not accesible
//console.log(lang3); //not accesible

// ------------------End of scope--------------------------------------------

//

//            2. HOISTING

// console.log(greeting);

// var greeting = "Hello";
// o/p - undefined

// let greeting = "Hello";
// o/p - uncaught referne error -  Cannot access 'greeting' before initialization
// variables will be in temporal dead zone(tdz)

// var greeting = "Hello";
// o/p - uncaught referne error -  Cannot access 'greeting' before initialization

//Variable hoisting
x = 10;
document.write(x);
var x; //let,const here will cause error

//function hoisting
document.write("<br/>" + sum(2, 10));
function sum(a, b) {
  return a + b;
}
