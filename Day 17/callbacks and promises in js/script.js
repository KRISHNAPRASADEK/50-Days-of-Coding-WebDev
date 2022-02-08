// callbacks

//scenario
/**
 * 1. register
 * 2. send welcome email
 * 3. login
 * 4. get user data
 * 5. display user data
 */

// function waitForThreeSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

//

//------------------------------------------------------------------------------------------

// function register(callback) {
//   //higher order fn
//   setTimeout(() => {
//     console.log("registration end");
//     callback();
//   }, 1000);
// }
// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("email end");
//     callback();
//   }, 5000);
// }

// function login(callback) {
//   setTimeout(() => {
//     console.log("login end");
//     callback();
//   }, 3000);
// }
// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("got user data");
//     callback();
//   }, 1000);
// }
// function displayUserData() {
//   setTimeout(() => {
//     console.log("user data displayed");
//   }, 1000);
// }

// //callback hell
// register(function () {
//   //callback - a fn passed inside another fn
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// // ****  NOTE ** above fn calling nesting structure is very complex - so we use promises

// console.log("other application works");
