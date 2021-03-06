import { SHOW_ROOMS, CREATE_ROOM, SHOW_ROOM, DELETE_ROOM, LEAVE_ROOM, JOIN_ROOM, SHOW_ROOM_BY_NAME, SEND_UPDATE_ROOM_IN_GAME, DOWNLOAD_UPDATE_ROOM_IN_GAME } from "../constants/actionTypes";

export default (rooms = [], action) => {
  switch (action.type) {
    case SHOW_ROOMS:
      return action.payload;
    case CREATE_ROOM:
      return action.payload;
    case SHOW_ROOM:
      return action.payload;
    case SHOW_ROOM_BY_NAME:
      return action.payload;
    case DELETE_ROOM:
      return action.payload;
    case LEAVE_ROOM:
      return action.payload;
    case JOIN_ROOM:
      return action.payload;
    case SEND_UPDATE_ROOM_IN_GAME:
      return action.payload;
    case DOWNLOAD_UPDATE_ROOM_IN_GAME:
      return action.payload;
    default:
      return rooms;
  }
};
