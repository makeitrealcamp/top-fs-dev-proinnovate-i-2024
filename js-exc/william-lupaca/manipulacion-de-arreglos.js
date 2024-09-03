function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i] + 1;
  }
  return arr;
}
incrementItems([0, 1, 2, 3]); //[1, 2, 3, 4]
incrementItems([2, 4, 6, 8]); //[3, 5, 7, 9]
incrementItems([-1, -2, -3, -4]); //	[0, -1, -2, -3]
