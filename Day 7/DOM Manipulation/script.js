// document.body.append("Hello World");
const body = document.body;
body.append("Hello World");

//

//create element

const div = document.createElement("div");

div.innerText = "Hello man";
div.textContent = "hello man 2";

body.append(div);

//

//diff bw textcontent and innertext
// const div1 = document.querySelector("div");

// console.log(div1.textContent);
// console.log(div1.innerText);

//

//   create HTML ELEMENTS
div.innerHTML = "<h1>Hello guys</h1>";

//     Modify existing html element

const body1 = document.body;
const div2 = document.querySelector("div");

const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanBye.remove();

// div2.append(spanBye);

// div2.removeChild(spanBye);

// spanHi.setAttribute("id", "ddddd");

// spanHi.removeAttribute("id");

// spanHi.classList.add("hi3");

// spanHi.classList.remove("hi2");

spanHi.classList.toggle("hi2");
spanHi.classList.toggle("hi3");
spanHi.classList.toggle("hi4", true);
// spanHi.classList.toggle("hi4", false);

//

spanHi.style.color = "red";
spanHi.style.backgroundColor = "blue";
