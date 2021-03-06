import { Server } from "socket.io";
export const io = new Server({
  cors: {
    origin: "https://aystagame.netlify.app",
    methods: ["GET", "POST"],
  },
});
//    origin: "http://localhost:3000",
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
    let typeOfCombatText = 0;
    //console.log(data.players[0].heroPower.currentHealthPoints, data.players[1].heroPower.currentHealthPoints);
    if (nick === roomName) {
      // + + +
      if (data.players[0].heroPower.currentHealthPoints > 0 && data.players[1].heroPower.currentHealthPoints > 0 && data.players[2].heroPower.currentHealthPoints > 0) {
        randomNember = Math.floor(Math.random() * 3);
        // + + -
      } else if (data.players[0].heroPower.currentHealthPoints > 0 && data.players[1].heroPower.currentHealthPoints > 0 && data.players[2].heroPower.currentHealthPoints < 0) {
        randomNember = Math.floor(Math.random() * 2);
        // - + +
      } else if (data.players[0].heroPower.currentHealthPoints < 0 && data.players[1].heroPower.currentHealthPoints > 0 && data.players[2].heroPower.currentHealthPoints > 0) {
        randomNember = Math.floor(Math.random() * 2) + 1;
        // + - +
      } else if (data.players[0].heroPower.currentHealthPoints > 0 && data.players[1].heroPower.currentHealthPoints < 0 && data.players[2].heroPower.currentHealthPoints > 0) {
        let randomTemp = Math.floor(Math.random() * 2);
        if (randomTemp === 0) {
          randomNember = 0;
        } else if (randomTemp === 1) {
          randomNember = 2;
        }
        // + - -
      } else if (data.players[0].heroPower.currentHealthPoints > 0 && data.players[1].heroPower.currentHealthPoints < 0 && data.players[2].heroPower.currentHealthPoints < 0) {
        randomNember = 0;
        // - + -
      } else if (data.players[0].heroPower.currentHealthPoints < 0 && data.players[1].heroPower.currentHealthPoints > 0 && data.players[2].heroPower.currentHealthPoints < 0) {
        randomNember = 1;
        // - - +
      } else if (data.players[0].heroPower.currentHealthPoints < 0 && data.players[1].heroPower.currentHealthPoints < 0 && data.players[2].heroPower.currentHealthPoints > 0) {
        randomNember = 2;
      }
      // console.log(randomNember);
      let hit = Math.random() * 100 + 1;
      if (hit <= data.players[randomNember].heroPower.chanceOnDodge) {
        damage = 0;
        typeOfCombatText = 3;
      } else {
        if (hit <= data.players[randomNember].heroPower.chanceOnBlock) {
          damage =
            Math.floor(
              Math.floor(Math.random() * data.monster.monsterMaxAttack - data.monster.monsterMinAttack + 1) + data.monster.monsterMinAttack - data.players[randomNember].heroPower.defensePoints
            ) * 0.25;

          typeOfCombatText = 2;
        } else {
          damage = Math.floor(
            Math.floor(Math.random() * data.monster.monsterMaxAttack - data.monster.monsterMinAttack + 1) + data.monster.monsterMinAttack - data.players[randomNember].heroPower.defensePoints
          );

          if (damage > 0) {
            typeOfCombatText = 1;
          } else {
            typeOfCombatText = 4;
            damage = 0;
          }
        }
      }
    }

    io.in(roomName).emit("dechpPlayer", randomNember, damage, typeOfCombatText);
  });
  socket.on("dechp", (damage, roomName) => {
    console.log(damage);
    io.in(roomName).emit("decreasehpenemy", damage);
  });
  socket.on("endBattle", (roomName, value) => {
    io.in(roomName).emit("endedBattle", value);
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
  socket.on("changeStats", (roomName, randomNember, typeOfBuff, statement, value) => {
    io.in(roomName).emit("changedStats", randomNember, typeOfBuff, statement, value);
  });
  socket.on("changeStatsAttack", (roomName, randomNember, typeOfBuff, minValue, maxValue) => {
    io.in(roomName).emit("changedStatsAttack", randomNember, typeOfBuff, minValue, maxValue);
  });

  console.log(`A user connected ${socket.id}`);
});
