function clone(arr) {
  arr.push(arr.slice())
  return arr
}

console.log(clone([1, 1]))
