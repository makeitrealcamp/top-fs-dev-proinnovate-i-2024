function capitalize(word) {
  /*
Cuando utilizamos la función UpperCase, podríamos pensar que estamos alterando la cadena original.
Sin embargo, las cadenas, al ser valores primitivos, son inmutables, lo que significa que no se pueden
cambiar después de su creación. En lugar de modificar la cadena directamente,
es necesario devolver una nueva cadena con el primer carácter en mayúscula.
  */
  let capWord = word[0].toUpperCase() + word.slice(1);

  return capWord;
}

console.log(capitalize('ejemplo'));
