const net = require('net');

// Obtener el puerto del primer argumento
const port = process.argv[2];

// Crear el servidor
const server = net.createServer((socket) => {
  // Obtener la fecha y hora actual
  const now = new Date();
  const formattedDate = formatDate(now);

  // Escribir la fecha y hora en el socket
  socket.write(formattedDate + '\n');

  // Cerrar la conexión
  socket.end();
});

// Formatear la fecha en el formato requerido
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Hacer que el servidor escuche en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
