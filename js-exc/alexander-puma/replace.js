// Spot the bug 👩🏻‍💻🐛👩🏻‍👨🏼‍💻

const petName = 'Leo'
const placeholder = '{NAME}'
const reminderTemplate = '{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.'

//const reminder = reminderTemplate.replace(placeholder, petName)

//Adicionamos del código anterior un modificador global 'g' que nos permitirá reemplazar '{NAME}' en las diferentes instancias
const reminder = reminderTemplate.replace(new RegExp(placeholder, 'g'), petName);
console.log(reminder)
