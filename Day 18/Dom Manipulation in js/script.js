//dom manipulation

// 1. getelementbyid

// const heading = document.getElementById("heading");
// console.log(heading);

// 2. getelementsbytagname  // gives html colection or use index[0]

// const heading = document.getElementsByTagName("h1");
// console.log(heading);

// 3. getelementsbyclassname  // gives html colection or use index[0]

// const heading = document.getElementsByClassName("title");
// console.log(heading[0]);

// 4. queryselector  // gives nodelist collection  or use index[0]

// const heading = document.querySelector("#heading");
// console.log(heading);

// 4. queryselectorAll  // gives nodelist collection  or use index[0]

// const heading = document.querySelectorAll(".title");
// console.log(heading);

//--------------------------------------------------------------------------------------

//---------------------------     traverse -DOM   ----------------------------

// 1. parentNode

// const heading = document.querySelector(".heading");

// const parent = heading.parentNode;

// console.log(parent);

//---------------------------

// 2. childNodes

// const parent = document.querySelector(".parent");

// console.log(parent.childNodes);

//-----------------------------

// 3. nextElementSibling

// const heading = document.querySelector(".heading");

// console.log(heading.nextElementSibling);

//--------------------------------------

// 4. previousElementSibling

// const subheading = document.querySelector("h3");

// console.log(subheading.previousElementSibling);

//--------------------------------------------------------------------------------

//

// ------------------          Manipulation         --------------------

// const heading = document.querySelector(".heading");

// heading.innerHTML = "web dev is awesome";

// heading.style.color = "red";
// heading.style.fontSize = "100px";

// heading.style = "color:blue; font-size:100px";

// heading.classList.add("title");
// heading.classList.remove("heading");

//

// **********  create elements

// const heading = document.createElement("h1");

// heading.innerHTML = "javascript is awesome";
// heading.classList.add("title");

// const parent = document.querySelector(".parent");
// parent.appendChild(heading);

// const subheading = document.createElement("h3");
// subheading.innerHTML = "this is subheading";

// parent.appendChild(subheading);
// appendchild only add element last position, so
//position- beforebegin, afterbegin, beforeend, afterend
// parent.insertAdjacentElement("beforebegin", subheading);
// parent.insertAdjacentElement("afterbegin", subheading);
// parent.insertAdjacentElement("afterend", subheading);

// parent.insertAdjacentElement("beforeend", subheading);

// console.log(heading);

//

// *********  DOM - events

// const btn = document.querySelector("#btn");
// const heading = document.querySelector("#heading");

// btn.addEventListener("click", function (event) {
//   heading.style.color = "red";
//   console.log("button clicked ", event);
// });
