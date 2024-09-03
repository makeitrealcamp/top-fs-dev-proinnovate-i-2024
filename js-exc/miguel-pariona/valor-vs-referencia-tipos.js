function checkEquals(arr1, arr2) {
  // Verifica si las longitudes de los arreglos son diferentes
  if (arr2.length !== arr1.length) {
    return false;
  }

  // Compara cada elemento de los arreglos
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 6, 7]));
