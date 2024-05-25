import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 4000;

app.use(express.static('public'));

const users = {};
let candidates = [];

io.on('connection', (socket) => {
  if (!users[socket.id]) {
    users[socket.id] = socket.id;
  }
  socket.emit("yourID", socket.id);

  io.sockets.emit("allUsers", users);

  socket.on('disconnect', () => {
    console.log('Отключение');

    delete users[socket.id];
    candidates = [];

    io.sockets.emit("available_users", users);
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit('hey', {sdp: data.sdp, from: data.from});
  });

  socket.on("acceptedCall", (data) => {
    io.to(data.guy_I_accepted_call_from).emit('callAccepted', {sdp: data.sdp});
  });

  socket.on("candidate", (data) => {
    candidates.push(data.candidate);

    if(candidates.length < 2){
      io.sockets.emit("got_ice", {candidate: candidates[0], id: socket.id});
    } else {
      // Обработка, если получено более одного кандидата
    }
  });

  console.log('Установлено соединение через сокет');
});


server.listen(PORT, () => {
  console.log(`Слушаем запросы на порту ${PORT}`);
});
