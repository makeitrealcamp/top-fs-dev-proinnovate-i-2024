function capitalize(string) {
  const capitalized = string[0].toUpperCase() + string.slice(1);
  return capitalized;
}

console.log(capitalize('hello'));
