// Write a program that has a variable called age.
// If age is 18 or older, print to the console:
// "You are an adult."
// “Otherwise, log to the console: 'You are a minor.'”

let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

console.log(age);

// Write a function add(a, b) that takes two numbers and returns their sum.
// Then display the result using console.log.

function sum(a, b) {
  return a + b;
}

console.log(sum(4, 6));

// Create a function greet(name, age) that displays the message:
// "Hello [name], you are [age] years old!"

function greet(name, age1) {
  return `Hello ${name}, you are ${age1} years old!`;
}

console.log(greet("Ana", 22));

// Write a function checkNumber(number) that returns:
// 'Even' if the number is even
// 'Odd' if the number is odd
function checkNum(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkNum(6));

// Using the ternary operator, create a variable message that checks:
// If the temperature is greater than 25 → "It’s hot"
// If not → "It’s not hot"

function temp(a) {
  return a > 25 ? "It´s hot!" : "It´s not hot!";
}

console.log(temp(13));
