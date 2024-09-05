const petName = 'Leo'
const placeholder = '{NAME}'
const reminderTemplate = '{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.'
const reminder = reminderTemplate.replaceAll(placeholder, petName)
/*Al usar replace solo reemplaza al primer termino que queremos cambios y aqui tenemos dos
variables name entonces usamos replace all para cambiar a todos los valores NAME*/
console.log(reminder)
