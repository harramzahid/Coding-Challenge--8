// Task 1 Create an Employee Class
// we create the class "employees"
class Employee {
    constructor(name, salary, position, department) {
       this.name = name;
       this.salary = salary;
       this.position = position;
       this.department = department;
   }
   getDetails() {
       console.log(`${this.name} holds a ${this.position} position in the ${this.department} department, earning $${this.salary} annually.`);
   }
}