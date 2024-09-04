function hasValidPrice(product) {
    if (!product) return false
    return ((Number.isInteger(product.price) || (product.price === +product.price && product.price !== (product.price | 0))) && product.price >= 0)
}
console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))
console.log(hasValidPrice({ "product": "Cheese", price: -1 }))
console.log(hasValidPrice({ "product": "Eggs", price: 0 }))
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))
console.log(hasValidPrice())