const friends = [
  { name: "Ana", age: 22 },
  { name: "Marko", age: 17 },
  { name: "Ivana", age: 30 },
  { name: "Luka", age: 15 },
];

function processFriends(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
function greetIfAdult(friend) {
  if (friend.age >= 18) {
    console.log(`Hello ${friend.name}, welcome`);
  } else {
    console.log(`${friend.name} is not yet an adult`);
  }
}

processFriends(friends, greetIfAdult);
