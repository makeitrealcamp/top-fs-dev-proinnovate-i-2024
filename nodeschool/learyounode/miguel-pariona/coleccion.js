const http = require('http');
const bl = require('bl');

// Obtener la URL del primer argumento de la línea de comandos
const url = process.argv[2];

// Comprobar si se ha proporcionado una URL
if (!url) {
  console.error('Por favor, proporciona una URL como argumento.');
  process.exit(1);
}

// Realizar la petición HTTP GET
http
  .get(url, (response) => {
    // Usar bl para manejar los datos
    response.pipe(
      bl((err, data) => {
        if (err) {
          console.error('Error en la petición:', err.message);
          return;
        }

        // Convertir el Buffer a string
        data = data.toString();

        // Imprimir la cantidad de caracteres recibidos
        console.log(data.length);
        // Imprimir la totalidad de caracteres recibidos
        console.log(data);
      })
    );
  })
  .on('error', (err) => {
    console.error('Error en la solicitud HTTP:', err.message);
  });
