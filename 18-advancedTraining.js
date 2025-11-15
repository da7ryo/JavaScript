const employees = [
  { name: "Ana", salary: 1200, department: "IT" },
  { name: "Marko", salary: 800, department: "HR" },
  { name: "Ivana", salary: 1500, department: "IT" },
  { name: "Luka", salary: 700, department: "Sales" },
];

function processEmployees(employees, callbacks) {
  for (let i = 0; i < employees.length; i++) {
    const employer = employees[i];
    for (let j = 0; j < callbacks.length; j++) {
      callbacks[j](employer);
    }
  }
}

function giveBonus(employee) {
  if (employee.department === "IT") {
    employee.bonus = 200;
  } else {
    employee.bonus = 0;
  }
}

function promote(employee) {
  if (employee.salary + employee.bonus >= 1500) {
    employee.position = "Senior";
  } else {
    employee.position = "Junior";
  }
}

function announce(employee) {
  let totalSalary = employee.salary + employee.bonus;

  console.log(
    `Employee ${employee.name} has a total salary of ${totalSalary} and position ${employee.position}`
  );
}

processEmployees(employees, [giveBonus, promote, announce]);
console.log(employees);
