function clone(arr) {

  const tamano = arr.length;

  let arrCopy = [];
  for (let i=0; i < tamano; i++){
    arrCopy.push(arr[i]);
  }
  arr.push(arrCopy);
  return arr
}

//Test Case 1
console.log(clone([1, 1]))

//Test Case 2
console.log(clone([1, 2, 3]))

//Test Case 3
console.log(clone(["x", "y"]))

//Test Case 4
console.log(clone([true, false, true]))



