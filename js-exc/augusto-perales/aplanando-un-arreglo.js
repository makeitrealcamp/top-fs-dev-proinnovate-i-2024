function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
}

console.log(flatten([[1, 2], [3, 4]]))
console.log(flatten([[1], [2], [3], [4]]))
console.log(flatten([["a", "b"], ["c", "d"]]))
console.log(flatten([[true, false], [false, false]]))
