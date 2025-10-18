const friends = ["Dario", "Marija", "Luka", "Stjepan"];
function getFirstElementAndLenght(arr) {
  return [arr[0], arr.length];
}

console.log(getFirstElementAndLenght(friends));

const Weeks = [
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(getFirstElementAndLenght(Weeks));

function secondDayOfTheWeekAndLastIndex(arr) {
  return [arr[1], arr.length - 1];
}

console.log(secondDayOfTheWeekAndLastIndex(Weeks));

function getLastElementAndThirdElement(arr) {
  return [arr[arr.length - 1], arr[2]];
}

console.log(getLastElementAndThirdElement(Weeks));

function getFirstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}

console.log(getFirstAndLast(friends));

function getSecondAndBeforeLast(arr) {
  return [arr[1], arr[arr.length - 2]];
}

console.log(getSecondAndBeforeLast(friends));

friends.push("Petar");
console.log(friends);
friends[0] = "Matej";
console.log(friends);

function checkArrayLength(arr) {
  if (arr.length >= 3) {
    return "Array has enough elements";
  } else {
    return "Array too short";
  }
}
console.log(checkArrayLength(friends));

function checkTemp(temp) {
  return temp >= 25 ? "It's hot" : "It's not hot";
}

console.log(checkTemp(33));

function checkArray(arr) {
  return arr.length === 0 ? "Array is empty" : "Array has enough elements";
}

console.log(checkArray(Weeks));

const empty = [];

console.log(checkArray(empty));

function checkArrayWithCount(arr) {
  return arr.length === 0
    ? "Array is empty"
    : `Array has ${arr.length} elements`;
}

console.log(checkArrayWithCount(Weeks));
console.log(checkArrayWithCount([]));

function clubCheck(name, age, friends) {
  if (age < 18) {
    return `Sorry ${name}, you are too young`;
  } else if (age >= 18 && friends.length >= 3) {
    return `Welcome ${name}! You have enough friends to party. `;
  } else {
    return `Sorry ${name}, Bring some more friends next time. `;
  }
}

console.log(clubCheck("Dario", 33, friends));
function clubCheck()
