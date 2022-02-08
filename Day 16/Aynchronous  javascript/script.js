// asynchronous javascript - async method will not block other sync code after async

// console.log("hello"); //sync code

// //async
// function greet() {
//   console.log("I am from settimeout"); //eventloop
// }
// setTimeout(greet, 3000);

// console.log("javascript"); //sync code

//note : call stack, web apis, callback queue

//

// console.log("start");

// setTimeout(() => {
//   console.log("I am from timeout");
// }, 2000);

// console.log("end");

//--------- o/p : start , end, I am from timeout

//sync method - run for seven seconds it is in call stack
function waitForSevenSeconds() {
  let ms = 7000 + new Date().getTime();
  while (new Date() < ms) {}
}

setTimeout(() => {
  console.log("hello from settimeout"); //after 2 second call stack still busy
}, 2000);

waitForSevenSeconds();
