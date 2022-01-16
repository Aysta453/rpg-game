export default function assignToRoom(room, member) {
  let { roomParty } = {};
  roomParty = room;
  roomParty.players[room.players.length] = member;
  return roomParty;
}
