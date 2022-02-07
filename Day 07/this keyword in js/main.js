// object

let person = {
  fname: "Krishna",
  lname: "Prasad",
  sayHello() {
    console.log(
      //   "Hello, I am " + person.fname + " and i have a " + car.brand + " car"

      "Hello, I am " + this.fname + " and i have a " + car.brand + " car"
    );
  },
};

let car = {
  brand: "Hyundai",
  model: "i20",
};

person.sayHello();
