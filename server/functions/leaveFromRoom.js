export default function leaveFromRoom(room, memberToLeave) {
  let index1;
  let playersTemp;
  for (let index = 0; index < room.players.length; index++) {
    if (room.players[index].owner === memberToLeave) {
      delete room.players[index];
      index1 = index;
    }
  }
  do {
    room.players[index1] = room.players[index1 + 1];
    index1++;
  } while (index1 < room.players.length);

  playersTemp = room.players;
  playersTemp.splice(room.players.length - 1, 1);
  room.players = playersTemp;

  return room;
}
