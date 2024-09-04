const x = [3, 3, 3, 3, 3, 3, 3];
function change(x, times) {
  const arr = [...x];
  for (let i = 0; i < arr.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < arr.length - j) {
        arr[i]--;
      }
      j++;
    }
  }
  return arr;
}
console.log(change(x, 0))  // [3, 3, 3, 3, 3, 3, 3]
console.log(change(x, 1))  // [3, 2, 2, 2, 2, 2, 3]
console.log(change(x, 2))  // [3, 2, 1, 1, 1, 2, 3]
console.log(change(x, 3))  // [3, 2, 1, 0, 1, 2, 3]
