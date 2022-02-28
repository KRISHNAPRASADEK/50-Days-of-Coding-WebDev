let obj = {
  name: "Krishna",
  address: {
    country: "India",
    state: {
      code: "KL",
      pin: "682311",
    },
  },
};

// let obj2 = obj;

// obj2.name = "Prasad";

// console.log(obj);

//shallow copy

// let obj2 = {
//   ...obj,
//   address: { ...obj.address, state: { ...obj.address.state } }, //deep copy
// };

// obj2.name = "Manaf";
// obj2.address.state.code = "MI";

// console.log(obj);
// console.log(obj2);

// OR

let obj2 = JSON.stringify(obj);

console.log(JSON.parse(obj2));

// console.log(obj);

console.log(obj2);
