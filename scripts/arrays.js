// Task 2 - Day 1
let favouriteFood = ["pizza", "avocado", "dark chocolate", "strawberries"];
console.log("Two of my favourite foods are: " + favouriteFood[0] + " and " + favouriteFood[2]);

// Task 1 - Day 2
let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { name: "can of beer", type: "alcohol", quantity: 4, price: 1.1 },
    { name: "prosecco", type: "alcohol", quantity: 1, price: 8.99 },
    { name: "steak", type: "food", quantity: 2, price: 3.99 },
    { name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { name: "candles", type: "home", quantity: 3, price: 1.99 },
    { name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { name: "onions", type: "food", quantity: 3, price: 0.4 }
];

function totalPrice(shoppingCart) {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].quantity * shoppingCart[i].price;
    }
    return total.toFixed(2);
}

console.log(totalPrice(shoppingCart));

// Task 2/3 - Day 2
function totalPrice2(cart, discountAmount, type) {
    let total2 = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].type == "food" || type === "any") {
        total2 += shoppingCart[i].price * shoppingCart[i].quantity * (1 - discountAmount / 100);
        } else {
            total2 += shoppingCart[i].quantity * shoppingCart[i].price;
        }
    }
    return total2.toFixed(2);
}

console.log(totalPrice2(shoppingCart, 40, "food"));

// Task 4 - Day 2
function twoPricePoints(cart, lowPrice, highPrice) {
    let arrItems = [];
    for(const item of cart) {
        if(item.price > lowPrice && item.price < highPrice) {
            arrItems.push(item);
        }
    }
    return arrItems;
}

console.log(twoPricePoints(shoppingCart, 2, 5))