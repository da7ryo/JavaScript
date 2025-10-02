const num1 = 13;
let num2 = 9;

console.log(num1 + num2);

num2++;
console.log(num2);

num2 = num2 * 3;
console.log(num2);
console.log(num2 / num1);

const num3 = num2 / num1;
console.log(num3);
if (num3 <= 2) {
  console.log("Don't accept offer");
} else {
  console.log("Accept offer");
}
