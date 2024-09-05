const net = require('net');
const strftime = require('strftime');

const server = net.createServer((socket) => {
  let data = strftime('%F %R\n', new Date());
  socket.end(data);
});

server.listen(process.argv[2]);
