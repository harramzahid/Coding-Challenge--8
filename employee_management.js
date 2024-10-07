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
// Task 3 Create a Manager Class that Inherits from Employee
// here we will use the "super" constructor to inherit properties from the parent class

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); 
        this.bonus = bonus;
    }
    getDetails() { 
        console.log(`Employee name ${this.name} works as ${this.position} in the ${this.department} department, earning $${this.salary} annually and recieves a bonus of $${this.bonus}.`);
    }
}
// Task 4 Handle Bonuses for Managers
Department.prototype.calculateTotalSalaryWithBonus = function() { 
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) { 
            return total + employee.salary + employee.bonus;
        } else {
        return total + employee.salary; 
    }}, ); 
};


// Task 5 Create and Manage Departments and Employees
// Create departments

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

//Create employees

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments

engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);