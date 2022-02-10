// // promise.all
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("the first promise has resolved");
//     resolve(10);
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("the second promise was failed");
//     reject("failed");
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("the third promise was resolved");
//     resolve(30);
//   }, 3000);
// });

// // p1.then((result) => {
// //   console.log(result);
// // }).catch((error) => {
// //   console.log(error);
// // });

// var total = 0;
// Promise.all([p1, p2, p3])
//   .then((result) => {
//     for (var i in result) {
//       total += result[i];
//     }
//     console.log("result : " + result);
//     console.log("total : " + total);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

///////end

//

////////////////////////////  --- Another way to use this

let PromiseCall = function (returnData, message) {
  return function (resolve, reject) {
    setTimeout(() => {
      console.log(`the ${message} promise has resolved`);
      resolve(returnData);
    }, returnData * 100);
  };
};

let p1 = new Promise(PromiseCall(10, "first"));
let p2 = new Promise(PromiseCall(20, "second"));
let p3 = new Promise(PromiseCall(30, "third"));
let p4 = new Promise(function (resolve, reject) {
  reject("The 4th promise has rejected");
});

var total = 0;

Promise.all([p1, p2, p3, p4])
  .then((result) => {
    for (var i in result) {
      total += result;
    }

    console.log("result : " + result);
    console.log("total : " + total);
  })
  .catch((error) => {
    console.log("error : " + error);
  });
