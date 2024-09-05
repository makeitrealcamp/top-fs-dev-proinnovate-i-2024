function hasValidPrice(product) {
  return !!product && typeof product.price === 'number' && product.price >= 0;
}

console.log(hasValidPrice({ product: 'Milk', price: 1.5 }));
console.log(hasValidPrice({ product: 'Cheese', price: -1 }));
console.log(hasValidPrice({ product: 'Eggs', price: 0 }));
console.log(hasValidPrice({ product: 'Cereals', price: '3.0' }));
console.log(hasValidPrice());
