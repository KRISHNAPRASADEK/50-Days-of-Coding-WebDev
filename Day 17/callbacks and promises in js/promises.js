//promise

//promise - inbuilt object(class) in js

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("registration end");

      resolve("successfully registered");

      // return reject("error while registering");
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("error while sending email");

      console.log("email end");
      resolve();
    }, 5000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 3000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("got user data");
      resolve();
    }, 1000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data displayed");
      resolve();
    }, 1000);
  });
}

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

// ****  NOTE ** above fn calling nesting structure is very complex - so we use promises

//promise

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

// console.log("other application works");

//

//---------------------------------------------------------------------------------------------

//Async await -  another method better than " Promise "

// async await

async function authentication() {
  try {
    const message = await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.log(err);

    throw new Error();
  }

  // here it also return a promise (but we dont need to write ,js wil handle it) , so we can use then
}

authentication()
  .then(() => {
    console.log("all set !");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("other application works");
