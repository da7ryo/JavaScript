// 1. If/Else
// Napiši program koji provjerava da li je broj num pozitivan, negativan ili nula i ispisuje odgovarajuću poruku.

const num = 0;
if (num > 0) {
  console.log("The number is postive");
} else if (num === 0) {
  console.log("The number is null");
} else {
  console.log("The number is negative");
}

// 2. Ternarni operator
// Isti zadatak kao 1, ali koristi ternarni operator za ispis poruke.

let num1 = 2;
console.log(
  num1 > 0
    ? "The number is postive"
    : num1 < 0
    ? "The number is negative"
    : "The number is zero"
);

// 3. Funkcija sa parametrima
// Napiši funkciju koja vraća poruku:
// Ako je age >= 18 → "Zdravo [name], punoljetan si!"
// Ako je age < 18 → "Zdravo [name], maloljetan si!"
// Pozovi funkciju sa svojim imenom i godinama.

let age = 20;
let name = "Marko";

function greetUser(age, name) {
  if (age >= 18) return "Zdravo", name + " " + "punoljetan si";
  else {
    return "Zdravo", name + " " + "maloljetan si";
  }
}

console.log(greetUser(19, "Ana"));
