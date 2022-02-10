//destructuring array

//in previous
// let user = ["krishna", 25];
// let name = user[0];
// let age = user[1];

// now in es6
// let user = ["krishna", 25];
// let [name, age] = user;
// console.log(name); //krishna
// console.log(age); //25

//

let user = [, , "delhi", ["male", 25000]];
let [name, age = 20, place, [gender = "female", salary]] = user; //assign default value
console.log(name); //undefined
console.log(age); //20
console.log(place); //delhi
console.log(gender); //male
console.log(salary); //salary

let user2 = ["krishna", 22, "Delhi"];

let [name2, ...args] = user2; //rest operator
console.log(name2); //krishna
console.log(args); // [22, 'Delhi']

function user3([name, age = 20, city]) {
  console.log(name);
  console.log(age);
  console.log(city);
}
user3(["rajini", 65, "tamilnad"]);

//

function user4() {
  return ["krishna", 22, "Delhi"];
}
let [n, a, c] = user4();
console.log(n);
console.log(a);
console.log(c);
