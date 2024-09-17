function clone(arr) {
  const clonarArr = [...arr];
  arr.push(clonarArr);
  return arr;
}
console.log(clone([1, 1]))
console.log(clone([1, 2, 3]))
console.log(clone(["x", "y"]))
console.log(clone([true, false, true]))
