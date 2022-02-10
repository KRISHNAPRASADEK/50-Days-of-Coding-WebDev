class employee {
  constructor(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
    console.log("constructor : employee");
  }

  info() {
    document.write(`<h3>Employee class</h3>
      name: ${this.empName}<br/>
      age: ${this.empAge}<br/>
      salary: ${this.empSalary}`);
  }
}

class manager extends employee {
  info() {
    let ta = 1000;
    let pa = 300;
    let totalSalary = this.empSalary + ta + pa;
    document.write(`<h3>Manager class</h3>
      name: ${this.empName}<br/>
      age: ${this.empAge}<br/>
      salary: ${totalSalary}`);
  }
}

class test extends manager {} //multilevel inheritance

let a = new test("krishna", 24, 20000);
// let b = new employee("ram", 22, 10000);
a.info();
// b.info();
