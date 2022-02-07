// constructor

function Engineer(name, tech) {
  this.name = name;
  this.technology = tech;

  this.work = function () {
    console.log("solving bugs from 12 hrs");
  };

  return 7; //it will not print
}

let engineer1 = new Engineer("krish", "js");
let engineer2 = new Engineer("Abhi", "java");

engineer1.technology = "blockchain";

console.log(engineer1);
console.log(engineer2);

engineer1.work();
