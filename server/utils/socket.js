import { Server } from "socket.io";
export const io = new Server({
  cors: {
    origin: "https://aystagame.netlify.app/",
    methods: ["GET", "POST"],
  },
});

export var Socket = {
  emit: function (event, data) {
    console.log(event, data);
    io.sockets.emit(event, data);
  },
};

io.on("connection", function (socket) {
  socket.on("createRoom", (roomName) => {
    console.log("before created room" + roomName);
    console.log(socket.rooms);
    socket.join(roomName);

    console.log("after created room" + roomName);
    console.log(socket.rooms);
  });
  socket.on("joinRoom", (roomName) => {
    console.log("before joining room" + roomName);
    console.log(socket.rooms);
    socket.join(roomName);

    console.log("after joining room" + roomName);
    console.log(socket.rooms);
    socket.emit("mess", "joined");
  });

  console.log(`A user connected ${socket.id}`);
});
