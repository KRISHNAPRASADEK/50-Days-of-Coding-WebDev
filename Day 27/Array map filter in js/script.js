// Arrays, map, filter in javascript

let array = [20, 30, 37, 40, 45];

console.log(array);
console.table(array);

console.log(...array); // 20,30,37,40,45  // unpacked using spread operator

// but in objects we can unpack using spread operator,but cannot console.log the unpacked output

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//

// Array Destructuring

const [a, b, c, d] = arr1;
console.log(a); //1
console.log(b); //2
console.log(c); //3

//

console.log("");

// array methods

const fruits = ["mango", "apple", "banana"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

const employee = [
  {
    name: "ramesh",
    salary: 1000,
  },
  {
    name: "suresh",
    salary: 2000,
  },
  {
    name: "sumesh",
    salary: 2000,
  },
];

// employee.forEach((emp) => {
//   emp.salary += 300;
// });
// console.log(employee);  // now array updated

//

// let i = employee.forEach((emp) => {
//   emp.salary += 300;
//   return emp; // it will return undefined
// });

// console.log(i);

//another method

let empNew = employee.map((emp) => {
  emp.salary += 300;
  return emp; // it will return each update object individully
});

console.log(empNew); //  we get updated array [{},{},{}]
