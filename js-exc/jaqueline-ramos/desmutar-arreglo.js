const x = [3, 3, 3, 3, 3, 3, 3];

function change(xOriginal, times) {
  const x = [...xOriginal];

  for (let i = 0; i < x.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < x.length - j) {
        x[i]--;
      }
      j++;
    }
  }
  return x;
}

console.log(change(x, 0));
console.log(change(x, 1));
console.log(change(x, 2));
console.log(change(x, 3));

console.log(change(x, 2));
console.log(change(x, 2));
