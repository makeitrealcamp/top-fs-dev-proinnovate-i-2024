function change(x, times) {
  var b = []
  for (let i = 0; i < x.length; i++) {
    b.push(x[i])
  }
  for (let i = 0; i < b.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < b.length - j) {
        b[i]--;
      }
      j++;
    }
  }
  return b;
}
const x = [3, 3, 3, 3, 3, 3, 3]
console.log(change(x, 2))// [3, 2, 1, 1, 1, 2, 3]
console.log(change(x, 2)) // [3, 2, 1, 1, 1, 2, 3]
