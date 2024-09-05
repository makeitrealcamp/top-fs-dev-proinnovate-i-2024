function capitalize(string) {
    const cadena = string[0].toUpperCase() + string.slice(1)
    return cadena
}
console.log(capitalize('hola'))