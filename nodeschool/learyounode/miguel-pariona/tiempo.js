const net = require('net');
const port = process.argv[2]; // Obtener el puerto del primer argumento

// Verificar que se haya proporcionado un puerto
if (!port) {
  console.error('Por favor, proporciona un número de puerto como argumento.');
  process.exit(1);
}

// Crear el servidor TCP
const server = net.createServer((socket) => {
  // Crear una nueva instancia de Date
  const now = new Date();

  // Formatear la fecha y hora
  const formattedDate =
    [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'), // Mes comienza en 0
      String(now.getDate()).padStart(2, '0'),
    ].join('-') +
    ' ' +
    [
      String(now.getHours()).padStart(2, '0'),
      String(now.getMinutes()).padStart(2, '0'),
    ].join(':');

  // Enviar la fecha y hora al cliente
  socket.write(formattedDate + '\n');

  // Cerrar la conexión
  socket.end();
});

// Manejar errores del servidor
server.on('error', (err) => {
  console.error('Error en el servidor:', err.message);
});

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
