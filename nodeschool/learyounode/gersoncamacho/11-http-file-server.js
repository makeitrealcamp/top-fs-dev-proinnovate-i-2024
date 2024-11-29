const http = require('http');
const fs = require('fs');

// Obtener los argumentos de la línea de comandos
const port = process.argv[2];
const filePath = process.argv[3];

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Crear un stream de lectura del archivos
  const fileStream = fs.createReadStream(filePath);

  // Manejar errores en la lectura del archivo
  fileStream.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Error al leer el archivo ${err}`);
  });

  // Enviar el archivo como respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  fileStream.pipe(res);
});

// Iniciar el servidor en el puerto indicado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
