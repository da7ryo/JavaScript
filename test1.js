// Task 1 – Number Check

// Write a function checkNumber(num) that returns:
// "Positive" if the number is greater than 0
// "Negative" if the number is less than 0
// "Zero" if the number is 0
// Try to solve it using if / else and return.

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  }
  if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(0));
console.log(checkNumber(4));
console.log(checkNumber(-6));

// Task 2 – Odd Number Check

// Write a function isOdd(num) that returns:
// true if the number is odd
// false if the number is even

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(5));
console.log(isOdd(10));

// Task 3 – Max of Three Numbers

// Write a function maxOfThree(a, b, c) that returns the largest of three numbers.

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(5, 10, 19));
console.log(maxOfThree(21, 2, 14));
console.log(maxOfThree(1, 18, 6));

// Task 4 – Minimum of Three Numbers

// Write a function minOfThree(a, b, c) that returns the smallest of three numbers.

function minOfThree(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  }
  if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

console.log(minOfThree(2, 8, 0));
console.log(minOfThree(78, 44, 100));
console.log(minOfThree(4, 8, 22));

// Task 5 – Simple Calculator

//Write a function calculator(a, b, operation) that:

// Takes two numbers a and b
// Takes a string operation that can be: "add", "sub", "mult", "div"
// Returns the result of the operation
// If operation is "div" and b is 0, return "Error: division by zero"
// If the operation is unknown, return "Unknown operation"

function calculator(a, b, operation) {
  if (operation === "add") {
    return a + b;
  }
  if (operation === "sub") {
    return a - b;
  }
  if (operation === "mult") {
    return a * b;
  }
  if (operation === "div") {
    if (b === 0) {
      return "Error: divison by zero";
    }
    return a / b;
  }
  if (
    operation !== "add" &&
    operation !== "sub" &&
    operation !== "mult" &&
    operation !== "div"
  ) {
    return "Unknown operation";
  }
}

console.log(calculator(4, 9, "add"));
console.log(calculator(4, 9, "sub"));
console.log(calculator(4, 9, "mult"));
console.log(calculator(4, 9, "div"));
console.log(calculator(4, 0, "div"));
console.log(calculator(4, 9, "ss"));

// Task 6 – Grade Checker

//Write a function gradeChecker(score) that returns:

// "A" if score is 90 or above
// "B" if score is 80–89
// "C" if score is 70–79
// "D" if score is 60–69
// "F" if score is below 60

function gradeChecker(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80 && score <= 89) {
    return "B";
  }
  if (score >= 70 && score <= 79) {
    return "C";
  }
  if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeChecker(55));
console.log(gradeChecker(95));
console.log(gradeChecker(80));
console.log(gradeChecker(74));
console.log(gradeChecker(64));

function gradeChecker(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeChecker(55));
console.log(gradeChecker(95));
console.log(gradeChecker(80));
console.log(gradeChecker(74));
console.log(gradeChecker(64));

// Task 7 – Simple Age Classifier

//Write a function ageClassifier(age) that returns:

// "Child" if age is 0–12
// "Teen" if age is 13–19
// "Adult" if age is 20–64
// "Senior" if age is 65 or above
// "Invalid age" if age is negative

function ageClassifier(age) {
  if (age >= 0 && age <= 12) {
    return "Child";
  } else if (age >= 13 && age <= 19) {
    return "Teen";
  } else if (age >= 20 && age <= 64) {
    return "Adult";
  } else if (age >= 65) {
    return "Senior";
  } else {
    return "Invalid age";
  }
}

console.log(ageClassifier(45));
console.log(ageClassifier(80));
console.log(ageClassifier(3));
console.log(ageClassifier(16));
console.log(ageClassifier(-5));
