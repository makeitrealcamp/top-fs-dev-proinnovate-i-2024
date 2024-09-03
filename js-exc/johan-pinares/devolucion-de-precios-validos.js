function hasValidPrice(product) {
  if (product && product.price != null) {
    const price = parseFloat(product.price);
    if (!isNaN(price) && price >= 0) {
      return true;
    }
  }
  return false;
}
console.log(hasValidPrice({ "product": "Milk", price: 1.50 }));
console.log(hasValidPrice({ "product": "Cheese", price: -1 }));
console.log(hasValidPrice({ "product": "Eggs", price: 0 }));
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }));
console.log(hasValidPrice())
