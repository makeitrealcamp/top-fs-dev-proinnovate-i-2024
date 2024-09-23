function clone(arr) {
  const clonedArray = [...arr]; // Clona el arreglo original
  clonedArray.push(JSON.parse(JSON.stringify(arr))); // Agrega una copia profunda del arreglo
  return clonedArray; // Retorna el nuevo arreglo con el clon
}


//Pruebas

console.log(clone([1, 1]))
console.log(clone([1, 2, 3]))
console.log(clone(["x", "y"]))
console.log(clone([true, false, true]))
