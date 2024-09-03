function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }

  }
  return result
}
console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([[1], [2], [3], [4]]));
console.log(flatten([["a", "b"], ["c", "d"]]));
console.log(flatten([[true, false], [false, false]]));
