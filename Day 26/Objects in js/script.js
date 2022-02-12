// Objects in javascript

let obj = {
  name: "krishna",
  age: 25,
  detailes: {
    course: "btech",
  },
};
console.log(obj); //     {name: 'krishna', age: 25, detailes: {…}}
console.log(obj.name); //   krishna
console.log(obj["detailes"]); //   {course: 'btech'}{course: 'btech'}
console.log(obj["detailes"]["course"]); //   btech

console.log(obj.detailes.course);

console.log(" ");

//

/////// Objects Destructuring -->

// let { age } = obj;
// document.write(age); // 25
let { age: userAge } = obj; //       object destructuring
document.write(userAge); // 25

// let { course } = obj.detailes;
// console.log(course);

// or
let {
  name,
  age,
  detailes: { course },
} = obj;
console.log(course);

// let { a } = obj; // we cannot assign keynames not present in obj
// document.write(a); // undefined

////////////////////////////

let subject = "Computer";
let duration = 4;
// let person = { subject: subject, duration: duration }; // here both key & value are same,so
let person = { subject, duration }; // here we need to declare it only once

console.log(person); //      {subject: 'Computer', duration: 4}

///////// objects destructuring another example;

//

// const greet = (person) => {
//   const { name, age } = person;

//   console.log(`hello ${name} you are ${age} old, happy xmas`);
// };

// greet({ name: "krishnaprasad", age: 25 });

//

// or we can direcly destructuring it without using person

//

// const greet = ({ name, age }) => {
//   // here direct destructuring
//   // console.log(`Mr  ${name} you are ${age} old, happy xmas`);
//   console.log({ result: `${name} you are ${age} old` }); // it will return object
// };

// greet({ name: "krishnaprasad", age: 25 });

const greet = ({ name }) => ({ result: `hello ${name}` }); //here added paranthesis to retun it as object  // ({key:value})

console.log(greet({ name: "krishnaprasad" }));
