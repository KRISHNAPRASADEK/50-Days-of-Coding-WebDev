// async and await

//

// async function test() {
//   return "hello";
// }
// // console.log(test()); //Promise {<fulfilled>: 'hello'}
// test()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//

////////////////////////// await//////////////////////////////////////////////////////// await

//

// async function test() {
//   console.log("2 : message");
//   await console.log("3 : message");
//   console.log("4 : message");
// }
// console.log("1 : message");
// test();
// console.log("5 : message");
//op
// 1 : message
// 2 : message
// 3 : message
// 5 : message
// 4 : message

////////////////////////  fetch //////////////////////////////////////////////////////////////////

//

// async function test() {
//   //   console.log("2 : message");
//   const response = await fetch("./stud1ent.json");
//   //   console.log("3 : message");
//   const students = await response.json();

//   return students;
// }

// // console.log("1 : message");

// test()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// // console.log("4 : message");

//

//////////////////////////////////////////////////////////////////////////////////////////////

//

async function test() {
  try {
    return (await fetch("./student.json")).json();
  } catch (error) {
    console.log(error);
  }
}

test().then((res) => console.log(res));
//   .catch((error) => console.log(error));
