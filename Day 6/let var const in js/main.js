if (true) {
  var varVariable = "this is true var";
}
var varVariable = "this is true var2";
if (true) {
  let letVariable = "this is true let";
  //   let letVariable = "this is true let2";
  console.log(letVariable);
}
if (true) {
  const constVariable = "this is true const";
  //   const constVariable = "this is true const2";
  console.log(constVariable);
}

console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);

const ob = { name: "hari" };
ob.name = "sam";
console.log(ob);
