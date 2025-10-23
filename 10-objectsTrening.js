// Zadaci o objektima
// 1. Kreiranje objekta
// Napravi objekt person koji ima svojstva:
// firstName
// lastName
// age
// Zatim ispiši u konzolu rečenicu:
// "Moje ime je [firstName] [lastName] i imam [age] godina."

const person = {
  firstName: "Dario",
  lastName: "Milanovic",
  age: 33,
};

console.log(
  `Moje ime je ${person.firstName} ${person.lastName} i imam ${person.age} godina.`
);

// 2. Promjena vrijednosti
// Na objektu person promijeni age na 30 i ponovo ispiši cijeli objekt u konzolu.

person.age = 30;
console.log(person);

// 3. Dodavanje novog svojstva
// Dodaj svojstvo city u objekt person i postavi mu vrijednost "Zagreb".

person.city = "Zagreb";
console.log(person);

// 4. Metoda unutar objekta
// Dodaj u objekt person metodu greet() koja ispisuje poruku:
// "Zdravo, ja sam [firstName] i živim u [city]."
// Pomoć: koristi this.firstName i this.city.

person.greet = function () {
  console.log(`Zdravo, ja sam ${this.firstName} i zivim u ${this.city}`);
};

person.greet();

// 5. Kopiranje objekta
// Napravi funkciju copyObject(obj) koja ručno pravi kopiju (kao što smo ranije radili).
// Zatim:
// kopiraj person u personCopy
// promijeni firstName u "Nikola"
// ispiši oba objekta da vidiš razliku.

function copyObject(obj) {
  const newObj = {};

  const listOfProperty = Object.keys(obj);

  for (let i = 0; i < listOfProperty.length; i++) {
    currentProperty = listOfProperty[i];

    newObj[currentProperty] = obj[currentProperty];
  }
  return newObj;
}

const personCopy = copyObject(person);
personCopy.firstName = "Nikola";

console.log(person);
console.log(personCopy);

// 6. Niz objekata
// Napravi niz people koji sadrži tri osobe, svaka sadrži firstName, age i city.
// Zatim petljom for ispiši imena svih ljudi iz niza.

const people = [
  {
    firstName: "Dario",
    lastName: "Milanovic",
    age: "33",
  },
  {
    firstName: "Marija",
    lastName: "MIlanovic",
    age: "28",
  },
  {
    firstName: "Elena",
    lastName: "Milanovic",
    age: "3",
  },
];

for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].firstName} ima ${people[i].age} godine.`);
}
