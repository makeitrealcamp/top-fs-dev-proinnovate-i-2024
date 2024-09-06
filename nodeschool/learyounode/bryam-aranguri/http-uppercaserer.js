const http = require('http');
const through2Map = require('through2-map');

// Función para crear el servidor
function createServer(port) {
  const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
      // Si el método no es POST, respondemos con un error 405
      res.statusCode = 405; // Method Not Allowed
      res.end('Only POST requests are allowed');
      return;
    }

    // Usamos through2-map para transformar los datos a mayúsculas
    req.pipe(through2Map((chunk) => {
      // Convertimos el chunk a una cadena, la transformamos a mayúsculas, y devolvemos el resultado
      return chunk.toString().toUpperCase();
    })).pipe(res); // Pasamos el resultado transformado al cliente
  });

  // El servidor escucha en el puerto especificado
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

// Verificamos los argumentos de la línea de comandos para obtener el puerto
const port = process.argv[2];
if (!port) {
  console.error('Please provide a port number as the first argument');
  process.exit(1);
}

// Creamos el servidor con el puerto especificado
createServer(port);
