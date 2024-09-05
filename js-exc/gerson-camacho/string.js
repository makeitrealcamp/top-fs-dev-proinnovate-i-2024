function capitalize(string) {
  let result = [...string];
  result[0] = result[0].toUpperCase();
  return result.join('');
}
console.log(capitalize("hello"));
/**
 * Cuando intentas cambiar un valor primitivo,
 * lo que realmente debes hacer es que se crea un nuevo valor
 * y actualizar la variable para contener este nuevo valor.
 */
