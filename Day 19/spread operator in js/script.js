//spread operator

//------------------------rest operator //fn receiving parameters
function sum(name, ...args) {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  document.write(`${name} : ${sum} <br>`);
}
sum("krrish", 20, 30, 40); //krrish : 90

let arr = [20, 20, 20];
// sum("krrish", arr); //krrish : 020,20,20
// o/p will be a problem so, use spread operator

//spread operator // fn argument passs
sum("krrish", ...arr); //krrish : 60

var arr1 = [2, 3, 5, 6];

console.log(arr1); //    [2, 3, 5, 6]
console.log(...arr1); //   2 3 5 6
console.log([...arr1]); //   [2, 3, 5, 6]

// var arr2 = arr1;
// arr1.push(50);
// console.log(arr2); //[2, 3, 5, 6, 50]

var arr2 = [...arr1];
arr1.push(50);
console.log(arr1); //[2, 3, 5, 6, 50]
console.log(arr2); //[2, 3, 5, 6]

//
console.log("/n");

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

// var array3 = array1.concat(array2); // or use below code
//or
var array3 = [65, ...array1, ...array2, 100];

console.log(array1);
console.log(array2);
console.log(array3); // [65, 1, 2, 3, 4, 5, 6, 100]

//
console.log("/n");

var obj1 = {
  name: "krishna",
};
var obj2 = {
  age: 25,
};

var obj3 = { ...obj1, ...obj2, course: "btech" };
console.log(obj3); //     {name: 'krishna', age: 25, course: "btech"}
