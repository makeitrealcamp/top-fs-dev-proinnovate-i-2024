// Se agregó el metodo slice para obtener una copia del array

function clone(arr) {
  arr.push(arr.slice());
  return arr;
}
