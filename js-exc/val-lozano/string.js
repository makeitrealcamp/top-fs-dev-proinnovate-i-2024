function capitalize(string) {
  /*
  Se inicializa otra string de la siguiente forma
  - Se obtiene primer caracter de la string original
  - Se convierte a mayúscula
  - Se concatena con el resto de la string original, con un slice desde la posición 1
  */
  let capString = string[0].toUpperCase() + string.slice(1);

  return capString;
}

console.log(capitalize("hola")); // Hola
