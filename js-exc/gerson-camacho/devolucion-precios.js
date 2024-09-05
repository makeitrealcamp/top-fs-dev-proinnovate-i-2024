function hasValidPrice(product) {
  return ((product != undefined) && (product.price != undefined) && product.price >= 0 && (typeof product.price === 'number'))
}

console.log(hasValidPrice({ "product": "Milk", price: 1.50 }));
console.log(hasValidPrice({ "product": "Cheese", price: -1 }));
console.log(hasValidPrice({ "product": "Eggs", price: 0 }));
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }));
console.log(hasValidPrice());

