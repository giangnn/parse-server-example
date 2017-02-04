let Parse = require('parse/node');
let Order = Parse.Object.extend("Order");
setInterval(() => createOrder(1, 1), 1000);
setInterval(() => createOrder(2, 2), 1000);

function createOrder(userId, base) {
    var order = new Order();
    order.set("quantity", Math.random() + base);
    order.set("userId", userId);
    order.save();
}