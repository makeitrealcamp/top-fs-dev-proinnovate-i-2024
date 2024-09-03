// Spot the bug 👩🏻‍💻🐛👩🏻‍👨🏼‍💻

const petName = 'Leo'
const placeholder = '{NAME}'
const reminderTemplate = '{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.'

// Cuando usamos replaceAll reemplaza todas las coincidencias que tenga el primer argumento por el valor del string del segundo parametro, al contrario de
// de solo usar replace
const reminder = reminderTemplate.replaceAll(placeholder, petName)

// Imprime reminder para darte cuenta que sucede

console.log(reminder)
