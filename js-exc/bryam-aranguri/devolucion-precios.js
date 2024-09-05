function hasValidPrice(product) {
  return (product && typeof product.price === 'number' && product.price >= 0)
}

console.log(hasValidPrice({ "product": "Milk", price: 1.50 }));
console.log(hasValidPrice());
console.log(hasValidPrice({ "product": "Cheese", price: -1 }));
console.log(hasValidPrice({ "product": "Eggs", price: 0 }));
