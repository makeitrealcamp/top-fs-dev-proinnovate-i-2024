function hasValidPrice({product, price} = {}) {
  if( price < 0 ) return false;
  if( typeof price != "number" ) return false;
  return true
}

console.log(hasValidPrice({ "product": "Milk", price: 1.50 }));
console.log(hasValidPrice({ "product": "Cheese", price: -1 }));
console.log(hasValidPrice({ "product": "Eggs", price: 0 }));
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }));
console.log(hasValidPrice());
