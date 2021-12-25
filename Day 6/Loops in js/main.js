//for

// for (let i = 1; i <= 10; i++) {
//   if (i == 3) {
//     continue;
//   }

//   if (i == 7) {
//     break;
//   }
//   console.log(i);
// }

//while

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//do while

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i <= 10 && i > 0);

// for... in

// const person = {
//   name: "don",
//   age: 29,
//   occupation: "smuggling",
// };

// for (let prop in person) {
//   console.log(prop);
//   console.log(person[prop]);
// }

// for ... of

// const numbers = [5, 9, 13];
// for (let n of numbers) {
//   console.log(n);
// }

// const listItems = document.querySelectorAll("li");

// for (const li of listItems) {
//   console.log(li);
// }

// forEach

const numbers = [5, 10, 14];

numbers.forEach((n, i) => {
  console.log(n);
  console.log(i);
  console.log("\n");
});
