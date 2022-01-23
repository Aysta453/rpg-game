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
  //creating new room for party and leader joining to room
  socket.on("createRoom", (roomName) => {
    socket.join(roomName);
  });

  //joining new member to party and send to all a message to refresh UI
  socket.on("joinRoom", (roomName, idOfRoom) => {
    socket.join(roomName);
    io.in(roomName).emit("mess", idOfRoom);
  });

  //destroying a room, send message to all room's members to leave
  socket.on("closeRoom", (roomName) => {
    io.in(roomName).emit("leavingRoom", roomName);
  });
  //leaving room by member
  socket.on("leaveRoom", (roomName) => {
    socket.leave(roomName);
  });
  //information that member was kicked
  socket.on("kickFromRoom", (socketid, idOfOwner) => {
    console.log(socketid, idOfOwner);
    //socket.broadcast.to(socketid).emit("kicked", idOfOwner);
  });
  //remove member from party
  socket.on("kicking", (roomName) => {
    socket.leave(roomName);
  });
  socket.on("startAGame", (roomName) => {
    socket.leave(roomName);
  });
  console.log(`A user connected ${socket.id}`);
});
