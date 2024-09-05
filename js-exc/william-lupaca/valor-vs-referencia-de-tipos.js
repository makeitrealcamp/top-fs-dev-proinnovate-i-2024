function checkEquals(arr1, arr2) {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  if (arr1Length !== arr2Length) {
    return false;
  } else {
    for (let i = 0; i < arr1Length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(checkEquals([1, 2], [1, 3])); //false
console.log(checkEquals([1, 2], [1, 2])); //true
console.log(checkEquals([4, 5, 6], [4, 5, 6])); //true
console.log(checkEquals([4, 7, 6], [4, 5, 6])); //false
console.log(checkEquals([4, 7, 6], [4, 6, 7])); //false
