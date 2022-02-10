// class inheritance in oops js

class employee {
  constructor(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
    console.log("constructor : employee " + name);
  }

  info() {
    document.write(`<h1>Employee Class</h1>
    Name: ${this.empName}<br/>
    age: ${this.empAge}<br/>
    salary: ${this.empSalary}`);
  }
}

// let a = new employee();

class manager extends employee {
  constructor(name, age, salary) {
    super(name, age, salary);
    console.log("constructor : manager " + name);
  }

  info() {
    console.log("Manager Name : " + this.empName);
    super.info();
  }
}

let b = new manager("dasappan", 25, 25000);
b.info();
