//destructuring objects in js

let user = {
  name: "krishnaprasad",
  age: 24,
};

// let name = user.name;
// console.log(name); //krishnaprasad
//----now
// let { name, age } = user;
// let { name, age } = user;
// console.log(name); //krishnaprasad
// console.log(age); //24
//
// variable name & property name must be same.
// let { name2, age2 } = user;
// console.log(name2); //undefined
// console.log(age2); //undefined

let car = {
  model: "hyundai",
  year: 2020,
  engine: "petrol",
};

let { model: m, engine: e } = car;
// console.log(year); //error
// console.log(model); //error
// console.log(engine); //error

console.log(m); //hyundai
console.log(e); //petrol
