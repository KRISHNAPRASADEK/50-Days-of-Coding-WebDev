// Strict Mode in Javascript

// normal code

// a = 10;
// console.log(a); // 10
// no error showing, we didn't declare the a using any keyword like var,let,const

//////////////////////////////////////end            ///////////////////////////////////////////

// in strict mode

// "use strict";
// // a=10;
// let a = 10;
// console.log(a); //Uncaught ReferenceError: a is not defined

// function test() {
//   b = 20;
// }
// now in b it will show error only after calling the fn test()

// test(); //Uncaught ReferenceError: b is not defined

///////////////////////////////////   end      //////////////////////////////////////////////

//

// a = 10;

// function test() {
//   "use strict";
//   b = 20;
// }

// test(); //Uncaught ReferenceError: b is not defined
// now it will show error only for variable inside fns

//////////////////////////////// end  ///////////////////////////////////////////////////////

//

// function test(a, b, b) {
//   console.log(a + b + b);
// }
// test(10, 20, 30); // 70

//here o/p will be 70 instead of 60(correct answer)

// and it will not show error without use strict

// when we use 'use strict'

//

"use strict";
function test(a, b, b) {
  console.log(a + b + b);
}
test(10, 20, 30); /// Uncaught SyntaxError: Duplicate parameter name not allowed in this context

//now error showing
