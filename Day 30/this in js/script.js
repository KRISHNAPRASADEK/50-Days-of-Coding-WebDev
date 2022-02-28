// console.log(this); //refers to current object

// function greet() {
//   console.log(this); // obj through which fn is called
// }

// greet();

// let obj = {
//   name: "krishna",
//   fun: greet,
// };

// obj.fun(); // return obj

// function out() {
//   console.log(this); // parent object - obj

//   function inner() {
//     console.log(this);
//   }
//   inner(); // global object
// }

// let obj = {
//   name: "krish",
//   fun: out,
// };

// obj.fun();

//

// Method : bind function

// function out() {
//   console.log(this); // parent object - obj

//   function inner() {
//     console.log(this);
//   }
//   let ret = inner.bind(this); //fn defenition
//   ret(); // insted of global object it also returns obj
// }

// let obj = {
//   name: "krish",
//   fun: out,
// };

// obj.fun();

//

// method - arrow fn

function out() {
  console.log(this); // parent object - obj

  inner = () => {
    console.log(this); // return also obj , because of arrow fn
  };
  inner();
}

let obj = {
  name: "krish",
  fun: out,
};

obj.fun();
