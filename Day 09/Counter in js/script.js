const counter = document.querySelector(".counter");
const btn = document.querySelectorAll(".btn");

//initilze count variable
let count = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    counter.textContent = count;
  });
});
