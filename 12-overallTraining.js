// Zadatak 1: Osnove funkcija i if/else
// Napiši funkciju checkNumber(num) koja:
// prima jedan broj num
// ako je broj veći od nule → ispiše "Broj je pozitivan"
// ako je manji od nule → ispiše "Broj je negativan"
//ako je jednak nuli → ispiše "Broj je nula"

function checkNumber(num) {
  if (num > 0) {
    console.log(`The number ${num} is positive.`);
  } else if (num === 0) {
    console.log(`The number ${num} is null.`);
  } else {
    console.log(`The number ${num} is negative.`);
  }
}

checkNumber(5);
checkNumber(-8);
checkNumber(0);

// Zadatak 2: Petlja + funkcija
// Napiši funkciju sumEvenNumbers(limit) koja:
// prima broj limit
// koristi for ili while petlju da pronađe sve parne brojeve od 1 do limit
// vraća zbir svih parnih brojeva

function sumEvenNumbers(limit) {
  let sumEven = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      sumEven = sumEven + i;
    }
  }
  return sumEven;
}

console.log(sumEvenNumbers(20));

// Zadatak 3: Rad s nizovima (arrays)
// Napiši funkciju getLongNames(arr) koja:
// prima niz imena (npr. ["Ana", "Dario", "Marina", "Ivo"])
//vraća novi niz koji sadrži samo imena duža od 4 slova

let friends = ["Ana", "Dario", "Marina", "Ivo"];
function getLongNames(arr) {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    let currentName = arr[i];
    if (currentName.length > 4) {
      newArr.push(currentName);
    }
  }
  return newArr;
}

console.log(getLongNames(friends));

// Zadatak 4 – Kreiranje i filtriranje osoba
// Napravi funkciju getAdults(people) koja prima niz objekata u kojem svaka osoba ima svojstva:
// firstName, age i city.
// Funkcija treba da:
// Ispita svaku osobu iz niza,
// U novi niz doda samo one osobe koje imaju 18 ili više godina,
// Na kraju vrati taj novi niz punoljetnih osoba.

const people = [
  { firstName: "Dario", lastName: "Milanovic", age: 33, city: "Zenica" },
  { firstName: "Sanja", lastName: "Kajic", age: 25, city: "Mostar" },
  { firstName: "Karlo", lastName: "Milic", age: 15, city: "Graz" },
  { firstName: "Nikola", lastName: "Bilic", age: 12, city: "Dubrovnik" },
];

function getAdults(arr) {
  const justAdult = [];
  for (i = 0; i < arr.length; i++) {
    let currentPerson = arr[i];
    if (currentPerson.age >= 18) {
      justAdult.push(currentPerson);
    }
  }
  return justAdult;
}

console.log(getAdults(people));

// Zadatak:
// Napiši funkciju describeAdults(arr) koja:
// prima niz ljudi (kao people iz prethodnog zadatka),
// koristi unutarnju funkciju (funkciju u funkciji) da napravi opis svake odrasle osobe,
// vraća niz poruka u obliku:
// "Dario iz Zenice ima 33 godine."

function describeAdults(arr) {
  const description = [];

  function createDescription(person) {
    return `${person.firstName} iz ${person.city} ima ${person.age} godine.`;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentPerson = arr[i];
    if (currentPerson.age >= 18) {
      description.push(createDescription(currentPerson));
    }
  }
  return description;
}

console.log(describeAdults(people));
