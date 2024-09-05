function clone(arr) {
  arr.push(arr.slice())
  return arr
}
console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y", [1, 2]]));
console.log(clone([true, false, true]));
