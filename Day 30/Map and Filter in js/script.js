let arr = [1, 2, 3, 4, 5];

let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   arr2[i] = arr[i];
// }

arr2 = arr.map((item, i) => {
  return item;
});

// console.log(arr2);

let fruits = ["apple", "mango", "banana", "jackfruit", "grape"];

let fruits2 = [];

fruits2 = fruits.filter((item, i) => {
  return item.length > 6;
});

console.log(fruits2);

// let obj = {
//   name: "krishna",
//   address: {
//     country: "india",
//     state: {
//       code: "KL",
//       place: "Kadayiruppu",
//     },
//   },
// };

// let {
//   name,
//   address: {
//     country,
//     state: { code, place },
//   },
// } = obj;

// console.log(place);
