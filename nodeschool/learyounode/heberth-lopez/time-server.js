const net = require('net');
const port = process.argv[2];

function formatDate(date) {
  const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
  };

  const formattedDate = date.toLocaleString('en-CA', options).replace(',', '');
  return formattedDate;
}

const server = net.createServer(socket => {
  const dateObj = new Date();
  let fmtDate = formatDate(dateObj);
  socket.end(`${fmtDate}\n`);
});

server.listen(port);
