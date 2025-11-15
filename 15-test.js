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

const customers = [
  { name: "Ana", spent: 120 },
  { name: "Marko", spent: 40 },
  { name: "Ivana", spent: 200 },
  { name: "Luka", spent: 15 },
];

function processCustomers(customers, callback) {
  for (let i = 0; i < customers.length; i++) {
    callback(customers[i]);
  }
}

function rewardCustomer(customer) {
  if (customer.spent > 100) {
    console.log(`Congratulations ${customer.name}! You have won a discount`);
  } else {
    console.log(`${customer.name}, thank You for buy`);
  }
}

processCustomers(customers, rewardCustomer);

function addCity(city) {
  customers.city = city;
}

addCity("Zenica");

processCustomers(customers, addCity);

console.log(customers);
