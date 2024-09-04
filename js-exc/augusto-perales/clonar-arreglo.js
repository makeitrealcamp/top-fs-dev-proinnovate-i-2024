function clone(arr) {
  let arrcloned = [];

  for (let i = 0; i < arr.length; i++) {
    arrcloned.push(arr[i]);
  }

  arr.push(arrcloned)

  return arr;
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
console.log(clone([true, false, true]));

