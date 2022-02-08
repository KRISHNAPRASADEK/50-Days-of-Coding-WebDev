const bulb = document.querySelector("#bulb");
const bulbswitch = document.querySelector("#switch");

bulbswitch.addEventListener("click", function () {
  console.log(bulb.src);
  if (bulb.src.match("off")) {
    bulb.src = "./bulbon.gif";
    bulbswitch.innerHTML = "turn off";
  } else {
    bulb.src = "./bulboff.gif";
    bulbswitch.innerHTML = "turn on";
  }
});
