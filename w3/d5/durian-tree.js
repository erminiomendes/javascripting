class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  //function that returns the number of subordinates an employee has.
  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  //return the number of people in between an employee and the CEO.
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  //function that returns true if two employees share the same boss and false otherwise.
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  //method to find every single employee under Ada, that makes over $418,401 a year

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
      console.log(employees);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }
  //count the total number of employees under a certain employee, including that employee
  get totalEmployees() {

    let totalEmployees = 0; // 1

    // Use depth first traversal to calculate the total employees

    return totalEmployees;

  }

  

}


const ada      = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);
const simone   = new Employee("Simone", "", 70000);
const ali      = new Employee("Ali", "", 100000);
const florida  = new Employee("Florida", "", 100000);
const david    = new Employee("David", "", 100000);
const brian    = new Employee("Brian", "", 100000);
const carla    = new Employee("Carla", "", 100000);



ada.addSubordinate(angela);
ada.addSubordinate(phil);
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
craig.addSubordinate(simone);
craig.addSubordinate(ali);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);
angela.addSubordinate(carla);

//console.log(craig.boss);
//console.log(craig.numberOfSubordinates);
let wealthyEmployees = ada.employeesThatMakeOver(418401);
//console.log(wealthyEmployees);