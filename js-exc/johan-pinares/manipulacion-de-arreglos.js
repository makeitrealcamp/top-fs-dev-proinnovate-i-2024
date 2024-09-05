function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1
  }
  return arr
}
console.log(incrementItems([-1, -2, -3, -4]))
