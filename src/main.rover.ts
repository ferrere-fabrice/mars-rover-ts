import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  //@ts-ignore
  cors: {
    origin: '*',
  },
});


io.on('connection', (socket: Socket) => {
  console.log('Bonjourn je suis le rover et je suis connecté: ' + socket.connected );

  socket.on('connect', () => {
    console.log('Connecté au serveur Socket.io');
  });
  
  socket.on('message', (data: any) => {
    console.log('Message du mission control :', data);
    io.emit('message', "Rover: "+ "ma position 1 2 3 4");
  });

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

server.listen(3000, () => {
  console.log('Le serveur est à l\'écoute sur le port 3000');
});
