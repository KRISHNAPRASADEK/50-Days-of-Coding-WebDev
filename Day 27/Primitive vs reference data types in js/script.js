// Primitive vs Reference Datatypes in javascriptS

// reference - arry,object,RegExp

let obj1 = {
  name: "krishna",
  age: 25,
};

let obj2 = obj1;

obj1.name = "ramesh"; // obj1 changed but also obj2 changed , refernce datatype
// obj2.name = "ramesh"; // obj1 changed but also obj2 changed , refernce datatype

console.log(obj2);
// console.log(obj1);

// here obj2 does not copying obj1, obj1 and obj2 both are pointing to same memory location,
// so when obj1 or obj2 updated, then obj2 or obj1 also updated

// so when we need a copy , we use spred operator to make a copy, to store diff memory location

let obj3 = { ...obj1 };
console.log(obj1);

obj1.name = "Abhilash";
console.log(obj3); //obj3 not changed when a copy made using spread operator

//

// let obj4 = {
//   name: "hari",
//   age: 99,
//   name: "gigi",
// };
// console.log(obj4);  {name:'gigi,age:99}

// primitive - number,string,boolean,null,undefined

let x = 5;

let y = x;

x = 7;

console.log(y); // 5 , not changed when x updated, primitive datatype
