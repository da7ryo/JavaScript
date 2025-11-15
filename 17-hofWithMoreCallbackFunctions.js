const orders = [
  { id: 1, customer: "Ana", amount: 150 },
  { id: 2, customer: "Marko", amount: 40 },
  { id: 3, customer: "Ivana", amount: 220 },
  { id: 4, customer: "Luka", amount: 70 },
];

function processOrders(orders, callbacks) {
  for (i = 0; i < orders.length; i++) {
    const order = orders[i];
    for (j = 0; j < callbacks.length; j++) {
      callbacks[j](order);
    }
  }
}

function applyDiscount(order) {
  if (order.amount > 100) {
    order.discount = 10;
  } else {
    order.discount = 0;
  }
}

function sendMessage(order) {
  if (order.discount > 0) {
    console.log(`Customer ${order.customer} recives a bonus`);
  } else {
    console.log(`Customer ${order.customer} is not eligible for discount.`);
  }
}

function addStatus(order) {
  if (order.amount > 100) {
    order.status = "VIP";
  } else {
    order.status = "Regular";
  }
}
processOrders(orders, [applyDiscount, sendMessage, addStatus]);

console.log(orders);
