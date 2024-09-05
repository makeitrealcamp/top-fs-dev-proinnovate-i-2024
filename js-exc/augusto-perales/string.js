function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
  //La primera letra (0) se pone en mayusculas, luego se
  // suma el resto del string empezando desde la segunda letra (2)
}

console.log(capitalize("hello"));
