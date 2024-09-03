function hasValidPrice(product) {

  if(product === undefined){
    return false;
  }

  return (product && typeof(product.price) === "number" && product.price >= 0)
}

//Test Case 1

console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))

//Test Case 2

console.log(hasValidPrice({ "product": "Cheese", price: -1 }))

//Test Case 3

console.log(hasValidPrice({ "product": "Eggs", price: 0 }))

//Test Case 4

console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))

//Test Case 5

console.log(hasValidPrice())


