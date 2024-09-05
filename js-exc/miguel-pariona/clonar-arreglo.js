function clone(arr) {
  const result = arr.slice();
  result.push(arr.slice());
  return result;
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(['x', 'y']));
console.log(clone([true, false, true]));
