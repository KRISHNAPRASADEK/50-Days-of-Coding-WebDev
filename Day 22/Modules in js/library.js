// modules
let message = "message from library";

function user(name) {
  console.log("hello " + name);
}

class test {
  constructor() {
    console.log("constructor test");
  }
}

export { message, user, test };

export default function () {
  console.log("default exp");
}
