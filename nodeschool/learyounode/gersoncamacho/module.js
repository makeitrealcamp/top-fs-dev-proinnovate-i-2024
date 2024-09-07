const fs = require('node:fs');
const path = require('path');

/**
 * Filtra los archivos en un directorio por su extensión.
 *
 * Lee el contenido del directorio especificado y filtra los archivos que tienen
 * la extensión dada. El resultado se pasa a un callback como un array de nombres de archivo.
 *
 * @param {string} ruta - La ruta del directorio a leer.
 * @param {string} extension - La extensión de archivo a filtrar (sin el punto inicial).
 * @param {function} callback - Función de callback que se llama con dos argumentos:
 *   - Un posible error (`Error` o `null` si no hay errores).
 *   - Un array de nombres de archivos con la extensión especificada.
 *
 * @returns {undefined} - Esta función no devuelve ningún valor; utiliza el callback para proporcionar el resultado.
 */

module.exports = function filterLs(ruta, extension, callback) {
  const filter = `.${extension}`;

  fs.readdir(ruta, (err, data) => {
    if (err) {
      return callback(err);
    }
    else {
      const resultado = data.filter(i => path.extname(i) === filter);
      return callback(null, resultado);
    }
  }
  )
}

/**
 * Agrega un cero a la izquierda de un número si es menor de 10.
 *
 * Esta función asegura que los números menores a 10 sean formateados con un cero
 * a la izquierda.
 * @param {number} number - El número que se desea formatear. Debe ser un entero.
 * @returns {string} - El número formateado como una cadena de texto.
 */
function formatWithZero(number) {
  return number < 10 ? '0' + number : number;
}


/**
 * Obtiene la fecha y hora actuales.
 *
 * Crea un objeto que contiene los componentes de la fecha y hora actuales,
 * formateados.
 *  No recibe parametros
 * @returns {Object} Un objeto con la fecha y hora formateadas. El objeto tiene
 *   las siguientes propiedades:
 *   - {number} year - El año actual (e.g., 2024).
 *   - {string} month - El mes actual, con un cero a la izquierda si es necesario
 *     (e.g., "09" para septiembre).
 *   - {string} day - El día del mes actual, con un cero a la izquierda si es necesario
 *     (e.g., "06" para el sexto día del mes).
 *   - {string} hours - La hora actual en formato de 24 horas, con un cero a la izquierda
 *     si es necesario (e.g., "18" para las 6 PM).
 *   - {string} minutes - Los minutos actuales, con un cero a la izquierda si es necesario
 *     (e.g., "30" para 30 minutos después de la hora).
 */
module.exports = function getInformation() {
  const now = new Date();

  // Obtener los componentes de la fecha y hora
  const year = now.getFullYear();
  const month = formatWithZero(now.getMonth() + 1);  // Mes comienza en 0
  const day = formatWithZero(now.getDate());
  const hours = formatWithZero(now.getHours());
  const minutes = formatWithZero(now.getMinutes());

  const dateFormated = { year, month, day, hours, minutes }

  return (dateFormated)
}


