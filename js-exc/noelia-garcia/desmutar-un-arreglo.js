function change(x, times) {
    const copy = [...x];
    for (let i = 0; i < copy.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < copy.length - j) {
                copy[i]--;
            }
            j++;
        }
    }
    return copy;
}


const x = [3, 3, 3, 3, 3, 3, 3];
console.log(change(x, 2));
console.log(change(x, 2));