function change(x, times) {
  let newArr = [...x];

  for (let i = 0; i < newArr.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < newArr.length - j) {
        newArr[i]--;
      }
      j++;
    }
  }
  return newArr;
}

// Test cases
const x = [3, 3, 3, 3, 3, 3, 3];

console.log(change(x, 0)); // [3, 3, 3, 3, 3, 3, 3]
console.log(change(x, 1)); // [3, 2, 2, 2, 2, 2, 3]
console.log(change(x, 2)); // [3, 2, 1, 1, 1, 2, 3]
console.log(change(x, 3)); // [3, 2, 1, 0, 1, 2, 3]

// Check that the original array is unchanged
console.log(x); // [3, 3, 3, 3, 3, 3, 3]
