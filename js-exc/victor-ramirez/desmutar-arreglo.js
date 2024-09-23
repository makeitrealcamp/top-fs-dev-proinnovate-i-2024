function change(x, times) {
  const result = [...x]; // Crea una copia del arreglo original
  for (let i = 0; i < result.length; i++) {
    if (i >= times && i < result.length - times) {
      result[i]--; // Decrementa solo en los índices adecuados
    }
  }
  return result; // Retorna el nuevo arreglo modificado
}

//Prueba
const x = [3, 3, 3, 3, 3, 3, 3];

console.log(change(x, 2));
console.log(change(x, 2));


