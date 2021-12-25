const lang = ["jvascript", "python", "c"];
console.log(lang);
console.log(lang[2]);
console.log(lang.length);

lang.push("react"); //added to last
console.log(lang);

lang.unshift("react"); //added to first
console.log(lang);

lang.pop();
console.log(lang); //remove last element & return last element
console.log(lang.pop());

lang.shift();
console.log(lang); //remove first element

//loops

//3 objects inside an array
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

// for (let i = 0; i < actors.length; i++) {
//   actors[i].payment = actors[i].payment - 10;
// }
// console.log(actors);

// actors.forEach((item, index) => {
//   //   actors[index].payment = actors[index].payment - 10;
//   item.payment = item.payment - 10;
// });
// console.log(actors);

// for (let actor of actors) {
//   actor.payment = actor.payment - 10;
// }

// console.log(actors);
//

//filter

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

const failed = students.filter((student) => {
  //   console.log(student);

  //   if (student.mark < 45) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return student.mark < 45;
});
console.log(failed);

//

//

//map

const users = [
  {
    fname: "john",
    lname: "doe",
  },
  {
    fname: "jane",
    lname: "doe",
  },
  {
    fname: "kabir",
    lname: "sawant",
  },
];

const finalUsers = users.map((user) => {
  //   return "hello";
  return {
    // fullname: user.fname + " " + user.lname,
    fullname: `${user.fname} ${user.lname}`,
  };
});

console.log(finalUsers);

//

//

//Reduce

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

// let total = 0;

// movies.forEach((movie) => {
//   total = total + movie.budget;
// });

const total = movies.reduce((total, movie) => {
  total = total + movie.budget;
  return total;
}, 0);

console.log(total);

//

//

//

//indexof

const admins = [2, 1, 5];

const user = {
  name: "xyz",
  id: 5,
};

const m = admins.indexOf(user.id);
console.log(m);

//includes

console.log(admins.includes(user.id));

//

//

//find

const users1 = [
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

// const myUser = users1.find((user) => {
//   if (user.id === 2) {
//     return true;
//   }
//   return false;
// });

//

const myUser = users1.find((user) => {
  return user.id === 2;
});

console.log(myUser);

//

//

//sort

const names = ["john", "jane", "shyam", "ram", "sameer", "mansi"];

names.sort();

console.log(names);

//

//

//splice

names.splice(2, 1);

console.log(names);
