// Ecmascript 2015 / es6

/////////////////////////-----------------------------let const

// var productName = "laptop";  //var global variable
//code pollute

// var age = 18;
// if (age >= 18) {
//   var driving = true;
// }

// function greet() {
//   var hello = "helllo";
// }
// console.log(driving); //accessible  - function scope
// console.log(hello); //not accessible  - function scope

// var age = 18;
// if (age >= 18) {
//   let driving = true;
// }
// console.log(driving); //not accessible - block scope

// var product = "laptop";
// var product = "mobile"; //globally accessible (window.product)- attached to window object
// let age = 18; // let not attached to window object // not globally acessible
// console.log(product); // o/p -mobile // redeclaring is possible
// let product = "laptop";
// let product = "mobile";
// console.log(product); // o/p -error // redeclaring is not possible
//const same as let, but cannot reassign value

//
// console.log(age); // undefined   //  no error will occur  //hoisting
// var age = 18;
/* when variables is in the code, then during parsing js(js looks for variables in 
    code during compilation) assign 'undefined' value to all the variables present in code.. */
//
// console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization    ///error will occur
// let age = 18;

// const age = [0, 1, 2];s
// age.push(3);
// console.log(age);               // in const
// age.splice(1, 1);               // in array and object element update is possible
// age[0] = 3;
// console.log(age);

// const age = {
//   years: 23,
// };
// console.log(age.years);
// age.years = 25;
// console.log(age.years);

//////////////////////// ////////     ---  Arrow Functions
// const addition = (a, b) => {
//   console.log(a + b);
// };
// addition(5, 4);
// const addition = (a, b) => console.log(a + b);
// addition(5, 4);

// console.log(this);       //globally it is window object
// const shop = {
//   //   purchase() {
//   //     console.log(this);
//   //   },
//   //   purchase: function () {  //it have its own context
//   //     console.log(this);
//   //   },
//   purchase: () => {
//     console.log(this);
//   },
// arrow fn doesn't have its own context , so it will give parent context - window object
// };
// shop.purchase();

/////////////////////////////////////// ---------------- this

// const myButton = document.querySelector("#myButton");

// const shop = {
//   price: 100,
//   buy: function () {
//     myButton.addEventListener("click", function () {
//       console.log(this); // o/p- <button id="myButton">click me</button>
//       console.log("i spend " + this.price); // this.price not accesible, o/p is "i spend undefined"
//     });
//   },
// };

// const shop = {
//   price: 100,
//   buy: function () {
//     const self = this;
//     myButton.addEventListener("click", function () {
//       console.log(this); // o/p- <button id="myButton">click me</button>
//       console.log("i spend " + self.price); // accesible, o/p is "i spend 100"
//     });
//   },
// };

// const shop = {
//   price: 100,
//   buy: function () {
//     myButton.addEventListener("click", () => {
//       console.log(this); // o/p - {price: 100, buy: ƒ} // acces parent - object - const shop={}
//       console.log("i spend " + this.price); // accesible, o/p is "i spend 100"
//     });
//   },
// };

// shop.buy();

///////////////////////////////////////////// template lierals-aka-backticks

// const fname = "rakesh";
// const lname = "k";
// console.log(fname + " " + lname);
// const msg = `hello ${fname}`;
// const msg = `hello ${5 + 8}`;
// console.log(msg);
// console.log(`${fname} ${lname}`);

// const msg = "hello \n goord morning";
// const msg = `hello
// how are you`;
// console.log(msg);

///////////////////////////// enhanced object literals
// .1.computed property keys
// const keyName = "name";

// const product = {
//   ///this curley braces known as object literals
//   [keyName]: "mobile",
//   price: 100,
// };
//console.log(product); //o/p--{name: 'mobile', price: 100}

// .2.method defenition shorthand
// const product = {
//   buy: function () {
//     console.log("bought");
//   },
// };
// product.buy();
// const product = {
//   buy() {
//     console.log("bought");
//   },
// };
// product.buy();

// .3. property shorthand
// const accessToken = "dsjfhkadhdgfhk";
// const refreshToken = "adddffhboooou";

// const user = {
//   accessToken: accessToken,
//   refreshToken: refreshToken,
// };
// console.log(user); // op- {accessToken: 'dsjfhkadhdgfhk', refreshToken: 'adddffhboooou'}

// or
// const user = {
//   accessToken,
//   refreshToken,
// };
// console.log(user); // op- {accessToken: 'dsjfhkadhdgfhk', refreshToken: 'adddffhboooou'}

//

///////////////////////////----- Destructuring  -----------------/////////////////////////

// const user = {
//   name: "John Doe",
//   age: 30,
// };

// const name = user.name;
// const age = user.age;
//or
// const { name: fullName, age } = user;
// console.log(fullName);
// console.log(age);

//   array
// const data = ["rakesh", 30, "enginner"];
// console.log(data[0]);
// const [name, age, proffesion] = data;
// console.log(name, age, proffesion);

// const [count, setCount] = useState();

//////////////////////////////////////////----------- default parmeters

// const register = (name, password, image = "test.png") => {
//   //   const image = image || "test.png";
//   console.log(name, password, image);
// };

// register("rakesh", "secert");
// register("rakesh", "secert","profile.jpg");

////////////////////////////////////////-------------- spread ...

//array
// const languages = ["c", "c++", "javascript"];
// const newLanguages = ["typescript", ...languages, "java"];
// console.log(newLanguages);

//object
// const setting = {
//   volume: 10,
//   brightness: 80,
// };

// const newSetting = setting;
// newSetting.volume = 90;
// console.log(setting);
//
// const newSetting = { ...setting, volume: 20, j: 7 }; ///shallow copy
// console.log(newSetting);

//////////////////////////-------------------------------------  rest ...
// const addItems = (...items) => {
//   console.log(items); //op- [3,2,4,8,0]
// };
// addItems(3, 2, 4, 8, 0);

//////////////////////// ----------------------------for of loop
// array ,string, object,set ,map

// const numbers = [2, 4, 5, 7];

// for (const num of numbers) {
//   console.log(num); //op - 2 4 5 7      (print in new separate lines)
// }

// const language = "javascript";
// for (const char of language) {
//   console.log(char); //op- j a v a s c r i p t     (print each leter in new separate lines)
// }

// const person = {
//   name: "rakesh",
//   city: "moscow",
//   brand: "apple",
// };
// for (const entries of person) {
//   console.log(entries); // op- Uncaught TypeError: person is not iterable (object)
// }
//
// for (const entries of Object.entries(person)) {
//   console.log(entries);
//   // o/p
//   // ['name', 'rakesh']
//   // ['city', 'moscow']
//   // ['brand', 'apple']
// }
//
// for (const [key, value] of Object.entries(person)) {
//   console.log(key, value);
//   // o/p
//   // name rakesh
//   // city moscow
//   // brand apple
// }
//
//
//
/////////////////////---------  promises
// function login(cb) {
//   setTimeout(() => {
//     console.log("login ...");
//     cb();
//   }, 1000);
// }
// login(() => {
//   //async
//   console.log("redirecting");
// });

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("login");
//       //   resolve();
//       reject("error aadaa");
//     }, 0);
//   });
// }
// login()
//   .then(() => {
//     console.log("redirecting");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/////////////////////////////// ------  find method and filter method
// const users = [
//   {
//     name: "rakesh",
//     mark: 35,
//   },
//   {
//     name: "akhil",
//     mark: 99,
//   },
//   {
//     name: "bhaskar",
//     mark: 58,
//   },
//   {
//     name: "rakesh",
//     mark: 45,
//   },
// ];

// console.log(users.find((user) => user.name === "rakesh"));
// o/p -{name: 'rakesh', mark: 35}
// console.log(users.filter((user) => user.name === "rakesh"));
// o/p -[{name: 'rakesh', mark: 35},{name: 'rakesh', mark: 45},]

/////////////////////------------------------------------------- findIndex method
// console.log(users.findIndex((user) => user.name === "bhaskar")); // o/p- 2 ,if not present -1

//////////////////////------------------------------------------ Set (is an object in js like in maths)
// const uniqueNumbers = new Set();
// uniqueNumbers.add(1);  //also we can pass ("strings")
// uniqueNumbers.add(2);
// uniqueNumbers.add(3);
// uniqueNumbers.add(5);
// uniqueNumbers.add(1);
// console.log(uniqueNumbers);
// o/p - Set(4) {1, 2, 3,5}
// console.log(uniqueNumbers.size); // 4
// console.log(uniqueNumbers.has(5)); // true

// const numbers = [4, 5, 6, 4, 7, 6];
// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers); // op- {4, 5, 6, 7}
// console.log(Array.from(uniqueNumbers)); // op- [4, 5, 6, 7]

//////////////////////////////////////////--------------  Map (hashtables)
const urls = new Map();
urls.set("development", "dev.example.com");
urls.set("production", "prod.example.com");
// console.log(urls); // Map(2) {'development' => 'dev.example.com', 'production' => 'prod.example.com'}
// console.log(urls.get("development")); //dev.example.com
// console.log(urls.size); // 2

// const urlsObj = {
//   development: "dev.example.com",
//   production: "prod.example.com",
// };
// object is not iterable
// console.log(urlsObj.development); //dev.example.com
// console.log(urlsObj.size); //not possible error

//order problem
// size calculation problem

// for (const url of urlsObj) {
//   console.log(url); //Uncaught TypeError: urlsObj is not iterable
// }

// for (const url of urls) {
//   console.log(url);
//   // o/p
//   // (2) ['development', 'dev.example.com']
//   // (2) ['production', 'prod.example.com']
// }
// for (const [key, value] of urls) {
//   console.log(key, value);
//   // o/p
//   //    development dev.example.com
//   //    production prod.example.com
// }

//

/////////////////////////////////-------------  classes
//constructor fn
// function Person(name) {
//   this.name = name;
// }

// const rakesh = new Person("rakesh"); //object creation //these are different objects
// const john = new Person("john"); //object creation
// console.log(rakesh); // Person {name: 'rakesh'}
// console.log(john); // Person {name: 'john'}

// rakesh.name = "coders gyan";
// console.log(rakesh); // Person {name: 'coders gyan'}

// class Person {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   //methods
//   greet() {
//     console.log("good morning");
//   }
// }

// class GreatPerson extends Person {
//   attitude = "cool";
//   greet() {
//     console.log("good evening"); //it wiil called first
//   }
// }
// const rakesh = new Person("rakesh");
// console.log(rakesh); // Person {name: 'rakesh'}
// console.log(rakesh.greet()); // good morning

// const john = new GreatPerson("john");
// console.log(john); //GreatPerson {name: 'john', attitude: 'cool'}
// console.log(john.greet()); //good evening

//

//////////////////////////////////////////----- ES6 Modules
import { libName as mylibname /*login*/ } from "./lib.js";
import myLogin from "./lib.js"; //can assign any names
myLogin();
// login();
// console.log(libName); //accessible
console.log(mylibname); //accessible
// console.log(fileName); // not accessible
