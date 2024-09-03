function hasValidPrice(product) {
  if (!product) {
    return false;
  }
  return product && typeof product.price === 'number' && product.price >= 0;
}

console.log(hasValidPrice({ product: 'Milk', price: 1.5 })); //true
console.log(hasValidPrice({ product: 'Cheese', price: -1 })); //false
console.log(hasValidPrice({ product: 'Eggs', price: 0 })); //true
console.log(hasValidPrice({ product: 'Cereals', price: '3.0' })); //false
console.log(hasValidPrice()); //false
