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
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);

    io.in(roomName).emit("mess", "this is a test");
  });

  console.log(`A user connected ${socket.id}`);
});