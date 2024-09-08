const http = require('http');
const url = process.argv[2];

// Realizar la petición HTTP GET
http.get(url, (response) => {
  let Data = '';  // Almacenar todos los datos
  response.on('error', (err) => {
    console.error('Error:', err);
  });

  // Configurar la codificación a UTF-8 para recibir Strings
  response.setEncoding('utf8');

  // Evento 'data': almacenar cada chunk de datos recibido
  response.on('data', (chunk) => {
    Data += chunk;
  });

  // Evento 'end': cuando se termina de recibir datos
  response.on('end', () => {
    console.log(Data.length);  // Imprimir la longitud del contenido
    console.log(Data);         // Imprimir todo el contenido
  });


});
