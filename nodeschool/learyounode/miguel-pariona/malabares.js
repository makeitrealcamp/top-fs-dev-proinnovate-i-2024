const http = require('http');

// Obtener las URLs de los argumentos
const urls = process.argv.slice(2);

// Comprobar que se han proporcionado tres URLs
if (urls.length !== 3) {
  console.error(
    'Por favor, proporciona exactamente tres URLs como argumentos.'
  );
  process.exit(1);
}

// Arreglo para almacenar las respuestas
const responses = [];
let received = 0;

// Función para manejar la respuesta de cada solicitud
const handleResponse = (index, url) => {
  let data = '';

  http
    .get(url, (response) => {
      response.setEncoding('utf8');

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        responses[index] = data; // Guardar la respuesta en el índice correspondiente
        received += 1; // Incrementar el contador de respuestas recibidas

        // Verificar si se han recibido todas las respuestas
        if (received === urls.length) {
          responses.forEach((response) => console.log(response));
        }
      });

      response.on('error', (err) => {
        console.error(`Error en la solicitud a ${url}: ${err.message}`);
      });
    })
    .on('error', (err) => {
      console.error(`Error en la solicitud HTTP a ${url}: ${err.message}`);
    });
};

// Iniciar las solicitudes para cada URL
urls.forEach((url, index) => handleResponse(index, url));
