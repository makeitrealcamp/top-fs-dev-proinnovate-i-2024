const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('top-pro-inn', (msg) => {
    console.log('top-pro-inn', msg)

    io.emit('top-pro-inn', msg)
  })
})

server.listen(9090, () => {
  console.log('listening on *:9090');
});


