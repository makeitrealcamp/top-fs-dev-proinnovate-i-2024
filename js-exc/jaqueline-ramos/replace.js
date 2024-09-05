const petName = 'Leo';
const placeholder = '{NAME}';
const reminderTemplate =
  '{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.';

/* Para que reemplace todas las coincidencias {NAME} se puede usar replaceAll*/
const reminder = reminderTemplate.replaceAll(placeholder, petName);
console.log(reminder);
