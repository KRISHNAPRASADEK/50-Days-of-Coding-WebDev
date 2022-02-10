//object oriented programming

// class-blue print of house
// object-many number of houses built based on that blueprint
//class has properties and methods

//coding methodolgy
//code more modular and reusable
//welll organized code
//easier to debug
//best for medium to large website projects

class hello {
  //method-fn inside class
  message() {
    console.log(
      "you " + this.name + " has " + this.course + " age is " + this.age
    );
  }

  sorry() {
    console.log("Sorry everyone");
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;

    console.log("i am constructor");
  }
  static happy() {
    let course;
    console.log("i am static");
  }
}

hello.happy(); //static method call //no need to create object

// create object of class hello
let a = new hello("krishnaprasad", 35); // a is object

a.course = "btech";

a.message(); //method calling
a.sorry();

//            Methods

///////////// Types of Methods: 1.Constructor, 2.Prototype, 3.Static ///////////////////////
// constructor - called itself when object created
// prototype - only works when its called (normal)
// static - without creating object of class we can call fn using classname.fnname()
