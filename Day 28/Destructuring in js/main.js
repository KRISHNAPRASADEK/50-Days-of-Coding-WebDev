let arr = [1, 2, 3];

// let a = arr[0];

// console.log(a);

let [a, b, c, d = "ji"] = arr; // destructuring - extracting values

// console.log(d);

let obj = {
  name: "krishna",
  age: 28,
  state: "kerala",
  place: "kadayiruppu",
};

// let name = obj.name;
// let age = obj.age;

// console.log(name);
// console.log(age);

let { name, age, state, place, pin = 682311 } = obj;

console.log(name);
console.log(place);
console.log(pin);
