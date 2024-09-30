const http = require('http');

// Obtenemos las URLs desde los argumentos
const urls = process.argv.slice(2);
const results = new Array(urls.length); // Array para almacenar los resultados
let count = 0; // Contador de respuestas recibidas

// Función para hacer la solicitud HTTP
function httpGet(index) {
  http.get(urls[index], (response) => {
    let data = '';

    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk; // Concatenar los chunks
    });

    response.on('end', () => {
      results[index] = data; // Almacenar el resultado en el índice correspondiente
      count++; // Aumentar el contador

      // Si se han recibido todas las respuestas, imprimir los resultados
      if (count === urls.length) {
        results.forEach(result => console.log(result));
      }
    });

    response.on('error', (err) => {
      console.error('Error en la respuesta:', err);
    });
  }).on('error', (err) => {
    console.error('Error en la petición:', err);
  });
}

// Iniciar las solicitudes para cada URL
urls.forEach((_, index) => {
  httpGet(index);
});
