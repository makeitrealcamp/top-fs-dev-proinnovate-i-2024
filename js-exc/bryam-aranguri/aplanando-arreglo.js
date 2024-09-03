function flatten(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(...arr[i])
  }
  return result
}

console.log(flatten([[1, 2], [3, 4]]));
