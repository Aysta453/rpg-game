import { Server } from "socket.io";
export const io = new Server({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
//    origin: "https://aystagame.netlify.app",
export var Socket = {
  emit: function (event, data) {
    console.log(event, data);
    io.sockets.emit(event, data);
  },
};

io.on("connection", function (socket) {
  socket.on("createRoom", (roomName) => {
    socket.join(roomName);
  });
  socket.on("joinRoom", (roomName, idOfRoom) => {
    socket.join(roomName);
    io.in(roomName).emit("mess", idOfRoom);
  });

  socket.on("closeRoom", (roomName) => {
    io.in(roomName).emit("leaving", 2);

    io.of("/")
      .in(roomName)
      .clients(function (error, clients) {
        if (clients.length > 0) {
          console.log("clients in the room: \n");
          console.log(clients);
          clients.forEach(function (socket_id) {
            io.sockets.sockets[socket_id].leave(roomName);
          });
        }
      });
  });

  console.log(`A user connected ${socket.id}`);
});
