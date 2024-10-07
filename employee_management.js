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
// Task 2 Create a Department Class
// we are adding another class called department 
class Department {
    constructor(name,employees) {
        this.name = name;
        this.employees = [];
    }
            addEmployee(employee) {
                this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) =>
             total + employee.salary); 
    }
}
