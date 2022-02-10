const bulbSwitch = document.querySelector("#switch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener("click", () => {
  if (bulb.src.match("off")) {
    bulb.src = "./bulbon.gif";
    bulbSwitch.innerHTML = "turn off";
  } else {
    bulb.src = "./bulboff.gif";
    bulbSwitch.innerHTML = "turn on";
  }
});
