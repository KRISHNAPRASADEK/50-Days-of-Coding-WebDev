// Iterators in javascript

var x = ["apple", "orange", "grapes", "mango"];

// for (let i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }

// for (let i of x) {
//   console.log(i);
// }

// for (let i in x) {
//   console.log(x[i]);
// }

// x.forEach((i) => console.log(i));

// x.map((i) => console.log(i));

let iter = x[Symbol.iterator]();

iter.next();
iter.next();

console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next().done);
console.log(``);

//array
// let numbers = [100, 200, 300];
// let iter2 = numbers[Symbol.iterator]();

//string
let str = "krishna prasad";

// for (let char of str) {  //it is better and simple for str
//   console.log(char);
// }

let iter2 = str[Symbol.iterator]();

let result = iter2.next();

while (!result.done) {
  console.log(result.value);
  result = iter2.next();
}

//////////////////////////////////////////--- end -------  /////////////////////////////////////////

//

//  or we can create an iterator ourself its code is very large so es6 introduced symbol.iterator (above code metho)

//

function numberIterator(arr) {
  var nexNum = 0;
  return {
    next() {
      if (nexNum < arr.length) {
        return {
          value: arr[nexNum++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

let numbers2 = [1, 2, 3, 4, 5];

let num = numberIterator(numbers2);

console.log(num.next());
console.log(num.next());
console.log(num.next().value);
console.log(num.next().done);
console.log(num.next());
console.log(num.next());
console.log(num.next());
