const http = require('http');

// Obtén la URL del primer argumento
const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');

  let data = '';

  response.on('data', (chunk) => {
    data += chunk; // Concatenar los chunks
  });

  response.on('end', () => {
    console.log(data.length); // Imprimir la cantidad de caracteres
    console.log(data); // Imprimir la totalidad de caracteres
  });

  response.on('error', (err) => {
    console.error('Error en la respuesta:', err);
  });
}).on('error', (err) => {
  console.error('Error al hacer la petición:', err);
});
