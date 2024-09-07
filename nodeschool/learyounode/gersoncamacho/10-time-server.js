const net = require('net');

const getInformation = require('./module')

// Crear el servidor TCP
const server = net.createServer(function (socket) {

  const date = getInformation();
  const formattedDate = `${date.year}-${date.month}-${date.day} ${date.hours}:${date.minutes}`;
  socket.write(formattedDate + '\n');

  // Cerrar la conexión
  socket.end();
});

// Puerto proporcionado como argumento
const port = process.argv[2];
server.listen(port);
