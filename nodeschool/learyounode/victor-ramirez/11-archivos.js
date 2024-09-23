const http = require('http');
const fs = require('fs');
const path = require('path');

// Obtener el puerto y la ruta del archivo de los argumentos
const port = process.argv[2];
const filePath = process.argv[3];

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Crear un stream de lectura del archivo
  const readStream = fs.createReadStream(filePath);

  // Manejar errores en el stream
  readStream.on('error', (err) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  });

  // Configurar la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Pipe el stream del archivo a la respuesta
  readStream.pipe(res);
});

// Hacer que el servidor escuche en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
