// Napiši funkciju koja prima niz brojeva i vraća novi niz, u kojem je svakom broju dodano 5.

function addBy5(arr) {
  const arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    arrRes.push(currentItem + 5);
  }
  return arrRes;
}

console.log(addBy5([5, 10, 17, 22]));

// Napiši funkciju koja prima niz imena i vraća novi niz u kojem svako ime ima dodatak „– prijatelj“.

function names(arr) {
  const newNames = [];
  for (i = 0; i < arr.length; i++) {
    currentName = arr[i];
    newNames.push(currentName + "- prijatelj");
  }
  return newNames;
}

const friends = [
  "Danijel",
  "Marko",
  "Slaven",
  "Domagoj",
  "Sara",
  "Ana",
  "Ivana",
];
console.log(names(friends));

function addFriendType(arr) {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    const currentItem1 = arr[i];
    if (currentItem1[0] === "A") {
      newArr.push(currentItem1 + " je najbolji prijatelj");
    } else {
      newArr.push(currentItem1 + " je prijatelj");
    }
  }
  return newArr;
}

console.log(addFriendType(friends));

// Napiši funkciju koja prolazi kroz niz imena i:
// ako ime počinje na "A" → dodaj „– najbolji prijatelj“
// ako ime počinje na "I" → dodaj „– prijateljica“
// u suprotnom → dodaj „– prijatelj“

function newFriendsType(arr) {
  const newFriendsList = [];

  for (let i = 0; i < arr.length; i++) {
    let currentItem2 = arr[i];
    if (currentItem2[0] === "A") {
      newFriendsList.push(currentItem2 + " je najbolji prijatelj");
    } else if (currentItem2[0] === "I") {
      newFriendsList.push(currentItem2 + " je prijateljica");
    } else {
      newFriendsList.push(currentItem2 + " je prijatelj");
    }
  }
  return newFriendsList;
}

console.log(newFriendsType(friends));

// Zadatak: Filtriranje prijatelja po dužini imena
// Napiši funkciju filterLongNames koja prima jedan niz (npr. listu prijatelja)
// i vraća novi niz koji sadrži samo imena duža od 4 slova.
// U funkciji koristi petlju da pregleda svako ime.

function filterLongNames(arr) {
  const longNames = [];
  for (let i = 0; i < arr.length; i++) {
    let currentItem3 = arr[i];
    if (currentItem3.length > 4) {
      longNames.push(currentItem3);
    }
  }
  return longNames;
}

console.log(filterLongNames(friends));

// Završni zadatak – Klub prijatelja
// Napiši funkciju clubFriendsCheck koja prima niz prijatelja i za svakog prijatelja odlučuje sljedeće:
// Ako ime počinje na "A" → "najbolji prijatelj"
// Ako ime počinje na "I" → "prijateljica"
// Ako ime ima više od 5 slova → "dugogodišnji prijatelj"
// Za sve ostale → "prijatelj"
// Funkcija treba vratiti novi niz sa opisima svih prijatelja.

function clubFriendsCheck(arr) {
  const detailedFriendsList = [];
  for (let i = 0; i < arr.length; i++) {
    let curentName1 = arr[i];
    if (curentName1[0] === "A") {
      detailedFriendsList.push(curentName1 + " je najbolji prijatelj");
    } else if (curentName1[0] === "I") {
      detailedFriendsList.push(curentName1 + " je prijateljica");
    } else if (curentName1.length > 5) {
      detailedFriendsList.push(curentName1 + " je dugogodisnji prijatelj");
    } else {
      detailedFriendsList.push(curentName1 + " je prijatelj");
    }
  }
  return detailedFriendsList;
}

console.log(clubFriendsCheck(friends));
