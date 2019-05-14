function Person(age?: number, weight?: number) {
  this.age = age;
  this.weight = weight;
}

Person.prototype.getInfo = function() {
  return "I am " + this.age + " years old and weighs " + this.weight + " kilo.";
};

function Employee(age?: number, weight?: number, salary?: number) {
  this.age = age;
  this.weight = weight;
  this.salary = salary;
}

Employee.prototype = new Person();

Employee.prototype.getInfo = function() {
  return (
    "I am " +
    this.age +
    " years old and weighs " +
    this.weight +
    " kilo and earns " +
    this.salary +
    " dollars."
  );
};

var person = new Person(50, 90);
var employee = new Employee(43, 80, 50000);

console.log(person.getInfo());
console.log(employee.getInfo());
