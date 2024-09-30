const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

const server = net.createServer(function (socket) {
  socket.end(strftime('%F %H:%M', new Date()) + '\n');
});
server.listen(port);
