const x = [3, 3, 3, 3, 3, 3, 3]

function change(x, times) {
  arr = [...x]
  for(let i = 0; i < arr.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < arr.length-j) {
        arr[i]--;
      }
      j++;
    }
  }
  return arr;
}

console.log(change(x, 0))
console.log(change(x, 1))
console.log(change(x, 2))
console.log(change(x, 2))
console.log(change(x, 3))