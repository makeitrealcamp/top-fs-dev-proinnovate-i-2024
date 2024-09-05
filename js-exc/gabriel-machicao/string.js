function capitalize (string) {
  //Como nos indica la el método toUpperCase no puede modificar el string pero puede devolver el resultado a una variable nueva, esta asu vez lo que podemos hacer es agregar el resto
  // de caracteres de nuestro string ya que nos pide que palabra comience con una letra capital.
  let stringUpperCase = string[0].toUpperCase() + string.slice(1);
  return stringUpperCase ;
}

console.log(capitalize("gabriel"))
