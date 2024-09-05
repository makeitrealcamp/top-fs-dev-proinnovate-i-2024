// Cargar el módulo 'https' para realizar peticiones HTTP y HTTPS
const https = require('http');

// Obtener la URL del primer argumento de la línea de comandos
const url = process.argv[2];

// Comprobar si se ha proporcionado una URL
if (!url) {
  console.error('Por favor, proporciona una URL como argumento.');
  process.exit(1);
}

// Realizar la petición HTTP GET
https
  .get(url, (response) => {
    // Establecer la codificación de la respuesta como 'utf8'
    response.setEncoding('utf8');

    // Manejar el evento 'data' para imprimir cada fragmento de datos
    response.on('data', (chunk) => {
      console.log(chunk);
    });

    // Manejar el evento 'error' para capturar cualquier error en la petición
    response.on('error', (err) => {
      console.error('Error en la petición:', err.message);
    });

    // Opcionalmente, manejar el evento 'end' cuando la respuesta haya terminado
    response.on('end', () => {
      // No es necesario imprimir algo aquí, pero puedes hacerlo si quieres
      // console.log('Fin de la respuesta.');
    });
  })
  .on('error', (err) => {
    // Manejar cualquier error que ocurra en la solicitud HTTPS
    console.error('Error en la solicitud HTTPS:', err.message);
  });
