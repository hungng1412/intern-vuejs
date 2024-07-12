import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log(`Received: ${message}`);
    ws.send(`Received: ${message}`);
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
