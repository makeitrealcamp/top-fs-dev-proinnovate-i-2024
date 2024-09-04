
function change(xParam, times) {
  let x=xParam.slice()
  for(let i = 0; i < x.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < x.length-j) {
        x[i]--;
      }
      j++;
    }
  }
  return x;
}
// Each time x is called, the following results are shown:
const x = [3, 3, 3, 3, 3, 3, 3]

console.log(change(x, 0))  // [3, 3, 3, 3, 3, 3, 3]
console.log(change(x, 1))  // [3, 2, 2, 2, 2, 2, 3]
console.log(change(x, 2))  // [3, 2, 1, 1, 1, 2, 3]
console.log(change(x, 3))  // [3, 2, 1, 0, 1, 2, 3]
