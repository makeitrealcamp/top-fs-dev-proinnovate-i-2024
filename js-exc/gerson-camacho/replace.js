// Spot the bug 👩🏻‍💻🐛👩🏻‍👨🏼‍💻

const petName = 'Leo'
const placeholder = new RegExp('{NAME}', 'g');
const reminderTemplate = '{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.'

const reminder = reminderTemplate.replaceAll(placeholder, petName)

// Imprime reminder para darte cuenta que sucede
console.log(reminder)
/*
Replace solo reemplaza la primera ocurrencia encontrada, para spucionar esto utilice
placeholder como exprecion regular con el modificador gloval para que remplace todas las ocurrencias.
*/
