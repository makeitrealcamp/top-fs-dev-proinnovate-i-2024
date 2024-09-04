// Se creo dos nuevas variables para no modificar el array original

const x = [3, 3, 3, 3, 3, 3, 3];

function change(x, times) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    let j = 1;
    let newValue = x[i];
    while (j <= times) {
      if (i >= j && i < x.length - j) {
        newValue--;
      }
      j++;
    }
    result.push(newValue);
  }
  return result;
}
