function change(x, times) {
  let arr = x.slice();
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

const x = [3, 3, 3, 3, 3, 3, 3];

console.log(change(x, 0));
console.log(change(x, 1));
console.log(change(x, 2));
console.log(change(x, 3));
console.log(x);

