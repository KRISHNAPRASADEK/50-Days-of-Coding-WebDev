// Block scope - inaccessible from outside block({})

if (100 > 20) {
  var a = 20;
}
console.log(a);

//  function scope - accessible from outside function

function dcode() {
  var a = 20;
}

console.log(a);

// global scope - accessible from anywhere

var a = 20;
let b = 40;
const c = 60;

function dcode() {
  return b;
}

function dcode() {
  let a = 20;
}
