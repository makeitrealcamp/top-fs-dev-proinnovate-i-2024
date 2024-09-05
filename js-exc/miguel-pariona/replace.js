// Spot the bug 👩🏻‍💻🐛👩🏻‍👨🏼‍💻

const petName = 'Leo';
const placeholder = '{NAME}';
const reminderTemplate = `
 {NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and
 {NAME} soon.`;

const reminder = reminderTemplate.replaceAll(placeholder, petName);

console.log(reminder);
/*¿cual es el error y como seria la solución?
En el codigo original se uso el String.prototype.replace, lo que hace el cambio a la primera ocurrencia,
pero en la cadena de texto aparece 2 veces, LA SOLUCIÓN es cambiarlo por el String.prototype.replaceAll*/
