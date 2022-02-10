const parent = document.querySelector(".title2");

// console.log(parent.previousElementSibling);
// console.log(parent.nextElementSibling);
// console.log(parent.parentNode);
// console.log(parent.childNodes);

//dom manipulation

parent.innerHTML = "hello";
parent.style.color = "red";
parent.style.fontSize = "100px";

parent.style = "color:blue;font-size:19px";

parent.classList.add("heading");
parent.classList.remove("heading");

// craete elements

const heading = document.createElement("p");
heading.innerHTML = "<h1>DOM created element</h1>";
heading.style = "color:green;font-size:56px";

const p = document.querySelector(".parent");
// p.appendChild(heading);

p.insertAdjacentElement("afterend", heading);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  heading.style.color = "red";
});
