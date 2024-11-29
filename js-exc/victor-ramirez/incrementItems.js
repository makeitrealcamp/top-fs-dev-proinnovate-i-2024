function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1; // Asignar el nuevo valor
  }
  return arr; // Devolver el arreglo modificado
}

// Pruebas
console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));
