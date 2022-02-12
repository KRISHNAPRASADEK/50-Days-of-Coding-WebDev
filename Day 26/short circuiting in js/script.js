// Short Circuiting in Javascript

// false, "", 0, undefined, null

// ternary operators

// let name = "krishna";  //  krishna
// let name = ""; //  user not exists

// let userExists = name ? name : "user not exists";

// console.log(userExists);

// Short Circuiting //////////////////////////////////////////

//

// let name = "krishna";
// let userExists = name || "user not exists";
// console.log(userExists);

///////////////////////////////////// or  ///////////////////////////////////////////////

let name = "krishna";
let emailVerifird = true;

let userExists = (name && emailVerifird) || "user or emailVerified - false";
console.log(userExists);

// if both name and emailVerified are true, then return true  ;
// if any one of the name and emailVerified is false, then return false  ;
