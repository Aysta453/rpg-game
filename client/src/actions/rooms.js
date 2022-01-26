import { CREATE_ROOM, DELETE_ROOM, JOIN_ROOM, LEAVE_ROOM, SHOW_ROOM, SHOW_ROOMS, SHOW_ROOM_BY_NAME, SEND_UPDATE_ROOM_IN_GAME, DOWNLOAD_UPDATE_ROOM_IN_GAME } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const showrooms = () => async (dispatch) => {
  try {
    const { data } = await api.showRooms();

    dispatch({ type: SHOW_ROOMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.createRoom(post);

    dispatch({ type: CREATE_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const showroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.showRoom(post);

    dispatch({ type: SHOW_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const showroombyname = (post) => async (dispatch) => {
  try {
    const { data } = await api.showRoomByName(post);

    dispatch({ type: SHOW_ROOM_BY_NAME, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.deleteRoom(post);

    dispatch({ type: DELETE_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const joinroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.joinRoom(post);

    dispatch({ type: JOIN_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const leaveroom = (post) => async (dispatch) => {
  try {
    const { data } = await api.leaveRoom(post);

    dispatch({ type: LEAVE_ROOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const sendupdateroomingame = (formData) => async (dispatch) => {
  let { data } = {};
  try {
    data = formData;
    dispatch({ type: SEND_UPDATE_ROOM_IN_GAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const downloadupdateroomingame = (formData) => async (dispatch) => {
  let { data } = {};
  try {
    data = formData;
    dispatch({ type: DOWNLOAD_UPDATE_ROOM_IN_GAME, payload: data });
  } catch (error) {
    console.log(error);
  }
};
