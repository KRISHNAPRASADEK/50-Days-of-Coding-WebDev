import Stack from "./Stack.js";

const cars = new Stack();

cars.push("honda");
cars.push("toyota");
cars.push("mazda");

console.log(cars.pop());
console.log(cars);
console.log(cars.peek());
console.log(cars.getSize());
console.log(cars.isEmpty());
