function checkEquals(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function(v, i) { return v === arr2[i] });
    /*if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }*/
}
console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 6, 7]))