// Calculator

function math(a, b, op) {
  if (op === "add") {
    return a + b;
  }
  if (op === "sub") {
    return a - b;
  }
  if (op === "mult") {
    return a * b;
  }
  if (op === "div") {
    return a / b;
  }
}

console.log(math(10, 5, "div"));
