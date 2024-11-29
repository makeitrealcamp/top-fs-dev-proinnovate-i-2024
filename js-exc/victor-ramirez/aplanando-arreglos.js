function flatten(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(...arr[i]);
  }
  return result
}

//Pruebas
console.log(flatten([[1, 2], [3, 4]]))
console.log(flatten([[1], [2], [3], [4]]))
console.log(flatten([["a", "b"], ["c", "d"]]))
console.log(flatten([[true, false], [false, false]]))
