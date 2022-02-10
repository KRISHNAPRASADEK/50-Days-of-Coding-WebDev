// fetch in js --------------  instead of XMLHttpRequest

//

//       1.  for reading data from server or local s/m   /////////////////////////////////////////

// fetch("./readme.txt")
//   .then((response) => response.text())
//   .then((data) => document.write(data));

// fetch("https://jsonplaceholder.typicode.com/users")
// or
// fetch("./student.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     for (var i in data) {
//       document.write(
//         // `${data[i].name} - ${data[i].email} - ${data[i].address.city} <br/>`
//         `${data[i].name} - ${data[i].age} - ${data[i].city} <br/>`
//       );
//     }
//   })
//   .catch((error) => console.log("can't fetch data"));

//

// methods -
// post - insert data
// put - update data
//delete - delete data
//get - read data

// ///////////////////////// --end of read--////////////////////////////////////////////////////

//

//        2. send data to server (insert ,update, delete)   ///////////////////////////////

//

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

/////////////////////////////////////////////////// end

//         3. sending form data to server            ////////////////////////////////////////

// document.getElementById("saveForm").addEventListener("click", (e) => {
//   e.preventDefault(); // it will prevent from page refershing

//   var obj = {
//     title: document.getElementById("titleText").value,
//     body: document.getElementById("bodyText").value,
//     userId: document.getElementById("userId").value,
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(obj),
//     headers: {
//       "content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// });

// or

// another method for sending form data /////////////////////////////////////////////////

document.getElementById("saveForm").addEventListener("click", (e) => {
  e.preventDefault(); // it will prevent from page refershing

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: new FormData(document.getElementById("myForm")),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});

//

// checking browser supports fetch method ///////////////////////////////////////////////

if (window.fetch) {
  //here we write fetch method code
  console.log("true");
} else {
  //here we write XMLHttpRequest method code

  console.log("false");
}
