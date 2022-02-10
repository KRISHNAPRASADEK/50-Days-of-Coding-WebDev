// object literals
// let name = "krishna";
// let obj = {
//   name: name,
// };
// console.log(obj); //{name: 'krishna'}

// let obj = {
//   name,
// };
// console.log(obj); //{name: 'krishna'}

//

// let n = "name";
// let obj = {
//   [n]: "krishna prasad",
// };
// console.log(obj); //{name: 'krishna prasad'}

// let s = "student";
// var obj = {
//   [s + "name"]: "krishna",
//   course: "btech",
//   detail: function () {
//     return `${this.studentname} is a student of ${this.course}`;
//   },
// };
// console.log(obj.studentname); //krishna
// console.log(obj); //{studentname: 'krishna', course: 'btech'}
// console.log(obj.detail()); //krishna is a student of btech

//

// let obj = {
//   name: "krishna",
//   show: function () {
//     console.log(this.name);
//   },
// };
// obj.show(); ///krishna

// let obj = {
//   name: "krishna",
//   show() {
//     console.log(this.name);
//   },
// };
// obj.show(); //krishna
// //or
// obj["show"](); //krishna
// console.log(obj["name"]); //krishna

// let obj = {
//   name: "krishna",
//   "detail show"() {
//     console.log(this.name);
//   },
// };

// obj["detail show"](); //krishna

//

let fname = "krishna";
let lname = "prasad";
let course = "btech";
function student(fname, lname, course) {
  let fullname = fname + lname;
  return { fullname, course };
}
// console.log(student(fname, lname, course)); //{fullname: 'krishnaprasad', course: 'btech'}
let s = student(fname, lname, course);
console.log(s.fullname); //krishnaprasad
