function Student(first, last, age, cls) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.class = cls;

  //   this.nationality = "Indian";
}

Student.prototype.nationality = "Indian";

Student.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

var student1 = new Student("krishna", "prasad", 25, 5);
var student2 = new Student("abhi", "kumar", 26, 5);

console.log(student2.name());
