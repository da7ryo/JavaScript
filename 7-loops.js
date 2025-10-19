// **** FOR PETLJE ****

// Zadatak 1 — Ispis brojeva od 1 do 10
// Napiši for petlju koja u konzoli ispisuje brojeve od 1 do 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Zadatak 2 — Samo parni brojevi
// Pomoću for petlje ispiši samo parne brojeve od 1 do 20.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Zadatak 3 — Saberi brojeve od 1 do 5
// Napiši petlju koja sabira sve brojeve od 1 do 5 i ispisuje rezultat (treba biti 15).

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
  console.log(sum);
}

// Zadatak 4 — Imena prijatelja

//Imaš niz:

const friends = ["Dario", "Mateo", "Nikola", "Ivan"];

// Napravi for petlju koja će ispisati svako ime iz niza.

for (let i = 0; i <= friends.length - 1; i++) {
  console.log(friends[i]);
}

// Zadatak 5 — Obrni redoslijed
// Pomoću for petlje ispiši imena prijatelja unazad (od posljednjeg prema prvom).

for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}

// **** WHILE PETLJE ****

// Zadatak 1 — Brojevi od 1 do 10
// Napiši while petlju koja u konzoli ispisuje brojeve od 1 do 10.

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Zadatak 2 — Sabiranje brojeva
// Koristeći while petlju, saberi sve brojeve od 1 do 5 i ispiši zbir.

let sum1 = 0;
let i1 = 1;
while (i1 <= 5) {
  console.log(i1);
  sum1 += i1;
  i1++;
  console.log("Result is:", sum1);
}

// Zadatak 3 — Brojevi sve dok zbir ne prijeđe 20
// Počni sa sum = 0
// Svaki put dodaj i (počni od 1) dok zbir ne prijeđe 20
// Ispisi svaki dodani broj i konačni zbir

let sum2 = 0;
let i2 = 1;
while (i2 <= 20) {
  console.log(i2);
  sum2 += i2;
  i2++;
}

// Saberi samo parne brojeve od 1 do 20 pomoću while petlje.

let sum3 = 0;
let i3 = 1;

while (i3 <= 20) {
  if (i3 % 2 === 0) {
    console.log(i3);
    sum3 += i3;
  }
  i3++;
}

console.log("Zbir parnih brojeva od 1 do 20 je:", sum3);

// Pomoću while petlje: ispiši sve neparne brojeve od 1 do 20,
// izračunaj njihov zbir, i na kraju ispiši zbir u konzoli.

let sum4 = 0;
let i4 = 1;
while (i4 <= 20) {
  if (i4 % 2 !== 0) {
    console.log(i4);
    sum4 += i4;
  }
  i4++;
}
console.log("Zbir neparnih brojeva od 1 do 20 je:", sum4);

// Pomoću while petlje ispiši svakog prijatelja posebno u konzoli.

const friends2 = ["Dario", "Marko", "Ana", "Ivana"];
let f2 = 0;
while (f2 <= friends2.length - 1) {
  console.log(friends2[f2]);
  f2++;
}

// Pokušaj napraviti varijantu koja ispisuje:
// “Prijatelj broj 1 je Dario”,
// “Prijatelj broj 2 je Marko”

let f3 = 0;
while (f3 < friends2.length) {
  console.log(`Prijatelj broj ${f3 + 1} je ${friends2[f3]}`);
  f3++;
}
