function clone(arr) {
  const a = arr.length
  var b = []
  for (let i = 0; i < a; i++) {
    b.push(arr[i])
  }
  arr.push(b)
  return arr
}
console.log(clone([1, 1]))
console.log(clone([1, 2, 3]))
console.log(clone(["x", "y"]))
console.log(clone([true, false, true]))
