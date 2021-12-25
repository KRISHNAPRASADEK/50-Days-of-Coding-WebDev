let myName = "kyle";

function printName() {
  console.log(myName);
}

myName = "krish";

printName();

//anothe example
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc();
//
