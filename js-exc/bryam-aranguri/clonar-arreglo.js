function clone(arr) {
  const newArr = arr.slice();
  arr.push(newArr);
  return arr;
}

console.log(clone([1, 1]))
