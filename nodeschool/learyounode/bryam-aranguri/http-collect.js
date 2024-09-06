const http = require('http'); // Importamos el módulo HTTP

// Guardamos la URL que el usuario pasa como argumento
const url = process.argv[2];

// Realizamos una solicitud HTTP GET a la URL
http.get(url, (response) => {
  let fullData = ''; // Variable para acumular todos los fragmentos de datos

  // Escuchamos el evento 'data', que se dispara cuando recibimos datos
  response.on('data', (chunk) => {
    fullData += chunk; // Acumulamos cada fragmento de datos en fullData
  });

  // Escuchamos el evento 'end', que se dispara cuando termina la recepción de datos
  response.on('end', () => {
    console.log(fullData.length); // Imprimimos la cantidad de caracteres recibidos
    console.log(fullData);        // Imprimimos el string completo recibido
  });

  // Escuchamos el evento 'error' en caso de que ocurra un problema con la solicitud
  response.on('error', (err) => {
    console.error('Error:', err.message);
  });

}).on('error', (err) => {
  console.error('Error con la solicitud:', err.message); // Manejo de errores con la solicitud GET
});
