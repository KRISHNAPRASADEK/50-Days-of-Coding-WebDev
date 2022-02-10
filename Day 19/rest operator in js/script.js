// functions with multiple or unknown number of arguments
// function sum() {
//   let sum = 0;
//   for (let i in arguments) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }

// sum(50, 50, 50, 50); // 2000
// sum("hell", 50, 50, 50, 50); // 0hell505050

// rest operator must be a last formal parameter
function sum(name, course, ...args) {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  console.log(sum);
  console.log(name);
  console.log(course);
}

sum("hell", 05, 10, 4);
sum("krishna", "btech", 05, 10);

// function mul() {
//   console.log(arguments); // Arguments(4) [2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   //   console.log(arguments[0]); // 2
// }

// mul(2, 3, 4, 5);
