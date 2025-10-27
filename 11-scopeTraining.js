// Zadatak 1 — Globalni scope
// Napiši program koji:
// Ima dvije globalne varijable firstName i lastName.
// Funkcija showName() ispisuje „Moje ime je [firstName] [lastName]“.
// Pozovi funkciju i ispiši poruku.
// Pitanje:
// Da li funkcija vidi globalne varijable bez da ih šalješ kao argumente?

const firstName = "Dario";
const lastName = "Milanovic";

function showName() {
  console.log(`${firstName} ${lastName}`);
}

showName();

// Zadatak 2 — Lokalni scope
// Napravi funkciju showCity().
// U njoj definiši varijablu city = "Zagreb".
// Ispiši city unutar funkcije i pokušaj ispisati van funkcije.
// Pitanje:
// Šta se dogodi kad pokušaš ispisati city izvan funkcije?

function showCity() {
  const city = "Beograd";
  console.log(city);
}
showCity();

// Zadatak 3 — Block scope
// Deklariši varijablu country = "Hrvatska".
// Unutar if (true) bloka, napravi const city = "Split" i ispiši oboje.
// Nakon bloka pokušaj ispisati city.
// Pitanje:
//Zašto country radi svugdje, a city ne?

const country = "Hrvatska";
const isCoastal = true;

if (isCoastal) {
  const city = "Split";
  console.log(`${city}, ${country}`);
}

// Objašnjenje:
// country je globalna varijabla (možeš je koristiti svugdje).
// city je lokalna varijabla — postoji samo unutar if bloka.
// Kada se ispuni uslov (isCoastal === true), JavaScript uđe u blok i ispiše "Split, Hrvatska".

// Zadatak 4 — Imena unutar imena
// Napravi funkciju outer() koja ima varijablu greeting = "Pozdrav".
// Unutar nje napravi funkciju inner() koja koristi greeting i ispisuje ga.
// Pozovi outer().
// Pitanje:
// Kako inner() vidi greeting iako nije definirana u njoj?

function outer() {
  const greeting = "Pozdrav";
  function inner() {
    console.log(greeting);
  }
  inner(); // pozivamo unutrašnju funkciju
}

outer(); // pokrećemo vanjsku funkciju

// Šta se ovdje događa:
// Kada pozoveš outer(), JavaScript napravi varijablu greeting i funkciju inner().
// Zatim inner() ima pristup varijabli greeting jer se nalazi unutar iste funkcije (unutarnji scope ima pristup vanjskom).
// inner() ispisuje "Pozdrav".
// Ako ne bi pozvao inner(), ništa se ne bi dogodilo — jer definiranje funkcije ne znači i njezino izvođenje.

// Zadatak 5 — Kombinacija

// Definiši globalnu varijablu language = "JavaScript".
// Napravi funkciju learn() koja ima lokalnu varijablu level = "beginner".
// Unutar learn(), napravi još jednu funkciju progress() koja:
// koristi i language i level,
// ispisuje:
// "Učim JavaScript, trenutno sam beginner nivo."
// Pozovi learn() i pogledaj rezultat.
// Pitanje:
// Koje varijable progress() vidi i odakle dolaze?

const language = "JavaScript";
function learn() {
  const level = "beginner";
  function progress() {
    console.log(`Ucim ${language}, trenutno sam ${level}`);
  }
  progress();
}

learn();
