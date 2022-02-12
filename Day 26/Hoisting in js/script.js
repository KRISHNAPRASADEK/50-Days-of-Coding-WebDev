// Hoisting in javascript

// mechanism - we can use variables and functions before declaring them.

// console.log(a); // undefined // no reference error occures // consider it is declared
// var a = 10;

// 1. javascript variable hoisting

a = 10; // without declaring assigning value
console.log(a); // undefined // no reference error occures // consider it is declared
var a; // after assigning value is declared

// no error it is hoisting
//  javascript checks for variables in the code during compilation, before execution,
//  if any var is declared then, it consider it and add undefined value to the var.  (var a=undefined)
//  so it will not cause any error

//

//  2. javascript function hoisting

sum(); //30

function sum() {
  let x = 10;
  let y = 20;
  console.log(x + y);
}

//  here calling the fn before declaring(defining) it, it gives the correct output without causing
// an error. Because like in the case of var, js also checks for fn's during compile time,
// before execution, and read and stores the fn fully in memory. so no error occurs, and we get correct output
// fn defenitions and var declaration are moved to top - Hoisting
// another eg:

mul(2, 7); // 14

function mul(a, b) {
  console.log(a * b);
}

//

/// but in case fn defnition assigned to a variable and called it cause error

// d(10, 2); //  if d is var,  Uncaught TypeError: d is not a function
// d(10, 2); //  if d is const,let ,Uncaught ReferenceError: Cannot access 'd' before initialization

let d = function (a, b) {
  console.log(a / b);
};

// d(10, 2); // 5
