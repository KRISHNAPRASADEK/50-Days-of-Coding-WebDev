// Fetch , promise , async , await in javascript

// fetch returns a promise( asynchronous task - it take some time to get this response)

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.log("error:" + error));

//

// on button click fetch with async await

// async function fetchPost() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const result = await res.json();
//   console.log(result);
// }

// arrow fn

fetchPost = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log("error : " + error);
  }
};
