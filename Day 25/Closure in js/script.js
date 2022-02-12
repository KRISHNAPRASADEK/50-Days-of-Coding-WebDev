// Closure in javascript

// function init() {
//   console.log("I am Init");
//   let fname = "krishna";
//   function sayFname() {
//     console.log(fname);
//   }
//   return sayFname;
// }

// // init(); // it will print only -->  I am Init

// var v = init(); // I am Init
// v(); // krishna

/////////////////////////////////////////

//

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
console.log(add5(5)); // 9

console.log(doAddition(50)(5)); //  55
