//            what?

//promise is simply an object in js.

/** a promise is always in one of the 3 states.
    pending:which is initial state, neither fulfilled nor rejected.
    fullfilled:meaning that the operation is completed.
    rejected:--operation is failed
*/

//            why?

/**   promises helps us to deal with aynchronus codes in a far
      more simpler way compared to callbacks.
      callback can be avoided with promises.
*/

tacos = false;

getTacos = () => {
  return new Promise((resolve, reject) => {
    if (tacos) {
      setTimeout(() => {
        resolve("Bringing tacos");
      }, 5000);
    } else {
      setTimeout(() => {
        reject("Not bringing tacos. Food truck not there.");
      }, 5000);
    }
  });
};

getTacos()
  .then((message) => {
    console.log(message);
    console.log("Set up the table to eat tacos");
  })
  .catch((message) => {
    console.log(message);
    console.log("Start cooking pasta");
  });
