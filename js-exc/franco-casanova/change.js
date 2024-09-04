function change(x, times) {
    const array = [...x]
    for (let i = 0; i < array.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < array.length - j) {
                array[i]--;
            }
            j++;
        }
    }
    return array;
}
const x = [3, 3, 3, 3, 3, 3, 3]
console.log(change(x, 2))
console.log(change(x, 2))