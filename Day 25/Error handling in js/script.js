// Javascript Error Handling

//blabla; //   Uncaught ReferenceError: blabla is not defined

//

//using try catch

// try {
//   console.log("start of try");
//   //   blabla;
//   Blabla2();
//   console.log("end of try");
// } catch (error) {
//   console.log(error);
// }

///////////////////////////////////////////// end  //////////////////////////////////////

// try catch does not work synchronously  //catch is only work after settimeout

// try {
//   setTimeout(function () {
//     blabla();
//   }, 2000);
// } catch (error) {
//   console.log("error has occured");
// }

////////////////////////////////////    end    /////////////////////////////////////////////

//  add  try catch method  inside settimeout

// setTimeout(function () {
//   try {
//     blabla;
//   } catch (error) {
//     // console.log("error has occured");
//     // console.log(error);
//     console.log(error.name); // ReferenceError
//     console.log(error.message); // blabla is not defined
//     console.log(error.stack); //ReferenceError: blabla is not defined at script.js:36:5
//   }
// }, 2000);

// now catch will works as asynchronous method, the error will print after 2 seconds

/////////////////////////////   end   ///////////////////////////////////////////////////

//

// Different types of error

// try {
//   //   blabla; //   ReferenceError: blabla is not defined
//   //let a = "m ;;  // Uncaught SyntaxError: Invalid or unexpected token
// } catch (error) {
//   //   if (error instanceof ReferenceError) {
//   //     console.log("ReferenceError");
//   //   } else if (error instanceof TypeError) {
//   //     console.log("TypeError");
//   //   } else {
//   //     console.log("unknown error");
//   //   }

//   console.log(error);
// }

/////////////////////////////////////////// end ///////////////////////////

try {
  let json = '{"name":"krishna","age":30}'; //correct code

  //   let json = '{"namme":"krishna","age":30}'; // error - "name" is like this "name
  //   let json = '{"namme":"krishna","age":30}'; // error - "name" is like this "namme"
  let user = JSON.parse(json);

  if (!user.name) {
    throw new Error("Incomplete data : No Name");
  }

  console.log(user.name); //krishna
  console.log(user.age); // 25
} catch (error) {
  console.log(error);
} finally {
  //optional method
  console.log("finally"); // called always withou regard of error occurs or not
}

// error -  SyntaxError: Unexpected token k in JSON at position 8  at JSON.parse (<anonymous>) at script.js:73:19
