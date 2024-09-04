function incrementItems(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1; // Usa el operador de asignación '=' en lugar de '==='
  }

  return array;
}

console.log(incrementItems([0, 1, 2, 3])); // Esto imprimirá: [1, 2, 3, 4]
