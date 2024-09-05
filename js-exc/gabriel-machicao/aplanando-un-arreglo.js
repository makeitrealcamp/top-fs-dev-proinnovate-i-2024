function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
}

//Test Case 1

console.log(flatten([[1, 2], [3, 4]]));

//Test Case 2

console.log(flatten([[1], [2], [3], [4]]));

//Test Case 3

console.log(flatten([["a", "b"], ["c", "d"]]));

//Test Case 4

console.log(flatten([[true, false], [false, false]]));


