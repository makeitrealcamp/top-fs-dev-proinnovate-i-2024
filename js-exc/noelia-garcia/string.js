function capitalize(string) {
    let result = [...string];
    result[0] = result[0].toUpperCase();
    return result.join('');
}

console.log(capitalize('hello'));
