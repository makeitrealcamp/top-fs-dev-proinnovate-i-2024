const net = require('net');
const port = process.argv[2];
const server = net.createServer(socket => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const dateString = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.end(dateString);
});
server.listen(port);
