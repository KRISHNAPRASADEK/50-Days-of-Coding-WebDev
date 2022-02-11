// generators in javascript // to control execution

function* test() {
  //   console.log("first message");
  //   yield "yield no 1";
  //   console.log("second message");
  //   yield "yield no 1";
  yield "hii";
  yield "hii 2";
  yield "hii 3";
}
let g = test();
console.log(g.next());
// console.log(g.next().value);
// to skip msg 2
g.next(); // hii 2 skipped
console.log(g.next());
// console.log(g.next());
// console.log(g.next());

//

////////////////////////////////////////////////// end
function* test2() {
  yield "msg 1";
  yield "msg 2";
  yield "msg 3";
  yield 55;
  yield ["node", "react", "angular"];
  yield* ["node", "react", "angular"];
}
let a = test2();
for (let value of a) {
  console.log(value);
}

////////////////////////////////////////////////////////end

//

function* generate() {
  let nextNum = 300;
  while (true) {
    yield nextNum++;
  }
}
let g2 = generate();

// console.log(g2.next());
// console.log(g2.next());
// console.log(g2.next());
// console.log(g2.next());
// console.log(g2.next().value);
// console.log(g2.next().value);

for (let value of g2) {
  if (value > 330) {
    break;
  } else {
    console.log(value);
  }
}

///////////////////////////////////// another way of using yield

function* generate2() {
  //   let result = yield;
  //   let result = (yield) * 500;
  let yieldArray = [yield, yield, yield];
  console.log("Result : " + yieldArray);
  //   console.log("Result : " + yieldArray[2]);
}
let g3 = generate2();
g3.next();
g3.next("php");
g3.next(800);
g3.next(700);
g3.next(900);

console.log("");

//
///////////////////////////////////////////////////

// using spred operator remaining all values print together in a array

//

function* generator4() {
  yield "node";
  yield "react";
  yield "angular";
  yield "next";
}
let g4 = generator4();

console.log(g4.next().value); //     node
console.log([...g4]); //    ['react', 'angular', 'next']

//
console.log(" ");

///////////////////////////////////////////////////////////////////////

//       g.return("ending now") // when use this all stat's after this ignored, it wiil be the last

function* generator5() {
  yield "msg 1";
  yield "msg 2";
  yield "msg 3";
  yield "msg 4";
  yield "msg 5";
}
let g5 = generator5();

console.log(g5.next());
console.log(g5.next());
console.log(g5.return("end")); // end of yields, next yields are ignored
console.log(g5.next()); // {value: undefined, done: true}
