function clone(arr) {
  let result = arr.slice()
  arr.push(result)
  return arr
}

console.log(clone([1, 1]))
console.log(clone([1, 2, 3]))
console.log(clone(["x", "y"]))
