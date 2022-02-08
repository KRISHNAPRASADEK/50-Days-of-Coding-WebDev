// -----------------------------------callback

// function registration(callback) {
//   setTimeout(() => {
//     callback();
//     console.log("registration end");
//   }, 5000);
// }

// function emailSend(callback) {
//   setTimeout(() => {
//     callback();
//     console.log("email send");
//   }, 4000);
// }

// function login() {
//   setTimeout(() => {
//     console.log("login end");
//   }, 3000);
// }

// registration(() => {
//   emailSend(() => {
//     login();
//   });
// });

// console.log("other app works");

//--------------------------------   end  ----------------------------------------------

//

// ---------------------------------    Promises

// function registration() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("register end");

//       resolve();
//     }, 5000);
//   });
// }

// function emailsend() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return reject("error whil sending email");
//       console.log("email send");

//       //   resolve();
//     }, 4000);
//   });
// }

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("login end");
//     }, 3000);
//   });
// }

// registration()
//   .then(emailsend)
//   .then(login)
//   .catch((error) => {
//     console.log("ERROR : " + error);
//   });

// console.log("other app works");

//

//-------------------------    end       ---------------------------------------------------------

//

// ---------------------------  async await

function registration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("registration end");

      resolve();
    }, 3000);
  });
}

function emailSend() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("email send");

      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("login fails");

      console.log("login end");

      //   resolve();
    }, 2000);
  });
}

async function authentication() {
  try {
    await registration();
    await emailSend();
    await login();
  } catch (error) {
    console.log("error " + error);
    throw new Error();
  }
}

authentication()
  .then(() => {
    console.log("all set !");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("other app works");
