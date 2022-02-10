// promises in javascript
// promise is a class , so to use promise wecreate object of promise with fn(rs,rej)

// let complete = true;

function prom() {
  return new Promise(function (resolve, reject) {
    console.log("fetching data ,please wait");

    setTimeout(() => {
      $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
        resolve(data);
      }).fail((err) => {
        reject("failed to load json");
      });
    }, 3000);
  });
}

// let onFullfillment = (result) => {
//   console.log(result);
// };
// let onRejection = (error) => {
//   console.log(error);
// };

prom()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(prom(true)); //Promise {<fulfilled>: 'succcess'}
// console.log(prom(false)); //Promise {<rejected>: 'failed'}
