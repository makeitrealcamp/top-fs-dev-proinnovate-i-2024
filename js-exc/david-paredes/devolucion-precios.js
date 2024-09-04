function hasValidPrice(product) {
  return (product && product.price && typeof(product.price)===Number && product.price >= 0)
}

console.log(hasValidPrice({ "product": "Cheese", price: -1 }))
console.log(hasValidPrice({ "product": "Eggs", price: 0 }))
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))
