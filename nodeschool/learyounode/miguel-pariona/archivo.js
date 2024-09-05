const http = require('http');
const fs = require('fs');

// Obtener el puerto y la ruta del archivo desde los argumentos de la línea de comandos
const port = process.argv[2];
const filePath = process.argv[3];

// Verificar que se hayan proporcionado ambos argumentos
if (!port || !filePath) {
  console.error('Uso: node archivos.js <puerto> <ruta_del_archivo>');
  process.exit(1);
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Crear un stream de lectura para el archivo
  const fileStream = fs.createReadStream(filePath);

  // Manejar errores al leer el archivo
  fileStream.on('error', (err) => {
    console.error('Error al leer el archivo:', err.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error interno del servidor');
  });

  // Enviar el archivo como respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  fileStream.pipe(res);
});

// Manejar errores del servidor
server.on('error', (err) => {
  console.error('Error en el servidor:', err.message);
});

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
