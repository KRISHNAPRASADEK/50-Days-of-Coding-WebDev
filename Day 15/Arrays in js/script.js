// Arrays and loops

const languages = ["javascript", "python", "c"]; //array

// console.log(languages.length);
// console.log(languages[0]);

// languages.push("dart"); // add to last
// console.log(languages);

// languages.unshift("java");      // add to first

// languages.pop(); // last element removed
// console.log(languages);

// console.log(languages.pop());      // give last element

// languages.shift(); // first item removed or return first item
//console.log(languages);

//

//------------------------- LOOPS --------------------------------------------//

const actors = [
  {
    name: "actor 1",
    payment: 100,
  },
  {
    name: "actor 2",
    payment: 200,
  },
  {
    name: "actor 3",
    payment: 150,
  },
];

// ------- for loop
// for (let i = 0; i < actors.length; i++) {
//   actors[i].payment -= 10;
// }
// console.log(actors);

//

// -------- foreach loop
// actors.forEach((actor) => {
//   actor.payment -= 10;
// });
// console.log(actors);

//

//--------- for of loop
// for (let actor of actors) {
//   actor.payment -= 10;
// }
// console.log(actors);

//

const students = [
  {
    name: "student 1",
    mark: 45,
  },
  {
    name: "student 2",
    mark: 60,
  },
  {
    name: "student 3",
    mark: 35,
  },
];

//---------- filter

// let failed = students.filter((student) => student.mark < 45);
// console.log(failed);

//

//----------  map

const users = [
  {
    fname: "John",
    lname: "doe",
  },
  {
    fname: "jane",
    lname: "don",
  },
];

// console.log(
//   users.map((user) => {
//     return {
//       // fullname: user.fname + " " + user.lname,
//       fullname: `${user.fname} ${user.lname}`,
//     };
//   })
// );

//

//---------------   Reduce
const movies = [
  {
    name: "interstellar",
    budget: 100,
  },
  {
    name: "social",
    budget: 150,
  },
  {
    name: "matrix",
    budget: 300,
  },
];

//to find total sum of budget
// let total = 0;

// movies.forEach((movie) => {
//   total += movie.budget;
// });

// reduce

// console.log(
//   movies.reduce((acc, movie) => {
//     acc += movie.budget;
//     return acc;
//   }, 0)
// );

//

//----------------- indexOf

const admins = [2, 1, 5];

const user = {
  name: "xyz",
  id: 5,
};

// console.log(admins.indexOf(user.id));

//

//----------------------- includes

// console.log(admins.includes(user.id));

//

//------------------------- find

const users2 = [
  {
    name: "xyz",
    id: 1,
  },
  {
    name: "abc",
    id: 2,
  },
  {
    name: "pqr",
    id: 3,
  },
];

// let myUser = users2.find((user) => {
//   return user.id === 3;
// });

// console.log(myUser);

//

//----------------- --------------  sort

const names = [
  "krish",
  "akhil",
  "bhaskar",
  "JOHN WICK",
  "hari",
  "vineeth",
  "mubashir",
  "aswin",
];

// names.sort();
// console.log(names);

//

// --------------------      splice

// names.splice(3, 2);
// console.log(names);
