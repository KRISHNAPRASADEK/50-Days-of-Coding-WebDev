function greet(name, greetText = "deafault value of greettext") {
  let name1 = "name1";
  console.log(greetText + " " + name);
  console.log(name + " is a good boy");
}

let _name = "harry";
let name1 = "kabir";
let name2 = "prasad";
let name3 = "sagar";
let name4 = "Ranbir";

let greetText = "Good morning";

greet(_name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4);
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

function sum(a, b) {
  let c = a + b;
  return c;
  console.log("fn is returned"); //nothing execute after return
}

let returnValue = sum(2, 7);
console.log(returnValue);
