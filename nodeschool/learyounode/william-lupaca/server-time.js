const net = require('net');
const strftime = require('strftime');

const server = net.createServer((socket) => {
  const formattedDate = strftime('%F %R\n', new Date());

  socket.end(formattedDate);
});

server.listen(Number(process.argv[2]), () => {
  console.log(`listen on port ${process.argv[2]}`);
});

