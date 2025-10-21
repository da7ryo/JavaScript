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

// 4. Sabiranje funkcijom
// Napiši funkciju sumNumbers(a, b) koja vraća zbir dva broja.
// Pozovi je sa nekoliko različitih vrijednosti i ispiši rezultate.

function sumNumbers(a, b) {
  return a + b;
}
console.log(sumNumbers(1, 54));
console.log(sumNumbers(8, 99));

// 5. Tipovi podataka i konverzija
// Imamo:
// // let a = "5";
// let b = 10;
// Saberi ih tako da rezultat bude broj
// Pretvori broj u string i spoji sa " je rezultat"

let a = 5;
let b = 10;
console.log(a + b);
console.log(a + b + " je rezultat");

// 6. Niz i pristup elementima
// Imamo niz:
// const fruits = ["jabuka", "banana", "kruška", "narandža"];
// Ispiši prvi i posljednji element
//Dodaj "grožđe" na kraj niza
//Ispiši novi niz

const fruits = ["jabuka", "banana", "kruska", "narandza"];
console.log([fruits[0], fruits[fruits.length - 1]]);
fruits.push("grozde");
console.log(fruits);

// 7. For petlja
// Napiši for petlju koja ispisuje sve parne brojeve od 2 do 20.

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 8. While petlja
// Napiši while petlju koja sabira sve brojeve od 1 do 10 i ispisuje zbir na kraju.

let i2 = 1;
let sum2 = 0;
while (i2 <= 10) {
  console.log(i2);
  sum2 += i2;
  i2++;
}
console.log(sum2);

// 9. Logički operatori
//Imamo varijable:
//let isAdult = true;
//let hasTicket = false;
//Ispiši "Može ući" ako je osoba punoljetna i ima kartu
//Ispiši "Ne može ući" u svim ostalim slučajevima

let isAdult = true;
let hasTicket = false;

if (isAdult && hasTicket) {
  console.log("Moze uci");
} else {
  console.log("Ne moze uci");
}
