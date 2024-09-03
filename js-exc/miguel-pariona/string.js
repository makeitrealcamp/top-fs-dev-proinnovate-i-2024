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

/* ¿cual es el error y como seria la solución?
Usando el string[0].toUpperCase() estamos trabajando el 1er caracter con mayuscula pero falta adicionar los
caracteres restantes, es por ello que se le adiciona el string.slice(1) para que sume los caracteres del índice 1
o 2da caracter hasta adelante
*/
