import Queue from "./Queue.js";

const cars = new Queue();

cars.enqueue("honda");
cars.enqueue("toyota");
cars.enqueue("mazda");

console.log(cars.dequeue());
console.log(cars);
console.log(cars.peek());
console.log(cars.getSize());
console.log(cars.isEmpty());
