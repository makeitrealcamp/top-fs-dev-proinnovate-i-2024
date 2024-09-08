const http = require('http');
// Extracción de la URL
const url = process.argv[2];

// Realizar la petición HTTP GET
http.get(url, (response) => {
  response.setEncoding('utf8');

  // Evento 'data': se dispara cuando llega un chunk de datos
  response.on('data', (chunk) => {
    console.log(chunk);  // Imprimir cada chunk de datos
  });

  // Manejar el evento 'error' en caso de errores durante la petición
  response.on('error', (err) => {
    console.error('Error:', err);
  });

  // Evento 'end': se dispara cuando no hay más datos que recibir
  response.on('end', () => {
  });
});
