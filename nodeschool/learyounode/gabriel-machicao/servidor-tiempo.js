const net = require('net')

function formatNumber(num){
  return num < 10 ? '0' + num : num;
}


function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = formatNumber(now.getMonth() + 1); // Los meses empiezan en 0
  const day = formatNumber(now.getDate());
  const hours = formatNumber(now.getHours());
  const minutes = formatNumber(now.getMinutes());
  return `${year}-${month}-${day} ${hours}:${minutes}`
}


const server = net.createServer( function (socket){
  socket.end(getCurrentTime() + '\n');
});


server.listen(process.argv[2])


