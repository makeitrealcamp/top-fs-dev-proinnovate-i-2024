function checkEquals(arr1, arr2){
  if(arr1.length == arr2.length){
    for(let i=0; i<arr1.length; i++){
      if(arr1[i] != arr2[i]){
        return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}


//Test Case 1

console.log(checkEquals([1, 2], [1, 3])); // false

//Test Case 2

console.log(checkEquals([1, 2], [1, 2])); // true

//Test Case 3

console.log(checkEquals([4, 5, 6], [4, 5, 6])); // true

//Test Case 4

console.log(checkEquals([4, 7, 6], [4, 5, 6])); // false

//Test Case 5

console.log(checkEquals([4, 7, 6], [4, 6, 7])); // false
