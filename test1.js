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
