let myName = "krish";

function printName() {
  console.log(myName);
}

myName = "//1 joby";

printName();

myName = "//2 Abhi";

printName();

/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////

function outerFunction(outerVariable) {
  const outer2 = "Hi";
  return function innerVariable(innerVariable) {
    console.log("\nOuter Variable: " + outerVariable);
    console.log("Inner Variable:" + innerVariable);
    console.log(outer2);
  };
}

const newFunction = outerFunction("Outside");
newFunction("inner");

//console.log(outerVariable); //OuterVariable is not defined

//another example

function outerFunction1(outerVariable) {
  fetch(url).then(() => {
    console.log(url);
  });
}
