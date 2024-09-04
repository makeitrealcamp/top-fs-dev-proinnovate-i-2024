function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] +=  1;
  }

  return arr;
}

//Test Case 1
console.log(incrementItems([0, 1, 2, 3]));

//Test Case 2
console.log(incrementItems([2, 4, 6, 8]));

//Test Case 3
console.log(incrementItems([-1, -2, -3, -4]));


