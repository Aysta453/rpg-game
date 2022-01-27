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
  socket.on("decreaseHpPlayer", (data, roomName, nick) => {
    let randomNember = 0;
    let damage = 0;
    if (nick === roomName) {
      do {
        randomNember = Math.floor(Math.random() * 2);
      } while (data.players[randomNember].heroPower.currentHealthPoints === 0);

      let hit = Math.random() * 100 + 1;
      if (hit <= data.players[randomNember].heroPower.chanceOnDodge) {
      } else {
        if (hit <= data.players[randomNember].heroPower.chanceOnBlock) {
          damage =
            Math.floor(
              Math.floor(Math.random() * data.monster.monsterMaxAttack - data.monster.monsterMinAttack + 1) + data.monster.monsterMinAttack - data.players[randomNember].heroPower.defensePoints
            ) * 0.25;
        } else {
          damage = Math.floor(
            Math.floor(Math.random() * data.monster.monsterMaxAttack - data.monster.monsterMinAttack + 1) + data.monster.monsterMinAttack - data.players[randomNember].heroPower.defensePoints
          );

          if (damage > 0) {
            damage = damage;
          } else {
            damage = 0;
          }
        }
      }
    }
    io.in(roomName).emit("dechpPlayer", randomNember, damage);
  });
  socket.on("dechp", (damage, roomName) => {
    io.in(roomName).emit("decreasehpenemy", damage);
  });

  socket.on("increaseMana", (roomName, randomNember, mp) => {
    io.in(roomName).emit("incMpPlayer", randomNember, mp);
  });
  socket.on("decreaseMana", (roomName, randomNember, mp) => {
    io.in(roomName).emit("decMpPlayer", randomNember, mp);
  });
  socket.on("increaseHealth", (roomName, randomNember, hp) => {
    io.in(roomName).emit("incHpPlayer", randomNember, hp);
  });
  socket.on("changeStats", (roomName, randomNember, typeOfBuff, value) => {
    io.in(roomName).emit("changedStats", randomNember, typeOfBuff, value);
  });
  socket.on("changeStatsHp", (roomName, randomNember, typeOfBuff, value) => {
    io.in(roomName).emit("changedStatsHp", randomNember, typeOfBuff, value);
  });

  console.log(`A user connected ${socket.id}`);
});
