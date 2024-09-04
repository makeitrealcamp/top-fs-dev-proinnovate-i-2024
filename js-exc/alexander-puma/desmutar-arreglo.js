desmutar - arreglo.js
function change(arr, times) {

  const result = arr.slice()

  // Iteración para insertar
  for (let i = 0; i < result.length; i++) {
    let j = 1
    while (j <= times) {
      if (i >= j && i < result.length - j) {
        result[i]--
      }
      j++
    }
  }

  return result
}

// Pruebas
const x = [3, 3, 3, 3, 3, 3, 3]
console.log(JSON.stringify(change(x, 0))) // [3,3,3,3,3,3,3]
console.log(JSON.stringify(change(x, 1))) // [3,2,2,2,2,2,3]
console.log(JSON.stringify(change(x, 2))) // [3,2,1,1,1,2,3]
console.log(JSON.stringify(change(x, 3)))// [3,2,1,0,1,2,3]
