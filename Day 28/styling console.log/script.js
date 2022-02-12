// styling console.log
console.log(
  "%cI am krishnaprasad %cI am a coder",
  "color:red;font-size:22px",
  "background:yellow"
);

function test(text) {
  console.log(`%c ${text}`, "color:red");
}

test("hello world");

class bike {
  function() {
    this.a = 89;
    let b = 8009;
  }
  constructor() {
    this.speed = 120;
    let color = "red"; //  color and b is only accesible insides
    console.log(color);
  }
}

let bullet = new bike();

console.log(bullet.a); // undefined
console.log(bullet.b); // undefined

console.log(bullet.speed); // 120
console.log(bullet.color); // undefined

class employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let e1 = new employee("akhil", 25);

console.log(e1.age);
console.log(e1.name);
