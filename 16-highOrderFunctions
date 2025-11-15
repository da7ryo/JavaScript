const orders = [
  { id: 1, customer: "Ana", amount: 150 },
  { id: 2, customer: "Marko", amount: 40 },
  { id: 3, customer: "Ivana", amount: 220 },
  { id: 4, customer: "Luka", amount: 70 },
];

function processOrders(orders, callback) {
  for (let i = 0; i < orders.length; i++) {
    callback(orders[i]);
  }
}

function applyDiscount(order) {
  if (order.amount > 100) {
    order.discount = 10;
    console.log(
      `Customer ${order.customer} recives a ${order.discount} % bonus`
    );
  } else {
    order.discount = 0;
    console.log(`Customer ${order.customer} is not eligible for a discount`);
  }
}

processOrders(orders, applyDiscount);

console.log(orders);
