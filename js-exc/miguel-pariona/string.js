function capitalize(string) {
  if (string.length === 0) {
    return string; // Devuelve la cadena vacía si la entrada está vacía
  }
  // Convertir el primer carácter a mayúsculas y concatenar con el resto de la cadena
  return string[0].toUpperCase() + string.slice(1);
}

// Ejemplos de uso:
console.log(capitalize('hola')); // "Hola"
console.log(capitalize('voMo')); // "Como"
console.log(capitalize('estas')); // "Estas"
