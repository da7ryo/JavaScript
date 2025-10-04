// Zadatak 1
// Napiši funkciju square(num) koja vraća kvadrat broja pomoću return.

function square(num) {
  const res = num * num;
  return res;
}

console.log(square(8));

// Zadatak 2
// Napiši funkciju isEven(num) koja vraća true ako je broj paran, a false ako nije.

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(7));

// Zadatak 3
// Napiši funkciju max(a, b) koja vraća veći od dva broja.

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(13, 5));
console.log(max(4, 8));

// Kraca verzija

function max1(a, b) {
  return a > b ? a : b;
}

console.log(max1(4, 10));

// Zadatak 4
// Napiši funkciju min(a, b, c) koja prima tri broja i vraća najmanji od njih.

function min(a, b, c) {
  if (a < b && a < c) {
    return a;
  }
  if (b < a && b < c) {
    return b;
  }
  if (c < a && c < b) {
    return c;
  }
}

console.log(min(4, 1, 6));

// Zadatak 5
// Kalkulator sa više operacija
// Napiši funkciju calculator(a, b, operation) koja:
// prima dva broja a i b
// prima string operation koji može biti: "add", "sub", "mult", "div"
// vraća rezultat odgovarajuće operacije
// ako je "div" i b je 0, vraća "Greška: dijeljenje s nulom"
// ako je nepoznata operacija, vraća "Nepoznata operacija"

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
      return "Dividing with zero";
    }
    return a / b;
  }
  if (
    operation !== "add" ||
    operation !== "sub" ||
    operation !== "mult" ||
    operation !== "div"
  ) {
    return "Unknown operation";
  }
}

console.log(calculator(4, 0, "sdf"));
