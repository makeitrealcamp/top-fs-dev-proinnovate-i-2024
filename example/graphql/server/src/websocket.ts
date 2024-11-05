import { Server as httpServer } from 'http';
import { Server as ioServer, Socket } from 'socket.io';

const rooms = ['general', 'tech', 'random'];

export const setupWebsocket = (server: httpServer) => {
  const io = new ioServer(server, {
    cors: {
      origin: '*',
    },
  });

  // on connection ->  what happens when a client connects

  io.on('error', console.error);

  io.on('connection', (ws: Socket) => {
    console.log('client connected');

    ws.on('joinRoom', (room: string) => {
      if (rooms.includes(room)) {
        ws.join(room);
      }
    });

    ws.on('leaveRoom', (room: string) => {
      if (rooms.includes(room)) {
        ws.leave(room);
      }
    });

    ws.on('chatMessage', (msg: { room: string; message: string }) => {
      console.log(msg);
      io.to(msg.room).emit('message', {
        user:'test',
        text: msg.message,
        room: msg.room,
        time: new Date().toISOString(),
      });
    });

    ws.on('message', (msg: string) => {
      console.log(msg);
      ws.broadcast.emit('message received');
    });

    ws.on('close', () => {
      console.log('client disconnected');
    });
  });
};
