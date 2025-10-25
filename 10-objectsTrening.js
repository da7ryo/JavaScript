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
    city: "Zagreb",
  },
  {
    firstName: "Marija",
    lastName: "MIlanovic",
    age: "28",
    city: "Mostar",
  },
  {
    firstName: "Elena",
    lastName: "Milanovic",
    age: "3",
    city: "Beograd",
  },
];

for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].firstName} ima ${people[i].age} godine.`);
}

// 7. Filtriranje po uslovu
// Napraviti funkciju filterAdults(arr) koja prima niz ljudi (iz zadatka 6) i vraća novi niz samo onih koji su stariji od 18.

function filterAdults(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentPerson = arr[i];
    if (currentPerson.age >= 18) {
      newArr.push(currentPerson);
    }
  }
  return newArr;
}

console.log(filterAdults(people));

// 8. Dodavanje metode svakom objektu u nizu
// Dodaj svakoj osobi u nizu people metodu introduce() koja ispisuje:
// "Zdravo, ja sam [firstName] i imam [age] godina."
// Zatim pozovi metodu za svaku osobu.

for (let i = 0; i < people.length; i++) {
  const currentPerson = people[i];
  currentPerson.introduce = function () {
    console.log(`Zdravo, ja sam ${this.firstName} i imam ${this.age} godina`);
  };
}

people[0].introduce();
people[1].introduce();
people[2].introduce();

// Zadatak 9 — Usporedba objekata
// Cilj: napraviti funkciju koja uspoređuje da li dva objekta imaju ista svojstva i iste vrijednosti.
// Kako to funkcionira:
// Prvo uzmemo sve ključeve (imena svojstava) iz oba objekta.
// Ako imaju različit broj ključeva — odmah znamo da nisu isti.
// Ako broj ključeva odgovara, prolazimo kroz svaki ključ i provjeravamo da li su vrijednosti jednake.
// Ako sve odgovara → vraćamo true, inače false.
// Kod:

function areSame(objA, objB) {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

// Primjer
const person1 = { name: "Ana", age: 20 };
const person2 = { name: "Ana", age: 20 };
const person3 = { name: "Marko", age: 20 };

console.log(areSame(person1, person2)); // true
console.log(areSame(person1, person3)); // false

// Zadatak 10 — Kombinacija svega
// // Cilj: napraviti funkciju koja kreira osobu (objekt) s imenom, prezimenom, godinama i gradom,
// i dodaje metodu sayHi() koja ispisuje poruku.
// Kod:

function createPerson(firstName, lastName, age, city) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    city: city,
    sayHi: function () {
      console.log(`Zdravo, ja sam ${this.firstName} iz ${this.city}.`);
    },
  };
  return person;
}

// Kreiramo tri osobe
const p1 = createPerson("Dario", "Milanović", 33, "Graz");
const p2 = createPerson("Marija", "Kovač", 28, "Zagreb");
const p3 = createPerson("Ana", "Horvat", 22, "Split");

// Pozivamo metodu za svaku osobu
p1.sayHi();
p2.sayHi();
p3.sayHi();

// Zadatak 11: Obrada liste brojeva pomoću callback funkcija
// Napiši funkciju processNumbers(numbers, operation) koja:
// prima niz brojeva i callback funkciju (operation),
// prolazi kroz sve brojeve u nizu pomoću petlje,
// za svaki broj poziva funkciju operation i dodaje rezultat u novi niz,
// vraća taj novi niz.
// To znači da će processNumbers biti higher-order function,
// a operation će biti callback function.

function processNumbers(numbers, operation) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    results.push(operation(numbers[i]));
  }
  return results;
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const numbers = [44, 18, 36, 78];

console.log(processNumbers(numbers, square));
