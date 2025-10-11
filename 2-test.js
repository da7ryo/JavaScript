// Napiši program koji ima varijablu age.
// Ako je age 18 ili više, ispiši u konzolu:
// "Punoljetan si."
// Inače ispiši: "Maloljetan si."

let age = 15;

if (age >= 18) {
  console.log("Punoljetan");
} else {
  console.log("Maloljetan");
}

console.log(age);

// Napiši funkciju saberi(a, b) koja prima dva broja i vraća njihov zbroj.
// Zatim rezultat ispiši pomoću console.log.

function sum(a, b) {
  return a + b;
}

console.log(sum(4, 6));

// Napraviti funkciju pozdrav(ime, godine) koja ispisuje poruku:
// "Zdravo [ime], imaš [godine] godina!"

function greet(name, age1) {
  return `Zdravo ${name}, imas ${age1} godina.`;
}

console.log(greet("Ana", 22));

// Napiši funkciju provjeriBroj(broj) koja vraća:
// 'Paran' ako je broj paran
// 'Neparan' ako je broj neparan

function checkNum(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkNum(6));

// Pomoću ternarnog operatora napravi varijablu poruka koja provjerava:
// Ako je temperatura veća od 25 → "Vruće je"
// Ako nije → "Nije vruće"

function temp(a) {
  return a > 25 ? "It´s hot!" : "It´s not hot!";
}

console.log(temp(13));
