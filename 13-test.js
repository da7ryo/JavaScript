function checkAge(age) {
  if (age >= 18) {
    return "Punoljetan";
  } else {
    return "Maloljetan";
  }
}

console.log(checkAge(77));

function checkAge2(age) {
  return age >= 18 ? "Punoljetan" : "Maloljetan";
}

console.log(checkAge2(11));

function greetUser(name, age) {
  if (checkAge(age) === "Punoljetan") {
    return `Hello ${name} you are adult`;
  } else {
    return `Hello ${name}, you are too young`;
  }
}

console.log(greetUser("Dario", 18));

function sum(a, b) {
  return "Zbroj brojeva je " + (a + b);
}

console.log(sum(4, 6));

function countPositive(numbers) {
  const positiveNum = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    if (currentNum > 0) {
      positiveNum.push(currentNum);
    }
  }
  return positiveNum;
}

numbers = [2, 0, -4, 44, 10];
console.log(countPositive(numbers));

function squareNumbers(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum1 = arr[i];
    let squareNum = currentNum1 ** 2;
    newArr.push(squareNum);
  }
  return newArr;
}

console.log(squareNumbers(numbers));

function filterLongNames(arr) {
  const LongNames = [];
  for (let i = 0; i < arr.length; i++) {
    currentName = arr[i];
    if (currentName.length > 4) {
      LongNames.push(currentName);
    }
  }
  return LongNames;
}

const Names = ["Mirjana", "Ana", "Elena", "Tin", "Luka", "Marija"];
console.log(filterLongNames(Names));

const people = [
  { firstName: "Dario", age: 33, city: "Mostar" },
  { firstName: "Ana", age: 25, city: "Zagreb" },
  { firstName: "Marko", age: 19, city: "Mostar" },
  { firstName: "Petra", age: 17, city: "Dubrovnik" },
];

function filterByCity(arr, cityName) {
  const sameCity = [];
  for (let i = 0; i < arr.length; i++) {
    let currentPerson = arr[i];
    if (currentPerson.city === cityName) {
      sameCity.push(currentPerson.firstName);
    }
  }
  return sameCity;
}

console.log(filterByCity(people, "Mostar"));

const friends = [
  { firstName: "Ana", age: 22 },
  { firstName: "Marko", age: 17 },
  { firstName: "Ivana", age: 30 },
];

function addGreeting(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].sayHi = function () {
      if (this.age >= 18) {
        console.log(`Zdravo, ja sam ${this.firstName} i punoljetan sam`);
      } else {
        console.log(`Zdravo, ja sam ${this.firstName} i maloljetan sam`);
      }
    };
  }
}
addGreeting(friends);
friends[0].sayHi();

for (let i = 0; i < friends.length; i++) {
  friends[i].sayHi();
}

const students = [
  { name: "Ana", score: 88 },
  { name: "Marko", score: 42 },
  { name: "Ivana", score: 75 },
  { name: "Luka", score: 59 },
];

function evaluateStudents(students) {
  const newObj = [];
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    if (currentStudent.score >= 80) {
      currentStudent.grade = "odlican";
    } else if (currentStudent.score >= 60) {
      currentStudent.grade = "dobar";
    } else {
      currentStudent.grade = "nedovoljan";
    }
    currentStudent.describe = function () {
      console.log(`Moje ime je ${this.name}, ocjena je ${this.grade} `);
    };
    newObj.push(currentStudent);
  }
  return newObj;
}
evaluateStudents(students);
const evaluated = evaluateStudents(students);
evaluated[0].describe();
evaluated[1].describe();
evaluated[2].describe();
evaluated[3].describe();
