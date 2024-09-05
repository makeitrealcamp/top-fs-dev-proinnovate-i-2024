function clone(arr) {
  const copy = [...arr];
  arr.push(copy);
  return arr;
}

console.log( clone([1, 1]) );
console.log( clone([1, 2, 3]) );
console.log( clone(["x", "y"]) );
console.log( clone([true, false, true]) );
