// Spot the bug 👩🏻‍💻🐛👩🏻‍👨🏼‍💻

const petName = 'Leo'
const placeholder = '{NAME}'
const reminderTemplate = '{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.'

const reminder = reminderTemplate.replaceAll(placeholder, petName)

// Imprime reminder para darte cuenta que sucede

console.log(reminder)
