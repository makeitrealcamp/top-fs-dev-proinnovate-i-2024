const net = require('net');

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = zeroFill(now.getMonth() + 1);
  const day = zeroFill(now.getDate());
  const hours = zeroFill(now.getHours());
  const minutes = zeroFill(now.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer(function (socket) {
  const currentDateTime = getCurrentDateTime();
  socket.end(currentDateTime + '\n');
});

server.listen(Number(process.argv[2]));
