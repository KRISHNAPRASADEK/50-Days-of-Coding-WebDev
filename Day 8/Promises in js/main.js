let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a == 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

//

/////////// another example //////////////////////

const userLeft = true;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User watching cat meme",
        message: "Webdevsimplified < cat",
      });
    } else {
      resolve("Thumbs up and subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("success " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//
//

/////////// another example //////////////////////

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("video 1 is recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("video 2 is recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("video 3 is recorded");
});

//promis.all
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
