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
//
io.on("connection", function (socket) {
  //creating new room for party and leader joining to room
  socket.on("createRoom", (roomName) => {
    socket.join(roomName);
  });

  //joining new member to party and send to all a message to refresh UI
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
    io.in(roomName).emit("check", "test");
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
  socket.on("kickFromRoom", (socketid, idOfOwner, roomNameOfParty, idOfRoom) => {
    socket.broadcast.to(socketid).emit("kicked", idOfOwner, roomNameOfParty, idOfRoom);
  });
  //remove member from party
  socket.on("kicking", (roomName, idOfRoom) => {
    socket.leave(roomName);
    io.in(roomName).emit("mess", idOfRoom);
  });

  //start game of multiplayer
  socket.on("startGame", (roomName) => {
    io.in(roomName).emit("gameStarted");
  });
  socket.on("updateBattle", (data, roomName, nick) => {
    if (nick === roomName) {
      let randomNember;
      do {
        do {
          randomNember = Math.floor(Math.random() * 2);
        } while (data.players[randomNember].heroPower.currentHealthPoints === 0);

        let hit = Math.random() * 100 + 1;
        if (hit <= data.players[randomNember].heroPower.chanceOnDodge) {
        } else {
          if (hit <= data.players[randomNember].heroPower.chanceOnBlock) {
            let damage =
              Math.floor(
                Math.floor(Math.random() * data.monster.monsterMaxAttack - data.monster.monsterMinAttack + 1) + data.monster.monsterMinAttack - data.players[randomNember].heroPower.defensePoints
              ) * 0.25;
            data.players[randomNember].heroPower.currentHealthPoints = data.players[randomNember].heroPower.currentHealthPoints - damage;
            console.log(randomNember, damage);
          } else {
            let damage =
              Math.floor(
                Math.floor(Math.random() * data.monster.monsterMaxAttack - data.monster.monsterMinAttack + 1) + data.monster.monsterMinAttack - data.players[randomNember].heroPower.defensePoints
              ) * 0.25;
            data.players[randomNember].heroPower.currentHealthPoints = data.players[randomNember].heroPower.currentHealthPoints - damage;
            console.log(randomNember, damage);
            if (damage > 0) {
              data.players[randomNember].heroPower.currentHealthPoints = data.players[randomNember].heroPower.currentHealthPoints - damage;
            } else {
              data.players[randomNember].heroPower.currentHealthPoints = data.players[randomNember].heroPower.currentHealthPoints - 0;
            }
          }
        }
      } while (data.players[1].heroPower.currentHealthPoints === 0 && data.players[0].heroPower.currentHealthPoints === 0);
    }
    io.broadcast.to(roomName).emit("downloadBatte", data);
  });

  console.log(`A user connected ${socket.id}`);
});
