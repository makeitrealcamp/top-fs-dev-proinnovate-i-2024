function capitalize(string) {
  //Con el string[0] nos enfocamos solamente en la primera letra de la cadena y juego con la función 'toUpperCase()' lo volvemos mayúscula
  //Y luego con el comando '+' unimos desde el indice 1 de la cadena string
  return string[0].toUpperCase() + string.slice(1)
}
console.log(capitalize('abecedario'))
