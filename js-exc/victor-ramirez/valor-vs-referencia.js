function checkEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; // Verifica si las longitudes son diferentes
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false; // Compara los elementos
  }
  return true; // Si todos los elementos son iguales, retorna true
}

console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
