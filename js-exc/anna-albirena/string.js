// Apliqué upperCase a la primera letra de la palabra y luego le agrege el resto

function capitalize(string) {
  let firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1);
}

console.log(capitalize('hola'));
