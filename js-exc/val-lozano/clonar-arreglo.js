function clone(arr) {
  arr.push(arr.slice());
  return arr;
}

console.log(clone([1, 1])); // [1, 1, [1, 1]]
console.log(clone([1, 2, 3])); // [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"])); // ["x", "y", ["x", "y"]]
console.log(clone([true, false, true])); // [true, false, true, [true, false, true]]
