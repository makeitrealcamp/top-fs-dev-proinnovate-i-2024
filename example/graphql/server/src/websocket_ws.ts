import { Server as httpServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws';

export const setupWebsocket = (server: httpServer) => {
  const wss = new WebSocketServer({ server });

  // on connection ->  what happens when a client connects

  wss.on('error', console.error);

  wss.on('connection', (ws: WebSocket) => {
    console.log('client connected');

    ws.on('message', (msg: string) => {
      console.log(msg);
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          console.log({ msg });
          client.send('message received');
        }
      });
    });

    ws.on('close', () => {
      console.log('client disconnected');
    });
  });
};
