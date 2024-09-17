function checkEquals(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false;
        //se ejecuta cuando la condición es verdadera
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}



console.log(checkEquals([1, 2], [1, 3, 5]))     //F
console.log(checkEquals([1, 2], [1, 2]))        //T
console.log(checkEquals([4, 5, 6], [4, 5, 6]))  //T
console.log(checkEquals([4, 7, 6], [4, 5, 6]))  //F
console.log(checkEquals([4, 7, 6], [4, 6, 7]))  //F