// **** FOR LOOPS ****

// Task 1 — Display numbers from 1 to 10
// Write a for loop that displays the numbers from 1 to 10 in the console.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2 — Even numbers only
// Using a for loop, display only the even numbers from 1 to 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task 3 — Add the numbers from 1 to 5
// Write a loop that adds all the numbers from 1 to 5 and displays the result (it should be 15).

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
  console.log(sum);
}

// Task 4 — Friends' names

//You have an array:

const friends = ["Dario", "Mateo", "Nikola", "Ivan"];

// Write a for loop that will display each name from the array.

for (let i = 0; i <= friends.length - 1; i++) {
  console.log(friends[i]);
}

// Task 5 — Reverse the order
// Using a for loop, display the friends’ names in reverse order (from last to first).

for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}

// **** WHILE LOOPS ****

// Task 1 — Numbers from 1 to 10
// Write a while loop that displays the numbers from 1 to 10 in the console:

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Task 2 — Adding numbers
// Using a while loop, add all the numbers from 1 to 5 and display the sum:

let sum1 = 0;
let i1 = 1;
while (i1 <= 5) {
  console.log(i1);
  sum1 += i1;
  i1++;
  console.log("Result is:", sum1);
}

// Task 3 — Numbers until the sum exceeds 20
// Start with sum = 0
// Each time add i (starting from 1) until the sum exceeds 20
// Display each added number and the final sum
let sum2 = 0;
let i2 = 1;
while (i2 <= 20) {
  console.log(i2);
  sum2 += i2;
  i2++;
}

// Add only the even numbers from 1 to 20 using a while loop:
let sum3 = 0;
let i3 = 1;

while (i3 <= 20) {
  if (i3 % 2 === 0) {
    console.log(i3);
    sum3 += i3;
  }
  i3++;
}

console.log("The sum of even numbers from 1 to 20 is:", sum3);

// Using a while loop: display all odd numbers from 1 to 20,
// calculate their sum, and finally display the sum in the console.
let sum4 = 0;
let i4 = 1;
while (i4 <= 20) {
  if (i4 % 2 !== 0) {
    console.log(i4);
    sum4 += i4;
  }
  i4++;
}
console.log("The sum of odd numbers from 1 to 20 is:", sum4);

// Using a while loop, display each friend individually in the console.

const friends2 = ["Dario", "Marko", "Ana", "Ivana"];
let f2 = 0;
while (f2 <= friends2.length - 1) {
  console.log(friends2[f2]);
  f2++;
}

// Try to make a version that displays:
// "Friend number 1 is Dario"
// "Friend number 2 is Marko"

let f3 = 0;
while (f3 < friends2.length) {
  console.log(`Friend number ${f3 + 1} is ${friends2[f3]}`);
  f3++;
}
