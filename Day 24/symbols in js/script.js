// symbols in javascript (a datatyoe)
const x = Symbol("Hello"); //-----------> unique value
const y = Symbol("Hello"); //--------------> unique value

console.log(typeof x); // symbol
console.log(typeof y); // symbol
console.log(x == y); //  false

console.log(x); //   Symbol(Hello)
// alert(x); //  Uncaught TypeError: Cannot convert a Symbol value to a string
// alert(x.toString()); // alert with text inside Symbol(Hello)
// alert(x.description); //   alert with text inside Hello

let age = Symbol("age");
let l = "lname";
let obj = {
  name: "krishna",
  course: "Btech",
};

// obj[age] = 25;
obj[age.description] = 25; // now o/p will be - >  {"name":"krishna","course":"Btech","age":25,"lname":"prasad"}

obj[l] = "prasad";

// console.log(obj); //  {Symbol(age): 25}
console.log(obj); //  {name: 'krishna',course: 'Btech', Symbol(age): 25}

console.log(obj.course); //   Btech
console.log(obj.age); //  undefined

console.log(obj[age]); //   25
console.log(obj.lname); //   prasad

// for (let key in obj) {
//   console.log(key);
// }

console.log(JSON.stringify(obj)); //   convert the object into json
// o/p - {"name":"krishna","course":"Btech","lname":"prasad"}
// all printed except Sybmol(age): 25

// so when convert to json , conver the symbol with .description // obj[age.description] = 25
